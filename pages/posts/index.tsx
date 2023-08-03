import type { GetStaticProps, NextPage } from "next";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import { PostList } from "@/components/PostList";
import Head from 'next/head';

interface PostsProps {
  posts: Array<MDXFrontMatter>;
}

const Posts: NextPage<PostsProps> = ({ posts }) => {
  return (
    <>
      <Page
        title="محصولات"
        description="لیست تمام محصولاتی که میتوانید سفارش دهید"
      >
        <PostList posts={posts} />
      </Page>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    props: {
      posts: mdxFiles,
    },
  };
};

export default Posts;
