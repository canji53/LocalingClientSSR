<template>
  <nav class="siteLink">
    <ul>
      <li v-for="site in siteLinkList" :key="site.link">
        <nuxt-link :to="site.link">
          {{ site.text }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    siteLinkList: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.siteLink {
  & > ul {
    display: flex;
    flex-flow: row wrap;
    list-style-type: none;

    & > li {
      margin-left: 12px;

      & > a {
        font-size: $base-font-size;
        line-height: $base-font-size;
        color: $base-color;
      }
    }
  }
}
</style>
