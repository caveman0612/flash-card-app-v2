import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import NavBar from "./Components/NavBar";
import CreateDeck from "./routes/CreateDeck";
import DeckView from "./routes/DeckView";
import Study from "./routes/Study";
import EditDeck from "./routes/EditDeck";
import CreateCard from "./routes/CreateCard";
import EditCard from "./routes/EditCard";

function App() {
  return (
    <div className="app-routes">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decks" element={<Home />} />
        <Route path="/decks/new" element={<CreateDeck />} />
        <Route path="/decks/:deckId" element={<DeckView />} />
        <Route path="/decks/:deckId/study" element={<Study />} />
        <Route path="/decks/:deckId/edit" element={<EditDeck />} />
        <Route path="/decks/:deckId/cards/new" element={<CreateCard />} />
        <Route
          path="/decks/:deckId/cards/:cardId/edit"
          element={<EditCard />}
        />
      </Routes>
    </div>
  );
}

export default App;
