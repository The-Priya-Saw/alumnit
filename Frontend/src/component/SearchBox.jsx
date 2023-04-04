import React, { useState } from "react";
import styled from "styled-components";

const ComboBoxContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 82%;
  margin-right: 10px;
`;

const ComboBoxInput = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: #333;
  box-sizing: border-box;
`;

const ComboBoxSuggestions = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: scroll;
  margin: 0;
  padding: 0;
  list-style-type: none;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const ComboBoxSuggestion = styled.li`
  padding: 10px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  text-align: left;

  &:hover {
    background-color: #ddd;
  }
`;

function SearchComboBox({ suggestions, onSearch }) {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    setShowSuggestions(value.length > 0);
    if (value.trim() == 0) {
      onSearch("", false);
    }
  };

  const handleSuggestionClick = (value) => {
    setQuery(value);
    setShowSuggestions(false);
    onSearch(value);
  };

  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        setShowSuggestions(false);
        onSearch(query);
      }}
    >
      <ComboBoxContainer>
        <ComboBoxInput
          type="search"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
        />
        {showSuggestions && (
          <ComboBoxSuggestions>
            {suggestions
              .filter((suggestion) => suggestion.toLowerCase().startsWith(query.toLowerCase()))
              .map((suggestion) => (
                <ComboBoxSuggestion
                  key={suggestion}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </ComboBoxSuggestion>
              ))}
          </ComboBoxSuggestions>
        )}
      </ComboBoxContainer>
    </form>
  );
}

export default SearchComboBox;
