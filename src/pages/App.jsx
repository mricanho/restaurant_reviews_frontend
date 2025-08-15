import { useEffect, useState } from "react";
import { listRestaurants, createRestaurant } from "../api";
import RestaurantList from "../components/RestaurantList";
import RestaurantForm from "../components/RestaurantForm";

export default function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function loadRestaurants(query = "") {
    setIsLoading(true);
    try {
      const data = await listRestaurants(query);
      setRestaurants(data);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadRestaurants();
  }, []);

  async function handleCreateRestaurant(formValues) {
    try {
      await createRestaurant(formValues);
      await loadRestaurants(searchQuery); // refresh with current filter
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-3xl mx-auto p-6 space-y-6">
        {/* Header with search */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h1 className="text-3xl font-bold text-blue-800">Restaurant Reviews</h1>
          <div className="flex gap-2">
            <input
              aria-label="Search restaurants"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search restaurants..."
              className="border border-blue-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => loadRestaurants(searchQuery)}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white"
            >
              Search
            </button>
          </div>
        </header>

        {/* Errors */}
        {errorMessage && (
          <div role="alert" className="text-red-600">
            {errorMessage}
          </div>
        )}

        {/* List */}
        {isLoading ? (
          <div className="text-blue-600">Loading...</div>
        ) : (
          <RestaurantList restaurants={restaurants} />
        )}

        {/* Create form */}
        <section className="border border-blue-300 bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="font-semibold text-blue-800 mb-2">Add new restaurant</h3>
          <RestaurantForm onSubmit={handleCreateRestaurant} />
        </section>
      </div>
    </div>
  );
}