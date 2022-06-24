import Image from "next/image";
import { Itag } from "types";
export default function ProjectItem(data:any){
   const {properties, cover} = data;
   const prjInfo = {
      title : properties["이름"].title[0].plain_text,
      githubLink : properties.Github.url,
      description : properties.Description.rich_text[0].plain_text,
      imgUrl : cover.external.url,
      tags: properties['태그'].multi_select,
      startDateString: properties.WorkPeriod.date.start,
      endDateString: properties.WorkPeriod.date.end
    }

    const getDateDiff = (start:string, end:string) => {
        const startDate = new Date(start);
        const endDate = new Date(end);
        const diffDate = startDate.getTime() - endDate.getTime();
        return Math.abs(diffDate / (1000 * 60 * 60 * 24)); 
    }
    return(
        <div className="project-card">
            <Image className="rounded-t-xl" src={prjInfo.imgUrl} alt="cover image" width="100%" height="60%" layout="responsive" objectFit="fill" quality={100} />
            <div className="p-3">
                <h1 className="text-2xl font-bold">{prjInfo.title}</h1>
                <h3 className="mt-4 text-lg">{prjInfo.description}</h3>
                <a href={prjInfo.githubLink}>깃허브 바로가기</a>
                <h3 className="mt-4 font-bold">작업기간</h3>
                <p>{prjInfo.startDateString} ~ {prjInfo.endDateString}</p>
                <span className="font-bold text-indigo-600 text-sm">Total : {getDateDiff(prjInfo.startDateString, prjInfo.endDateString)} Day</span>
                <div className="flex items-start mt-2">
                    {prjInfo.tags.map((tag:Itag)=>(
                        <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"  key={tag.id}>{tag.name}</h1>
                    ))}
                </div>
            </div>
        </div>
    )
}