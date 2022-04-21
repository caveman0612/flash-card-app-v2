import React, { useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import { useNavigate } from "react-router-dom";

import DeckForm from "../Components/DeckForm";
import { useDispatch, useSelector } from "react-redux";
import { addDeck } from "../redux/deckSlice";
const CreateDeck = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const _initialFormData = { name: "", desc: "" };
  const [formData, setFormData] = useState(_initialFormData);

  function onSubmit(event) {
    event.preventDefault();
    if (!formData.name) {
      alert("Name is Required");
      return;
    }
    const id = Date.now();
    const newDeck = { ...formData, id };
    dispatch(addDeck({ newDeck }));
    setFormData(_initialFormData);
    navigate(`/decks/${id}`);
  }

  return (
    <div className="container w-75">
      <BreadCrumb current={"Create Deck"} />
      <DeckForm
        onSubmit={onSubmit}
        formData={formData}
        setFormData={setFormData}
        prevUrl="/decks"
      />
    </div>
  );
};

export default CreateDeck;
