import sendRequest from "./send-request";
const BASE_URL = '/api/donuts';

export async function index() {
  return await sendRequest(BASE_URL);
}

export async function create(donutData) {
  return sendRequest(`${BASE_URL}/new`, 'POST', donutData);
}

export async function deleteDonut(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export async function createComment(commentData, donut) {
  return sendRequest(`${BASE_URL}/${donut._id}/comments`, 'POST', commentData);
}

export async function deleteComment(id, donut) {
  return sendRequest(`${BASE_URL}/${donut._id}/comments/${id}`, 'DELETE');
}