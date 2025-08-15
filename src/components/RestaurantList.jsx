import { Link } from "react-router-dom";

export default function RestaurantList({ restaurants }) {
  if (!restaurants?.length) {
    return <p className="text-blue-600">No restaurants found.</p>;
  }

  return (
    <ul className="grid gap-3">
      {restaurants.map((restaurant) => (
        <li
          key={restaurant.id}
          className="border border-blue-300 bg-white rounded-2xl p-4 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-blue-800">
                {restaurant.name}
              </h2>
              <p className="text-sm text-blue-700">{restaurant.description}</p>
            </div>
            <span className="text-sm text-blue-600">
              ⭐ {restaurant.avg_rating ?? 0}
            </span>
          </div>

          <Link
            to={`/restaurants/${restaurant.id}`}
            className="inline-block mt-2 text-blue-600 hover:underline"
          >
            View details
          </Link>
        </li>
      ))}
    </ul>
  );
}