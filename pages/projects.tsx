import Layout from "components/layout";
import { DATABASE_ID, TOKKEN } from "config";

export default function Projects({ projects }: any) {
  return (
    <Layout>
      <h1>총 프로젝트 {projects.results.length}</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-02-22",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
  const projects = await res.json();

  return {
    props: { projects },
  };
}
