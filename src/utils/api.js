import axios from "axios";
const BASE_URL = "https://youtube138.p.rapidapi.com";
const options = {
  params: {
    q: 'desp',
    hl: "en",
    gl: "US",
  },
  headers: {
    'X-RapidAPI-Key': '6458b6f9e8msh73be09f5bdffd7ap12c29bjsn3083cd0889ed',
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApi = async (url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}
