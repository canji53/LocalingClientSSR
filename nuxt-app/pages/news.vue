<template>
  <main class="newsPage">
    <PageTitle :title="title" class="newsPage__title" />
    <NewsList :news-list="newsList" />
  </main>
</template>

<script>
import PageTitle from "@/components/Atoms/PageTitle"
import NewsList from "@/components/Organisms/NewsList"

export default {
  components: {
    PageTitle,
    NewsList,
  },
  data: () => ({
    title: "お知らせ",
    newsList: [
      {
        date: "2020/10/12",
        title: "ローカりんぐをリリース",
        text:
          "本日、ローカりんぐを正式リリースしました。全国のローカルメディアの素敵なコンテンツをおすすめすることを目的としたWEBサービスです。是非ともご利用ください。",
      },
    ],
  }),
  head() {
    return {
      title: "お知らせ",
    }
  },
}
</script>

<style lang="scss" scoped>
.newsPage {
  max-width: $article-width;
  margin: auto;
  padding: 40px 0;

  &__title {
    margin: 0 auto 0 24px;
  }
}
</style>
