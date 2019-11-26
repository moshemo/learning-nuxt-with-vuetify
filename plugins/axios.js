export default function({ $axios }) {
  $axios.onRequest((config) => {
    config.headers.common['Authorization'] = process.env.FEEDLY_ACCESS_TOKEN
  })
}
