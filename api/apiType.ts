interface ITitle {
  plain_text: string;
}
interface IDesc {
  plain_text: string;
}

export interface Itag {
  id: string;
  name: string;
  color: string;
}

export interface IProjectDataType {
  id: string;
  properties: {
    Github: { url: string };
    WorkPeriod: { date: { end: string; start: string } };
    이름: { title: ITitle[] };
    Description: { rich_text: IDesc[] };
    태그: { multi_select: Itag[] };
  };
  cover: { external: { url: string } };
}

export interface IProjectsDataType {
  projects: { results: IProjectDataType[] };
}
