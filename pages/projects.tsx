import Layout from "components/layout";
import { DATABASE_ID, TOKKEN } from "config";
import ProjectItem from "components/projects/prject-item";

export default function Projects({ projects }: any) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen p-5 mb-10">
        <h1 className="ml-3 text-4xl font-bold sm:text-6xl">총 프로젝트 <span className="pl-4 text-indigo-600">{projects.results.length}</span> 개</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 w-full py-6">
          {projects.results.map((project: any) => (
            <ProjectItem key={project.id} {...project} />
            ))} 
        </div>
      </div>
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
      sorts:[
        {
          "property":"이름",
          "direction":"ascending"
        }
      ]
    }),
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
  const projects = await res.json();
console.log(projects)
  return {
    props: { projects },
  };
}
