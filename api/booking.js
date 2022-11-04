import axios from "axios";

export default axios.create({
  baseURL: "https://apidojo-booking-v1.p.rapidapi.com",
  headers: {
    'X-RapidAPI-Key': 'aa49d6080amsh4538726720a3623p15b072jsn4545483cdb7e',
    'X-RapidAPI-Host': 'apidojo-booking-v1.p.rapidapi.com'
  },
});