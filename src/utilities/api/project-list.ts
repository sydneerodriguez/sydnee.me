export type ProjectList = { id: string }[]

const getProjectListPath = () =>
  `${process.env.BASE_URL}api/projects.json`

export const loadProjectList = async (): Promise<ProjectList> => {
  const response = await fetch(getProjectListPath())
  const json = await response.json()
  return json
}
