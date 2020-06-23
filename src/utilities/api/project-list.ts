export type ProjectList = { id: string }[]

const getProjectListPath = () =>
  `/api/projects.json`

export const loadProjectList = async (): Promise<ProjectList> => {
  const response = await fetch(getProjectListPath())
  const json = await response.json()
  return json
}
