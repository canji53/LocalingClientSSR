export const state = () => ({
  value: null,
})

export const mutations = {
  initialize(state) {
    state.value = null
  },
  set(state, value) {
    state.value = value
  },
}

export const getters = {
  get(state) {
    return state.value
  },
}
