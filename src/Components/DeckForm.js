import React from "react";
import { Link } from "react-router-dom";

const DeckForm = ({ setFormData, formData, onSubmit, prevUrl }) => {
  function changeHandler(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  return (
    <form onSubmit={onSubmit} className="d-flex flex-column">
      <label htmlFor="newDeck" className="h5">
        Name
      </label>
      <input
        type="text"
        name="name"
        id="newDeck"
        placeholder="Deck Name"
        className="my-3 py-1"
        value={formData.name}
        onChange={changeHandler}
      />
      <label htmlFor="newDesc" className="h5">
        Description
      </label>
      <input
        type="text"
        name="desc"
        id="newDesc"
        placeholder="Brief Description of the deck"
        className="my-3 py-1"
        value={formData.desc}
        onChange={changeHandler}
      />
      <div className="pt-2">
        <Link to={prevUrl} className="btn btn-secondary me-3">
          Cancel
        </Link>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default DeckForm;
