// Server-only: reads the filesystem via `fs`/`path`. Import only from
// Server Components or route handlers — never from a "use client" file.
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  keywords: string[];
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
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
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
    contentHtml,
  };
}
