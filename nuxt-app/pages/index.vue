<template>
  <main class="indexPage">
    <ContentList />
  </main>
</template>

<script>
import ContentList from "@/components/Organisms/ContentList"

export default {
  components: {
    ContentList,
  },
  async fetch(context) {
    if (context.store.getters["content/get"].length === 0) {
      await context.store.dispatch("content/readContentList")
    }
  },
  head() {
    return {
      title: "ホーム",
    }
  },
}
</script>

<style lang="scss">
.indexPage {
  margin: auto;

  // contents > 1512px
  @include min-screen($column6-width) {
    width: $column6-width;
  }

  // 1512px > contents > 1260px
  @include screen($column6-width, $column5-width) {
    width: $column5-width;
  }

  // 1260px > contents > 1008px
  @include screen($column5-width, $column4-width) {
    width: $column4-width;
  }

  // 1008px > contents > 756px
  @include screen($column4-width, $column3-width) {
    width: $column3-width;
  }

  // 756px > contents > 504px
  @include screen($column3-width, $column2-width) {
    width: $column2-width;
  }

  // contents < 504px; // スマホ対応
  @include max-screen($column2-width) {
    width: 95%;
  }
}
</style>
