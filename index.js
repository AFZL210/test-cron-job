import axios from "axios";

const callApi = () => {
    return axios.get("https://expp-ser.onrender.com/api/leaderboard")
        .then((res) => {
            console.log('1');
        })
        .catch((err) => {
            console.log('err1');
        });
};

const callChatApp = () => {
    return axios.get('https://chat-app-rv46.onrender.com/')
        .then((data) => {
            console.log('2');
        })
        .catch((err) => {
            console.log('err2');
        });
};

setInterval(() => {
    Promise.all([callApi(), callChatApp()])
        .then(() => {
            console.log('done');
        })
        .catch((error) => {
            console.log('error');
        });
}, 1200000);
