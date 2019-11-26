<template>
  <div></div>
</template>

<script>
export default {
  async fetch({ store }) {
    await store.dispatch('fetchArticles', GET_FEEDLY_URL)
  }
}
</script>
