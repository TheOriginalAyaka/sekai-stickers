import axios from "axios";
import config from "../config";

async function log(id, name, type) {
  const key = localStorage.getItem("x-key");
  try {
    const responce = await axios.post(
      `${config.apiUrl}/log`,
      {
        id: id,
        name: name,
        type: type,
      },
      {
        headers: {
          "x-key": key,
        },
      }
    );
    if (responce.data.key) {
      localStorage.setItem("x-key", responce.data.key);
    }
    console.log(responce.data);
    return responce.data;
  } catch (error) {
    console.log(error);
  }
}

export default log;
