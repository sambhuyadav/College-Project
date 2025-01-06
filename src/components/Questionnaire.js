import React, { useState } from "react";

const Questionnaire = ({ setCategory }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption) {
      setCategory(selectedOption);
    }
  };

  return (
    <div className="questionnaire">
      <h2>What kind of news are you interested in?</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            value="technology"
            checked={selectedOption === "technology"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Technology
        </label>
        <label>
          <input
            type="radio"
            value="sports"
            checked={selectedOption === "sports"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Sports
        </label>
        <label>
          <input
            type="radio"
            value="business"
            checked={selectedOption === "business"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Business
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Questionnaire;