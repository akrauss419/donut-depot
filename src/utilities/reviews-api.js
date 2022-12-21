import sendRequest from "./send-request";
const BASE_URL = '/api/reviews';

export async function createReview(reviewData, shop) {
  return sendRequest(`${BASE_URL}/${shop._id}/new`, 'POST', reviewData);
}

export async function deleteReview(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}