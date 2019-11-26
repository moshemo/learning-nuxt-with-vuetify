<template>
  <div>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <div><b>Orign ID: </b> {{ article.originId }}</div>
        <div><b>Title: </b> {{ article.title }}</div>
        <div><b>Summary: </b>{{ article.summary.content }}</div>
        <div><b>Alternate: </b> {{ article.alternate.html }}</div>
        <div><b>Published: </b> {{ article.published }}</div>
        <div><b>Canonical URL: </b> {{ article.canonicalUrl }}</div>
        <div><b>Action Time Stamp: </b>{{ article.actionTimestamp }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const feedlyArticles = await app.$axios.$get(
      'https://cloud.feedly.com/v3/streams/contents?streamId=user/bc127873-c00c-4adb-ad1b-cd5680af094c/tag/2335b2f9-1337-4375-a956-1c9eca671996'
    )

    return {
      articles: feedlyArticles.items
    }
  }
}
</script>
