import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog";

type BlogPostGridProps = {
  posts: BlogPostMeta[];
  emptyMessage: string;
};

export default function BlogPostGrid({ posts, emptyMessage }: BlogPostGridProps) {
  if (posts.length === 0) {
    return (
      <p className="mt-14 text-center text-sm text-slate-600">
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className="mt-14 grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group rounded-2xl border border-line bg-white p-6 shadow-card transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-pop"
        >
          <span className="inline-flex items-center rounded-full bg-accent-tint px-3 py-1 text-xs font-bold text-accent">
            {formatPostDate(post.date)}
          </span>
          <h2 className="mt-3 text-[16.5px] font-bold text-brand transition-colors group-hover:text-accent">
            {post.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {post.excerpt}
          </p>
        </Link>
      ))}
    </div>
  );
}
