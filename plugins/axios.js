export default function({ $axios }){
  const current_env = process.env.NODE_ENV
  $axios.onResponse(({ data: response_data, status: response_status }) => {
    const { code, data, message } = response_data
    if (response_status === 200) {
      if (code === 'SUCCESS') {
        // if (data.type && data.type === 'Buffer') {

        // }
        return { code, data }
      }
      return { code, message }
    }
  })
}