import React, { useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import { useParams } from "react-router-dom";
import data from "../db";
import CardForm from "../Components/CardForm";
import { useNavigate } from "react-router-dom";

const { decks, cards } = data;

const EditCard = () => {
  const navigate = useNavigate();
  const { deckId, cardId } = useParams();
  const currentDeck = decks.find((item) => item.id == deckId);
  const currentCard = cards.find((item) => item.id == cardId);

  const [cardData, setCardData] = useState(currentCard);

  function onSubmit(event) {
    event.preventDefault();
    currentCard.front = cardData.front;
    currentCard.back = cardData.back;
    navigate(`/decks/${deckId}`);
  }
  return (
    <div className="container w-75">
      <BreadCrumb
        current={`Edit Card ${cardId}`}
        previous={{ url: `/decks/${deckId}`, name: currentDeck.name }}
      />
      <CardForm
        formData={cardData}
        setFormData={setCardData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default EditCard;
