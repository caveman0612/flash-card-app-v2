import React, { useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import { useParams } from "react-router-dom";
import data from "../db";
import CardForm from "../Components/CardForm";

const { decks, cards } = data;

const CreateCard = () => {
  const { deckId } = useParams();
  const currentDeck = decks.find((item) => item.id == deckId);

  const _initialFormData = { front: "", back: "" };
  const [formData, setFormData] = useState(_initialFormData);

  function onSubmit(event) {
    event.preventDefault();
    const id = Date.now();
    const newCard = {
      id,
      front: formData.front,
      back: formData.back,
      deckId,
    };
    cards.push(newCard);
    setFormData(_initialFormData);
  }

  return (
    <div className="container w-75">
      <BreadCrumb
        current={"Add Card"}
        previous={{ url: `/decks/${deckId}`, name: currentDeck.name }}
      />
      <CardForm
        onSubmit={onSubmit}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
};

export default CreateCard;
