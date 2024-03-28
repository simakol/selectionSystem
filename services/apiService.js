const BASE_URL = "https://65f9cd383909a9a65b196896.mockapi.io";
const ENDPOINT = "cars";

function getAll() {
  return axios.get(`${BASE_URL}/${ENDPOINT}`).then(({ data }) => data);
}

function addNewSelection(selections) {
  return axios.post(`${BASE_URL}/${ENDPOINT}`, selections);
}

export default { getAll, addNewSelection };
