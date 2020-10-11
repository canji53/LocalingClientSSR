<template>
  <footer class="defaultFooter">
    <div class="defaultFooter__body">
      <div class="defaultFooter__body--right">
        <SiteBiography />
      </div>
      <div class="defaultFooter__body--left">
        <SiteMap
          :site-link-list="siteLinkList"
          class="defaultFooter__body__siteMap"
        />
        <SitePolicy :site-policy-link-list="sitePolicyLinkList" />
      </div>
    </div>
    <div class="defaultFooter__copyright">
      <Copyright :copyright="copyright" />
    </div>
  </footer>
</template>

<script>
import SiteBiography from "@/components/Organisms/SiteBiography"
import SiteMap from "@/components/Molecules/SiteMap"
import SitePolicy from "@/components/Molecules/SitePolicy"
import Copyright from "@/components/Atoms/Copyright"

export default {
  components: {
    SiteBiography,
    SiteMap,
    SitePolicy,
    Copyright,
  },
  data: () => ({
    title: "ローカりんぐ",
    description: "全国の良質なローカルメディアの情報をお手元に",
    siteLinkList: [
      { text: "ホーム", link: "/" },
      { text: "メディア", link: "/media" },
      { text: "ローカりんぐとは？", link: "/about" },
      { text: "お知らせ", link: "/news" },
      { text: "お問い合わせ", link: "/contact" },
    ],
    sitePolicyLinkList: [
      { text: "ご利用規約", link: "/terms" },
      { text: "プライバシーポリシー", link: "/privacy" },
    ],
    copyright: "2020 ローカりんぐ",
  }),
}
</script>

<style lang="scss" scoped>
.defaultFooter {
  margin: auto;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  border-top: solid 1px $base-thin-color;

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
    width: 100%;
  }

  &__body {
    margin: 64px auto 32px auto;
    width: 90%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;

    &--left,
    &--right {
      width: 50%;
    }

    &--left {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;

      // contents < 756px; // スマホ対応
      @include max-screen($column3-width) {
        padding-left: 16px;
        flex-flow: column nowrap;
        align-items: flex-start;
      }
    }

    &__siteMap {
      margin-bottom: 16px;
    }
  }

  &__copyright {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
