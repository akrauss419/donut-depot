import sendRequest from "./send-request";
const BASE_URL = '/api/reviews';

export async function createReview(reviewData, shop) {
  return sendRequest(`/api/shops/${shop._id}/reviews`, 'POST', reviewData);
}