const API_URL = import.meta.env.VITE_API_URL;

async function http(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || (body.errors && body.errors.join(", ")) || res.statusText);
  }
  return res.json();
}

export const listRestaurants = (q="") =>
  http(`/restaurants${q ? `?q=${encodeURIComponent(q)}` : ""}`);

export const getRestaurant = (id) => http(`/restaurants/${id}`);

export const createRestaurant = (payload) =>
  http(`/restaurants`, { method: "POST", body: JSON.stringify({ restaurant: payload }) });

export const createReview = (restaurantId, payload) =>
  http(`/restaurants/${restaurantId}/reviews`, {
    method: "POST",
    body: JSON.stringify({ review: payload }),
});