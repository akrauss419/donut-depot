import sendRequest from "./send-request";
const BASE_URL = '/api/donuts';

export async function index() {
  return await sendRequest(BASE_URL);
}

export async function create(donutData) {
  return sendRequest(`${BASE_URL}/new`, 'POST', donutData);
}

export async function updateDonut(donutFormData, id) {
  return sendRequest(`${BASE_URL}/${id}/update`, 'PUT', donutFormData);
}

export async function deleteDonut(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export async function createComment(commentData, donut) {
  return sendRequest(`${BASE_URL}/${donut._id}/comments`, 'POST', commentData);
}

export async function deleteComment(donutId, commentId) {
  return sendRequest(`${BASE_URL}/${donutId}/comments/${commentId}`, 'DELETE');
}