import Layout from "components/layout";
import { DATABASE_ID, TOKKEN } from "config";

export default function Projects({ projects }: any) {
  // console.log(projects);
  return (
    <Layout>
      <h1>총 프로젝트 {projects.results.length}</h1>
      {projects.results.map((project: any,index:number) => (
         <h1 key={index}>{project.properties["이름"].title[0].plain_text}</h1> 
      ))} 
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
    body: JSON.stringify({
      page_size: 100,
    }),
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
  const projects = await res.json();
console.log(projects)
  return {
    props: { projects },
  };
}
