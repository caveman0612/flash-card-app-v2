import React, { useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import { useParams } from "react-router-dom";
import CardForm from "../Components/CardForm";
import { useSelector, useDispatch } from "react-redux";
import { addCard } from "../redux/deckSlice";

const CreateCard = () => {
  const dispatch = useDispatch();
  const { deckId } = useParams();
  const { decks } = useSelector((state) => state.data);
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
    dispatch(addCard({ newCard }));
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
