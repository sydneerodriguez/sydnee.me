import Vue, { ComponentOptions } from 'vue'
import { Blurhash, loadBlurhash, loadProject, loadProjectList, Project, ProjectList } from './utilities/api'

interface State {
  blurhash: Blurhash;
  list: ProjectList;
  projects: Record<string, Project>;
}

const state = Vue.observable<State>({
  blurhash: {},
  list: [],
  projects: {},
})

const getters = {
  getBlurhash: (asset: string): Blurhash[keyof Blurhash] | null => state.blurhash[asset] || null,
  getProjectList: () => state.list,
  getProject: (id: string): Project | null => state.projects[id] || null,
}

const mutations = {
  setBlurhash: (blurhash: Blurhash) => (state.blurhash = blurhash),
  setProjectList: (list: ProjectList) => (state.list = list),
  setProject: (id: string, project: Project) => (state.projects = { ...state.projects, [id]: project }),
}

const actions = {
  loadBlurhash: () => {
    loadBlurhash()
      .then((blurhash) => mutations.setBlurhash(blurhash))
  },
  loadProjectList: () => {
    loadProjectList()
      .then((list) => mutations.setProjectList(list))
  },
  loadProject: (id: string) => {
    loadProject(id)
      .then((project) => mutations.setProject(id, project))
  },
}

export const store = { ...getters, ...mutations, ...actions }

export const mixin: ComponentOptions<Vue> = {
  methods: store,
}
