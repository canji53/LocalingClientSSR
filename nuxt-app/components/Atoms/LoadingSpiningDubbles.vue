<template>
  <VueLoading
    v-if="isLoading"
    :type="type"
    :color="color"
    :size="{ width: width + 'px', height: height + 'px' }"
    class="loadingSpiningDubbles"
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
    type: "spiningDubbles",
    color: "#555",
  }),
}
</script>
