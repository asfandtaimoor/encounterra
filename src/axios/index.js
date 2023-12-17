// axios.js
import axios from "axios";
// let token = JSON.parse(localStorage.getItem("user-token"));

export default axios.create({
  // baseURL: "https://reham.mukkancom.dev/api/",
  baseURL: "https://encounterra.com/api/",
  // headers: { Authorization: `Bearer ${token}` },
});
