<template>
  <nav class="siteMap">
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
.siteMap {
  & > ul {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    list-style-type: none;

    & > li {
      margin-bottom: 8px;

      & > a {
        line-height: $base-font-size;
        font-size: $base-font-size;
        color: $base-color;
      }
    }
  }
}
</style>
