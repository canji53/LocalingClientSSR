<template>
  <client-only>
    <div class="markdown" v-html="render" />
  </client-only>
</template>

<script>
export default {
  props: {
    markdownString: {
      type: String,
      required: true,
    },
  },
  computed: {
    render() {
      return this.markdownString
    },
  },
}
</script>

<style lang="scss">
.markdown {
  & > section {
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    margin: 0 8px;
    color: $base-color;

    & > p {
      margin: 8px 0;
      font-size: $base-font-size;

      & > img {
        width: 100%;
      }
    }

    & > h1,
    & > h2,
    & > h3 {
      margin: 8px 0;
    }

    & > h1 {
      font-size: $large-font-size;
    }

    & > h2 {
      font-size: $medium-font-size;
    }

    & > h3 {
      font-size: $base-font-size;
    }

    & > ul {
      padding-left: 20px !important;

      & > li {
        margin: 4px 0;
        font-size: $base-font-size;
      }
    }

    & > hr {
      margin: 8px 0;
      height: 1px;
      border: 0;
      border-top: solid 1px $base-thin-color;
    }
  }

  // contents < 504px; // スマホ対応
  @include max-screen($column2-width) {
    & > section {
      & > p {
        font-size: $small-font-size;
      }

      & > h1 {
        font-size: $medium-font-size;
      }

      & > h2 {
        font-size: $base-font-size;
      }

      & > h3 {
        font-size: $small-font-size;
      }

      & > ul {
        & > li {
          font-size: $small-font-size;
        }
      }
    }
  }
}
</style>
