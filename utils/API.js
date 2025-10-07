import axios from "axios"

const api_key = "d2e7b4782af9031eeff315ab481672b6"
const user = "taching"

export default axios.create({
  baseURL: `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&limit=5&api_key=${api_key}&format=json`,
  responseType: "json",
})
