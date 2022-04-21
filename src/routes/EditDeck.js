import React, { useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import { useParams } from "react-router-dom";
import DeckForm from "../Components/DeckForm";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateDeck } from "../redux/deckSlice";

const EditDeck = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { deckId } = useParams();

  const decks = useSelector((state) => state.data.decks);
  const currentDeck = decks.find((item) => item.id == deckId);

  const [formData, setFormData] = useState({
    name: currentDeck.name,
    desc: currentDeck.description,
  });

  function onSubmit(event) {
    event.preventDefault();
    dispatch(updateDeck({ formData, deckId }));
    navigate(`/decks/${deckId}`);
  }

  return (
    <div className="container w-75">
      <BreadCrumb
        current="Edit Deck"
        previous={{ name: currentDeck.name, url: `/decks/${deckId}` }}
      />
      <DeckForm
        onSubmit={onSubmit}
        formData={formData}
        setFormData={setFormData}
        prevUrl={`/decks/${deckId}`}
      />
    </div>
  );
};

export default EditDeck;
