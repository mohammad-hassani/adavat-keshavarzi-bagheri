import Link from "next/link";
import { formatDate } from "@/lib/formatDate";
import type { MDXFrontMatter } from "@/lib/types";
import { Prose } from "@/components/Prose";
import { cx, slugify } from "@/lib/utils";
import { Tag } from "./Tag";
import Image from "next/image";

interface PostListProps {
  posts: Array<MDXFrontMatter>;
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <ul
    className={cx(
      "divide-y -my-8",
      "divide-gray-200",
      "dark:divide-gray-700"
      )}
      >
      {posts.map((post, index) => {
        return (
          <li className="flex flex-col-reverse items-center justify-between py-8 lg:flex-row" key={index}>
            <article className="flex flex-col flex-wrap max-w-xs ">
              <h2 className="text-xl font-bold">
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </h2>
              {post.description ? (
                <div className="mt-3">
                  <Prose>
                    <p className="max-w-xs truncate lg:max-w-lg">{post.description}</p>
                  </Prose>
                </div>
              ) : null}
              {post.tags ? (
                <ul className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag, index) => {
                    return (
                      <li key={index}>
                        <Tag href={`/posts/tagged/${slugify(tag)}`}>{tag}</Tag>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </article>
            <Image className="w-40 h-40" src={""} alt=""/>
          </li>
        );
      })}
    </ul>
  );
};
