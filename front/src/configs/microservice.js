import axios from "axios";

const API_URL = "http://localhost:4000";

export default async function (method, route, data = {}) {
  try {
    const response = await axios({
      url: `${API_URL}${route}`,
      method,
      data,
    });
    console.log(response);
    return ["ok", response.data];
  } catch ({ response }) {
    return ["error", response.data];
  }
}
