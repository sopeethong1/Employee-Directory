import axios from "axios";

// Export an object containing methods we'll use for accessing the Wikipedia API

export default {
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=20");
  },
};