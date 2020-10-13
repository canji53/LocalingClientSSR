export const state = () => ({
  value: 48,
})

export const mutations = {
  set(state, value) {
    state.value = value
  },
}

export const getters = {
  get(state) {
    return state.value
  },
}
