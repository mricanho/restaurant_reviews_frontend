import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getRestaurant, createReview } from "../api";

export default function RestaurantDetail() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [reviewForm, setReviewForm] = useState({ content: "", rating: 5 });
  const [submitting, setSubmitting] = useState(false);

  async function load() {
    setLoading(true);
    try {
      const data = await getRestaurant(id);
      setRestaurant(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, [id]);

  async function handleAddReview(e) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await createReview(id, {
        content: reviewForm.content,
        rating: Number(reviewForm.rating),
      });
    // Backend returns { review, restaurant }
      setRestaurant((prev) => ({
        ...prev,
        reviews: [res.review, ...(prev?.reviews || [])],
        avg_rating: res.restaurant.avg_rating,
      }));
      setReviewForm({ content: "", rating: 5 });
    } catch (e) {
      setError(e.message);
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) return <div className="min-h-screen bg-blue-50 p-6 text-blue-600">Loading...</div>;
  if (error)   return <div className="min-h-screen bg-blue-50 p-6 text-red-600">{error}</div>;
  if (!restaurant) return <div className="min-h-screen bg-blue-50 p-6 text-blue-600">Not found</div>;

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-3xl mx-auto p-6 space-y-6">
        <Link to="/" className="text-blue-600 hover:underline">← Back</Link>

        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-blue-800">{restaurant.name}</h1>
            <p className="text-blue-700">{restaurant.description}</p>
          </div>
          <span className="text-sm text-blue-600">⭐ {restaurant.avg_rating ?? 0}</span>
        </header>

        {/* Formulario de review */}
        <section className="border border-blue-300 bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="font-semibold text-blue-800 mb-2">Write a review</h3>
          <form onSubmit={handleAddReview} className="space-y-3">
            <textarea
              className="border border-blue-300 rounded-xl px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your review..."
              value={reviewForm.content}
              onChange={(e) => setReviewForm({ ...reviewForm, content: e.target.value })}
              required
            />
            <div className="flex items-center gap-3">
              <label className="text-sm text-blue-700">Rating</label>
              <select
                className="border border-blue-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={reviewForm.rating}
                onChange={(e) => setReviewForm({ ...reviewForm, rating: e.target.value })}
              >
                {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
            <button
              disabled={submitting}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white"
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </section>

        {/* Reviews list */}
        <section className="space-y-3">
          <h3 className="font-semibold text-blue-800">Reviews</h3>
          <ul className="grid gap-3">
            {(restaurant.reviews || []).map(rv => (
              <li key={rv.id} className="border border-blue-300 bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-blue-800">{rv.content}</p>
                  <span className="text-sm text-blue-600">⭐ {rv.rating}</span>
                </div>
                <div className="text-xs text-blue-500">
                  {new Date(rv.created_at).toLocaleString()}
                </div>
              </li>
            ))}
            {(!restaurant.reviews || restaurant.reviews.length === 0) && (
              <li className="text-blue-600">No reviews yet. Be the first!</li>
            )}
          </ul>
        </section>
      </div>
    </div>
  );
}