import * as axios from "axios"
const readContentListURI = `https://api.localing.ml/${process.env.ENVIRONEMNT}/content/list`

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
  async readContentList(context) {
    context.commit("loading/set", true, { root: true }) // ローディング開始

    const response = await axios
      .get(readContentListURI, {
        params: {
          lastEvaluatedKey: context.rootGetters["lastEvaluatedKey/get"],
          limit: context.rootGetters["limit/get"],
          prefecture: context.rootGetters["prefecture/get"],
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
      await context.commit("concat", response.data.contentList)

      // lastEvaluatedKeyをcommit
      if (typeof response.data.lastEvaluatedKey === "object") {
        context.commit("lastEvaluatedKey/set", response.data.lastEvaluatedKey, {
          root: true,
        })
      } else {
        context.commit("lastEvaluatedKey/initialize", null, { root: true })
      }
    }

    context.commit("loading/set", false, { root: true }) // ローディング終了
  },
}

export const getters = {
  get: (state) => {
    return state.list
  },
}
