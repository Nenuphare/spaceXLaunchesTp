const axios = require("axios");
const { base } = require("../models/commentModel");

const baseUrl = 'https://api.spacexdata.com/v3/launches';

exports.getRandomText = async () => {
    let response = await axios.get(baseUrl);
    return response.data;
}