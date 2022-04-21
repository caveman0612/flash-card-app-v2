import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const CardForm = ({ onSubmit, formData, setFormData }) => {
  const { deckId } = useParams();

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  return (
    <form onSubmit={onSubmit} className="d-flex flex-column">
      <label htmlFor="front">Front</label>
      <textarea
        name="front"
        id="front"
        placeholder="Front side of card"
        className="my-3"
        value={formData.front}
        onChange={handleChange}
      ></textarea>
      <label htmlFor="back">Back</label>
      <textarea
        name="back"
        id="back"
        placeholder="Back side of card"
        className="my-3"
        value={formData.back}
        onChange={handleChange}
      ></textarea>
      <div className="">
        <Link to={`/decks/${deckId}`} className="btn btn-secondary me-3">
          Cancel
        </Link>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CardForm;
