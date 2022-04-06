import fs from "fs";
import path from "path";
import Head from "next/head";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
      </Head>
      <h2>Hello Anant!!</h2>
    </div>
  );
}

export async function getStaticProps() {
  // Get files from the posts directory.
  const files = fs.readdirSync(path.join("posts"));
  console.log(files);

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    console.log(markdownWithMeta);

    return {
      slug,
    };
  });

  console.log(posts);

  return {
    props: { posts: "The Posts" }, //test
  };
}
