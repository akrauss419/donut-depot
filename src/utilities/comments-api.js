import sendRequest from "./send-request";
const BASE_URL = '/api/comments';

export async function createComment(commentData, donut) {
  return sendRequest(`/api/donuts/${donut._id}/comments`, 'POST', commentData);
}

export async function deleteComment(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}