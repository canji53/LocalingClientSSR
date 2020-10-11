<template>
  <header class="defaultHeader">
    <SiteTitle :title="title" class="defaultHeader__siteTitle" />
    <SiteLink :site-link-list="siteLinkList" class="defaultHeader__siteLink" />
  </header>
</template>

<script>
import SiteTitle from "@/components/Atoms/SiteTitle"
import SiteLink from "@/components/Molecules/SiteLink"

export default {
  components: {
    SiteTitle,
    SiteLink,
  },
  data: () => ({
    title: "ローカりんぐ",
    siteLinkList: [
      { text: "コンテンツ", link: "/" },
      { text: "メディア", link: "/media" },
      { text: "情報提供", link: "/contact" },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.defaultHeader {
  height: 60px;
  margin: 16px auto;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;

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

  &__siteTitle {
    margin: 0 auto 0 16px;
  }

  &__siteLink {
    margin: 0 16px 0 auto;
  }

  // contents < 504px // スマホ対応
  @include max-screen($column2-width) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;

    &__siteTitle,
    &__siteLink {
      margin: 8px auto;
    }
  }
}
</style>
