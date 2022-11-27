import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Form from "./components/Main/Form/Form";
import EntriesSection from "./components/Main/EntriesSection/EntriesSection";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const initialEntries = [
    {
      id: 1000,
      date: "Feb 5, 2025",
      motto: "We are in a state of chaos",
      notes:
        "Today I learned about React State. It was fun! I can't wait to learn more.",
      isFavorite: false,
    },
    {
      id: 999,
      date: "Feb 4, 2025",
      motto: "Props, Props, Props",
      notes:
        "Today I learned about React Props. Mad props to everyone who understands this!",
      isFavorite: false,
    },
    {
      id: 998,
      date: "Feb 3, 2025",
      motto: "How to nest components online fast",
      notes:
        "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
      isFavorite: false,
    },
    {
      id: 997,
      date: "Feb 2, 2025",
      motto: "I'm a React Developer",
      notes: "My React-ion when I learned about React: 😍",
      isFavorite: false,
    },
  ];

  const [entries, setEntries] = useState(initialEntries);
  const [filter, setFilter] = useState("all");

  const favoriteEntries = entries.filter((entry) => entry.isFavorite === true);

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries([
      { ...newEntry, id: nanoid(), date: date, isFavorite: false },
      ...entries,
    ]);
  }

  function handleToggleFavorite(id) {
    setEntries(
      entries.map((entry) => {
        if (entry.id === id) {
          return { ...entry, isFavorite: !entry.isFavorite };
        } else {
          return entry;
        }
      })
    );
  }

  function handleShowFavoriteEntries() {
    setFilter("favorites");
  }

  function handleShowAllEntries() {
    setFilter("all");
  }

  return (
    <>
      <Header />
      <Form onAddEntry={handleAddEntry} />
      <EntriesSection
        entries={filter === "favorites" ? favoriteEntries : entries}
        filter={filter}
        onToggleFavorite={handleToggleFavorite}
        onShowAllEntries={handleShowAllEntries}
        onShowFavoriteEntries={handleShowFavoriteEntries}
        allEntriesCount={entries.length}
        favoriteEntriesCount={favoriteEntries.length}
      />
      <Footer />
    </>
  );
}

export default App;
