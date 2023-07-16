import axios from "axios";

const journalApi = axios.create({
  baseURL: "https://vue-demis-44da1-default-rtdb.firebaseio.com",
});

export default journalApi;
