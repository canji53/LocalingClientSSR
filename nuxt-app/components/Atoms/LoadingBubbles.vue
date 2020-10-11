<template>
  <VueLoading
    v-if="isLoading"
    :type="type"
    :color="color"
    :size="{ width: width + 'px', height: height + 'px' }"
    class="loadingBubbles"
  />
</template>

<script>
import { VueLoading } from "vue-loading-template"

export default {
  components: {
    VueLoading,
  },
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    type: "bubbles",
    color: "#555",
  }),
}
</script>
