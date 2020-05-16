import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:4000";

export default async function (method, route, data) {
  try {
    const response = await axios({
      url: `${API_URL}${route}`,
      method,
      data,
    });
    return ["ok", response.data];
  } catch ({ response }) {
    return ["error", response.data];
  }
}
