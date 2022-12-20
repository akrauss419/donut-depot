import sendRequest from './send-request';
const BASE_URL = '/api/shops';

export async function index() {
  return await sendRequest(BASE_URL);
}

export async function create(shopData) {
  return sendRequest(`${BASE_URL}/new`, 'POST', shopData);
}

export async function deleteShop(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}