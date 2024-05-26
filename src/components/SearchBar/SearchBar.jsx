import { useState } from "react";
import css from "./SearchBar.module.css";
import { Toaster } from "react-hot-toast";
import { showError } from "../../services/toaster";

const SearchBar = ({ onSubmit }) => {
  const [topic, setTopic] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (topic.trim() === "") {
      showError("Please enter a search query");
      return;
    }
    onSubmit(topic);
    console.log(topic);
  };

  const handleChange = (evt) => {
    setTopic(evt.target.value); // Updating the topic state as user types
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          type="text"
          name="topic"
          value={topic}
          onChange={handleChange} // Updating topic as user types
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
        <Toaster />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
