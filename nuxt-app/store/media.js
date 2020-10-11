import * as axios from "axios"
const readMediaListURI = `https://api.localing.ml/${process.env.ENVIRONEMNT}/media/list`

export const state = () => ({
  list: [],
})

export const mutations = {
  initialize(state) {
    state.list = []
  },
  concat(state, additionallist) {
    Array.prototype.push.apply(state.list, additionallist)
  },
}

export const actions = {
  /**
   * コンテンツ一覧をAPI経由で取得
   * @param {*} context
   */
  async readMediaList(context) {
    const response = await axios
      .get(readMediaListURI, {
        params: {
          order: context.rootGetters["order/get"],
        },
      })
      .then((response) => {
        return response
      })
      .catch((error) => {
        return { data: { message: error.message } }
      })

    if (response.status === 200) {
      await context.commit("concat", response.data.mediaList)
    }
  },
}

export const getters = {
  get: (state) => {
    return state.list
  },
}
