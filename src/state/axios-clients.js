import axios from "axios"

export default {
  default: {
    client: axios.create({
      baseURL: process.env.GATSBY_BACKEND_API,
      responseType: "json",
    }),
  },
}
