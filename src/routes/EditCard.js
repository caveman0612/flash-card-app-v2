import React, { useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import { useParams, useNavigate } from "react-router-dom";
import CardForm from "../Components/CardForm";
import { useSelector, useDispatch } from "react-redux";
import { updateCard } from "../redux/deckSlice";

const EditCard = () => {
  const { decks, cards } = useSelector((state) => state.data);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { deckId, cardId } = useParams();
  const currentDeck = decks.find((item) => item.id == deckId);
  const currentCard = cards.find((item) => item.id == cardId);

  const [cardData, setCardData] = useState(currentCard);

  function onSubmit(event) {
    event.preventDefault();
    dispatch(updateCard({ cardData }));
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
