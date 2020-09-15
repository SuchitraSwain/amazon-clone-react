import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-4b2b2.cloudfunctions.net/api", // the API (cloud function) URL
});

export default instance;

// http://localhost:5001/clone-faeaf/us-central1/api
// https://console.firebase.google.com/project/clone-faeaf/overview
// https://us-central1-challenge-4b2b2.cloudfunctions.net/api