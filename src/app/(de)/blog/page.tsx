import { BlogIndexPage } from "@/components/blog-index-page";
import { blogIndexMetadata } from "@/lib/seo";

export const metadata = blogIndexMetadata("de", 1);

export default function GermanBlogPage() {
  return <BlogIndexPage locale="de" page={1} />;
}
