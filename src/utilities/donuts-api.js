import sendRequest from "./send-request";
const BASE_URL = '/api/donuts';

export async function index() {
  return await sendRequest(BASE_URL);
}

export async function create(donutData) {
  return sendRequest(`${BASE_URL}/new`, 'POST', donutData);
}

export async function createComment(commentData, donut) {
  console.log(commentData);
  return sendRequest(`${BASE_URL}/${donut._id}/comments`, 'POST', commentData);
}