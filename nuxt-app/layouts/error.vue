<template>
  <main class="errorPage">
    <h1>{{ title }}</h1>
    <p>お探しのページは見つかりませんでした。</p>
    <nuxt-link :to="to"> ホームに戻る </nuxt-link>
  </main>
</template>

<script>
export default {
  data: () => ({
    title: "404 Not Found",
    to: "/",
  }),
  head() {
    return {
      title: this.title,
      meta: [{ hid: "robots", name: "robots", content: "noindex" }],
    }
  },
}
</script>

<style lang="scss">
body {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Segoe UI,
    Hiragino Kaku Gothic ProN, Hiragino Sans, ヒラギノ角ゴ ProN W3, Arial,
    メイリオ, Meiryo, sans-serif;
}

.errorPage {
  max-width: 600px;
  margin: auto;
  padding: 104px 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  & > h1 {
    margin: 24px auto;
    line-height: $large-font-size;
    font-size: $large-font-size;
    color: $base-color;
  }

  & > p {
    margin: 8px auto;
    line-height: $base-font-size;
    font-size: $base-font-size;
    color: $base-color;
  }

  & > a {
    margin: 8px auto;
    line-height: $base-font-size;
    font-size: $base-font-size;
    color: $link-color;
  }
}
</style>
