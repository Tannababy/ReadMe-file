// api.js
const axios = require("axios");

const getUser = async ({ github }) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${data.github}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = { getUser };
