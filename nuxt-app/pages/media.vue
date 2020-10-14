<template>
  <main class="mediaPage">
    <PageTitle :title="title" class="mediaPage__title" />
    <MediaList />
  </main>
</template>

<script>
import PageTitle from "@/components/Atoms/PageTitle"
import MediaList from "@/components/Organisms/MediaList"

export default {
  components: {
    PageTitle,
    MediaList,
  },
  data: () => ({
    title: "メディア一覧",
  }),
  async fetch(context) {
    if (context.store.getters["media/get"].length === 0) {
      await context.store.dispatch("media/readMediaList")
    }
  },
  head() {
    return {
      title: "メディア",
    }
  },
}
</script>

<style lang="scss">
.mediaPage {
  max-width: $article-width;
  margin: auto;
  padding: 40px 0;
  display: flex;
  flex-flow: column nowrap;

  &__title {
    margin: 0 auto 0 24px;
  }
}
</style>
