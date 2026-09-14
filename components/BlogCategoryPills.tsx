import Link from "next/link";
import { BLOG_CATEGORIES } from "@/lib/blog";

type BlogCategoryPillsProps = {
  activeSlug?: string;
};

export default function BlogCategoryPills({ activeSlug }: BlogCategoryPillsProps) {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-2">
      <Link
        href="/blog"
        className={`rounded-full px-4 py-1.5 text-sm font-bold transition-colors ${
          !activeSlug
            ? "bg-brand text-white"
            : "bg-accent-tint text-accent hover:bg-accent hover:text-white"
        }`}
      >
        Tümü
      </Link>
      {BLOG_CATEGORIES.map((category) => (
        <Link
          key={category.slug}
          href={`/blog/${category.slug}`}
          className={`rounded-full px-4 py-1.5 text-sm font-bold transition-colors ${
            activeSlug === category.slug
              ? "bg-brand text-white"
              : "bg-accent-tint text-accent hover:bg-accent hover:text-white"
          }`}
        >
          {category.label}
        </Link>
      ))}
    </div>
  );
}
