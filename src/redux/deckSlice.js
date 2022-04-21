import { createSlice } from "@reduxjs/toolkit";

const deckSlice = createSlice({
  name: "decks",
  initialState: {
    decks: [
      {
        id: 1,
        name: "Rendering in React",
        description:
          "React's component structure allows for quickly building a complex web application that relies on DOM manipulation. ",
      },
      {
        name: "React Router",
        description:
          "React Router is a collection of navigational components that compose declaratively with your application.",
        id: 2,
      },
    ],
    cards: [
      {
        id: 1,
        front: "Differentiate between Real DOM and Virtual DOM.",
        back: "Virtual DOM updates are faster but do not directly update the HTML",
        deckId: 1,
      },
      {
        id: 2,
        front: "How do you modify the state of a different React component?",
        back: "Not at all! State is visible to the component only.",
        deckId: 1,
      },
      {
        id: 3,
        front: "How do you pass data 'down' to a React child component?",
        back: "As properties or props",
        deckId: 1,
      },
      {
        front:
          "What path will match the follow Route?\n<Route>\n  <NotFound />\n</Route>",
        back: "All paths. A route with no path matches all URL's",
        deckId: 2,
        id: 4,
      },
      {
        front: "What does <Switch> do?",
        back: "Renders the first matching child <Route> ",
        deckId: 2,
        id: 5,
      },
    ],
  },
  reducers: {
    addDeck: (state, action) => {
      const { newDeck } = action.payload;
      state.decks.push(newDeck);
    },
    deleteDeck: (state, action) => {
      const { id } = action.payload;
      const index = state.decks.findIndex((item) => item.id == id);
      state.decks.splice(index, 1);
    },
    addCard: (state, action) => {},
    deleteCard: (state, action) => {
      const { type, id } = action.payload;
      if (type == "deck") {
        const filtered = state.cards.filter((item) => item.deckId != id);
        state.cards = filtered;
      } else if (type == "card") {
      }
    },
    updateDeck: (state, action) => {},
    updateCard: (state, action) => {},
  },
});

export const {
  addDeck,
  deleteDeck,
  addCard,
  deleteCard,
  updateDeck,
  updateCard,
} = deckSlice.actions;

export default deckSlice.reducer;
