import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import { Link, useParams } from "react-router-dom";
import { FaTrash, FaSave } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";

const DeckView = () => {
  const { deckId } = useParams();
  const decks = useSelector((state) => state.data.decks);
  const cards = useSelector((state) => state.data.cards);
  const currentDeck = decks.find((item) => item.id == deckId);
  const cardsInDeck = cards.filter((item) => item.deckId == deckId);

  function handleDeckDelete() {}
  return (
    <div className="container w-75">
      <BreadCrumb current={currentDeck.name} />
      <h2>{currentDeck.name}</h2>
      <p>{currentDeck.description}</p>
      <div className="d-flex">
        <Link
          to={`/decks/${deckId}/edit`}
          className="btn btn-secondary me-2 d-flex align-items-center"
        >
          <MdEdit size={20} />
          Edit
        </Link>
        <Link
          to={`/decks/${deckId}/study`}
          className="btn btn-primary d-flex align-items-center me-2"
        >
          <FaSave size={20} className="mr-2" />
          Study
        </Link>
        <Link
          to={`/decks/${deckId}/cards/new`}
          className="btn btn-primary d-flex align-items-center"
        >
          <AiOutlinePlus size={20} />
          Add Cards
        </Link>
        <button
          className="ms-auto btn btn-danger p-2"
          onClick={handleDeckDelete}
        >
          <FaTrash />
        </button>
      </div>
      <h3 className="my-3">Cards</h3>
      {cardsInDeck.map((card, idx) => (
        <div className="card my-3" key={idx}>
          <div className="row card-body">
            <div className="col">{card.front}</div>
            <div className="col">{card.back}</div>
          </div>
          <div className="d-flex justify-content-end pe-3 pb-3">
            <Link
              className="btn btn-secondary me-2 d-flex align-items-center"
              to={`/decks/${deckId}/cards/${card.id}/edit`}
            >
              <MdEdit size={20} />
              Edit
            </Link>
            <button className="btn btn-danger p-2">
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeckView;
