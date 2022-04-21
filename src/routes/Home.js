import React from "react";
import { FaEye, FaSave, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { deleteAllCardsInDeck, deleteDeck } from "../redux/deckSlice";

const Home = () => {
  const dispatch = useDispatch();
  const decks = useSelector((state) => state.data.decks);

  function handleDeleteDeck(id) {
    const confirm = window.confirm("This will delete the deck and cards");
    if (confirm) {
      dispatch(deleteAllCardsInDeck({ id }));
      dispatch(deleteDeck({ id }));
    }
  }
  console.log(decks);
  return (
    <div className="container w-75">
      <Link className="my-3 btn btn-secondary" to={`/decks/new`}>
        + Create Decks
      </Link>
      {decks.map((deck, idx) => (
        <div className="card p-3 my-3" key={deck.id}>
          <div className="d-flex justify-content-between">
            <h2>{deck.name}</h2> <span>3 fix this later cards</span>
          </div>
          <div className="middle">
            <span>{deck.description}</span>
          </div>
          <div className="bottom d-flex mt-3">
            <Link
              className="btn btn-secondary d-flex align-items-center me-3"
              to={`/decks/${deck.id}`}
            >
              <FaEye size={20} className="me-1" />
              View
            </Link>
            <Link
              className="btn btn-primary d-flex align-items-center"
              to={`/decks/${deck.id}/study`}
            >
              <FaSave size={20} className="me-1" />
              Study
            </Link>
            <button
              className="btn btn-danger ms-auto"
              onClick={() => handleDeleteDeck(deck.id, idx)}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
