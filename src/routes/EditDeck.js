import React, { useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import { useParams } from "react-router-dom";
import data from "../db";
import DeckForm from "../Components/DeckForm";
import { useNavigate } from "react-router-dom";

const { decks, cards } = data;
const EditDeck = () => {
  const navigate = useNavigate();
  const { deckId } = useParams();
  const currentDeck = decks.find((item) => item.id == deckId);
  const [deckData, setDeckData] = useState({
    name: currentDeck.name,
    desc: currentDeck.description,
  });

  function onSubmit(event) {
    event.preventDefault();
    currentDeck.name = deckData.name;
    currentDeck.description = deckData.desc;
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
        formData={deckData}
        setFormData={setDeckData}
        prevUrl={`/decks/${deckId}`}
      />
    </div>
  );
};

export default EditDeck;
