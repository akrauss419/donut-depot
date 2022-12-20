import sendRequest from "./send-request";
const BASE_URL = '/api/reviews';

export async function createReview(reviewData, shop) {
  return sendRequest(`/api/shops/${shop._id}/reviews`, 'POST', reviewData);
}

export async function deleteReview(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}