export default function({ $axios }){
  const current_env = process.env.NODE_ENV
  $axios.onResponse(({ data: response_data, status: response_status }) => {
    console.log('response_status',response_status);
    const { code, data, message } = response_data
    if (response_status === 200) {
      if (code === 'SUCCESS') {
        console.log('susss');
        return { code, data }
      }
      return { code, message }
    }
  })
}