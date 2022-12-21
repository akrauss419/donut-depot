import sendRequest from "./send-request";
const BASE_URL = '/api/comments';

export async function createComment(commentData, donut) {
  return sendRequest(`${BASE_URL}/${donut._id}/new`, 'POST', commentData);
}

export async function updateComment(commentFormData, id) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', commentFormData);
}

export async function deleteComment(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}