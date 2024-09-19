import { useState } from "react";




export const Review = () => {
  const [submittes, setSubmitted] = useState<boolean>(false);

  return (
    <section data-test-id="review-step">
      <h2>Profile Details Review</h2>

      <div className="flex items-center justify-end mt-4">
        <button
          type="button"
          className="p-4 bg-green-500 text-white font-medium transition-all"
          data-test-id="submit-button"
        >
          Subiit
        </button>
      </div>

      {submittes && (
        <section data-test-id="success-message">
          <h2>You have Submitted this details successfully </h2>
        </section>
      )}
    </section>
  );
};
