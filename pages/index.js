import matter from 'gray-matter';
import Head from 'next/head';

export default function Home({ postData }) {
  const { data, content } = postData;

  return (
    <div>
        <Head>
          <title>My Static Site</title>
          <meta name="description" content="This is a sample static site." />
          <meta property="og:title" content="My Static Site" />
          <meta property="og:description" content="Sample static site using Next.js." />
        </Head>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <img src="/sami.jpg" alt="Example Image" loading="lazy" width = "300px" height={300}/>

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export async function getStaticProps() {
  // Import `fs` and `path` directly in this function.
  const fs = require('fs');
  const path = require('path');

  // Define file path and read file.
  const filePath = path.join(process.cwd(), 'posts', 'hello-world.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');

  // Parse the markdown content using gray-matter.
  const { data, content } = matter(fileContents);

  return {
    props: {
      postData: { data, content },
    },
  };
}

