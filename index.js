import axios from "axios";

const callApi = async () => {
  axios.get("https://expp-ser.onrender.com/api/leaderboard").then((res) => {
    console.log(res.data);
  });
};

setInterval(() => {
  callApi();
}, 1200000);
