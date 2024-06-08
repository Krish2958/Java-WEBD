/**
 * Food takers list response mapper.
 * @param {GrahLaxmiResponseObject[]} GrahLaxmiListResponse
 * @returns {GrahLaxmiObject[]}
 */
export const grahLaxmiListMapper = (GrahLaxmiListResponse) =>
  GrahLaxmiListResponse.map((taker) => ({
    id: taker.id,
    accountNumber: taker.accountNumber,
    aadharNumber: taker.aadharNumber,
    name: taker.name,
    city: taker.city,
    hasBplCard: taker.hasBplCard,
  }));

/**
 * Create food takers request payload mapper.
 * @param {GrahLaxmiObject} payload
 * @returns {GrahLaxmiResponseObject}
 */
export const createGrahLaxmiPayloadMapper = (payload) => {
  const GrahLaxmiPayload = {
    id: payload.id,
    accountNumber: payload.accountNumber,
    aadharNumber: payload.aadharNumber,
    name: payload.name,
    city: payload.city,
    hasBplCard: payload.hasBplCard,
  };

  return GrahLaxmiPayload;
};
