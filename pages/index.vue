<template>
  <div>
    <h3>Home</h3>
  </div>
</template>

<script>
export default {
  async fetch({ store }) {
    await store.dispatch('fetchArticles', GET_FEEDLY_URL)
  }
}
</script>
