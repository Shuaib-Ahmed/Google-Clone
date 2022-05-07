import React, { createContext, useState } from "react";

export const searchContext = createContext({
  searchText: "",
  changeSearchText: (query) => {},
});

const SearchContextProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");

  const changeSearchText = (query) => {
    setSearchText(query);
  };

  return (
    <searchContext.Provider value={{ searchText, changeSearchText }}>
      {children}
    </searchContext.Provider>
  );
};
export default SearchContextProvider;
