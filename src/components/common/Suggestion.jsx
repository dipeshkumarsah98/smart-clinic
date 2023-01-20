import React from "react";

const Suggestion = () => {
  return (
    <div className="bg-white px-5 py-4 font-merienda rounded-lg shadow-xl border border-gary-2 ">
      <h1>Recomendation</h1>
      <ol className="space-y-2 list-disc text-justify">
        <li>
          Monitor blood sugar levels regularly and keep track of the results.
        </li>
        <li>
          Follow a healthy diet that is low in sugar and saturated fat, and high
          in fruits, vegetables, and whole grains.
        </li>
        <li>
          Exercise regularly to help lower blood sugar levels and improve
          overall health.
        </li>
        <li>Take medications as prescribed by your doctor.</li>
        <li>Avoid smoking and limit alcohol consumption.</li>
      </ol>
    </div>
  );
};

export default Suggestion;
