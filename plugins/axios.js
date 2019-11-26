export default function({ $axios }) {
  $axios.onRequest((config) => {
    config.headers.common[
      'Authorization'
    ] = `OAuth ${process.env.FEEDLY_ACCESS_TOKEN}`
  })
}
