import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../Components/BreadCrumb";
import { useSelector } from "react-redux";

const Study = () => {
  const { deckId } = useParams();
  const { decks, cards } = useSelector((state) => state.data);

  const currentDeck = decks.find((item) => item.id == deckId);
  const cardsInDeck = cards.filter((item) => item.deckId == deckId);

  const _initialStudyState = { count: 0, frontShow: true };
  const [studyState, setStudyState] = useState(_initialStudyState);

  const length = cardsInDeck.length;

  function onFlip() {
    setStudyState({ ...studyState, frontShow: !studyState.frontShow });
  }

  function onNext() {
    if (studyState.count + 1 === length) {
      const confirm = window.confirm("Do you want to restart the cards?");
      if (confirm) {
        setStudyState(_initialStudyState);
      }
      return;
    }
    setStudyState({ frontShow: true, count: studyState.count + 1 });
  }

  return (
    <div className="container w-75 my-3">
      <BreadCrumb
        current="Study"
        previous={{ url: `/decks/${deckId}`, name: currentDeck.name }}
      />
      <h2 className="mb-5">{`Study: ${currentDeck.name}`}</h2>
      <div className="card card-body">
        <span>{`Card ${studyState.count + 1} of ${length}`}</span>
        <span className="my-3">
          {studyState.frontShow
            ? cardsInDeck[studyState.count].front
            : cardsInDeck[studyState.count].back}
        </span>
        <div className="d-flex">
          <button className="btn btn-secondary me-3" onClick={onFlip}>
            Flip
          </button>
          {studyState.frontShow ? null : (
            <button className="btn btn-primary" onClick={onNext}>
              next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Study;
