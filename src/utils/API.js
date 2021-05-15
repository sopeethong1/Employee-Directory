import axios from "axios";

// Export an object containing methods we'll use for accessing the Wikipedia API

let userApi = "https://randomuser.me/api/?results=20"

export default {
  getUsers: function() {
    return axios.get(userApi);
  },
};