import { BlogIndexPage } from "@/components/blog-index-page";
import { blogIndexMetadata } from "@/lib/seo";

export const metadata = blogIndexMetadata("en", 1);

export default function EnglishBlogPage() {
  return <BlogIndexPage locale="en" page={1} />;
}
