import sendRequest from "./send-request";
const BASE_URL = '/api/comments';

export async function index(donut) {
  return await sendRequest(`/api/donuts/${donut._id}`);
}

export async function createComment(commentData, donut) {
  return sendRequest(`/api/donuts/${donut._id}/comments`, 'POST', commentData);
}

export async function updateComment(commentFormData, id) {
  return sendRequest(`${BASE_URL}/${id}/update`, 'PUT', commentFormData);
}

export async function deleteComment(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}