// Server-only: reads the filesystem via `fs`/`path`. Import only from
// Server Components or route handlers — never from a "use client" file.
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export const BLOG_CATEGORIES = [
  { slug: "piyasa-trendler", label: "Piyasa & Trendler" },
  { slug: "urun-rehberi", label: "Ürün Rehberi" },
  { slug: "operasyon", label: "Operasyon" },
  { slug: "hukuk-guvenlik", label: "Hukuk & Güvenlik" },
] as const;

export type BlogCategorySlug = (typeof BLOG_CATEGORIES)[number]["slug"];

export function getCategoryLabel(slug: string): string {
  return BLOG_CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  keywords: string[];
  category: string;
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};

export function getAllPostSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}

export function getAllPosts(): BlogPostMeta[] {
  const posts = getAllPostSlugs().map((slug) => {
    const fileContents = fs.readFileSync(
      path.join(BLOG_DIR, `${slug}.md`),
      "utf8"
    );
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      keywords: data.keywords ?? [],
      category: data.category,
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostsByCategory(categorySlug: string): BlogPostMeta[] {
  return getAllPosts().filter((post) => post.category === categorySlug);
}

/** "2026-08-02" -> "2 Ağustos 2026" (parsed as local calendar date, not UTC, to avoid off-by-one day shifts). */
export function formatPostDate(dateString: string) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    keywords: data.keywords ?? [],
    category: data.category,
    contentHtml,
  };
}
