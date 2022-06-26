import Layout from "components/layout";
import Head from "next/head";
import ProjectItem from "components/projects/prject-item";
import { getDatas } from "api/api";
import { IProjectDataType, IProjectsDataType } from "api/apiType";

export default function Projects({ projects }: IProjectsDataType) {
  return (
    <Layout>
      <Head>
        <title>포트폴리오</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen p-5 mb-10">
        <h1 className="ml-3 text-4xl font-bold sm:text-6xl">
          총 프로젝트 <span className="pl-4 text-indigo-600">{projects.results.length}</span> 개
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 w-full py-6">
          {projects.results.map((project: IProjectDataType) => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: { projects: await getDatas() },
  };
}
