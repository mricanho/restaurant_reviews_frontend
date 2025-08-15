import { useState } from "react";

export default function RestaurantForm({ onSubmit }) {
  // State
  const [values, setValues] = useState({ name: "", description: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  // Submit
  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setFormError("");

    try {
      // Delegate creation to parent
      await onSubmit(values);
      setValues({ name: "", description: "" });
    } catch (error) {
      setFormError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {formError && (
        <div role="alert" className="text-red-600">
          {formError}
        </div>
      )}

      <input
        aria-label="Restaurant name"
        className="border border-blue-300 rounded-xl px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Name"
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
        required
      />
      <textarea
        aria-label="Restaurant description"
        className="border border-blue-300 rounded-xl px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Description"
        value={values.description}
        onChange={(e) => setValues({ ...values, description: e.target.value })}
      />
      <button
        disabled={isSubmitting}
        className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white"
      >
        {isSubmitting ? "Creating..." : "Create"}
      </button>
    </form>
  );
}