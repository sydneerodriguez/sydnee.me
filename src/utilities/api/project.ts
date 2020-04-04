export interface ImageContent {
  type: 'image';
  src: string;
}

export interface TextContent {
  type: 'text';
  content: Content[];
}

export type Content = ImageContent | TextContent | string

export interface Project {
  template: 'article';
  title: string;
  description: string;
  date: [number, number, number];
  content: Content[];
}

const getProjectPath = (id: string): string =>
  `${process.env.BASE_URL}api/projects/${id}.json`

export const loadProject = async (id: string): Promise<Project> => {
  const response = await fetch(getProjectPath(id))
  const json = await response.json()
  return json
}
