import React, { useState, useEffect } from "react";
import useDebounce from "./hooks/useDebounce";
import Input from "./components/Input";
import Feedback from "./components/Feedback";

const App = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [resMessage, setResMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Using a custom debounce hook to avoid unnecessary API requests
  // Original code from https://usehooks.com/useDebounce/
  const debouncedSearch = useDebounce(search, 500);
  // Meaning: wait for 0.5s after user input to trigger an API call

  useEffect(() => {
    if (debouncedSearch) {
      fetch(`https://api.github.com/search/users?q=${debouncedSearch}`).then(
        (res) => {
          setIsLoading(false);
          // res.ok means response is successful
          if (res.ok) {
            res.json().then(({ items }) => {
              // Empty UI message as it's not needed now
              setResMessage("");
              setResults(items);
            });
          } else {
            // Display the server response in case response is unsuccessful
            setResMessage(res.statusText);
          }
        }
      );
    } else {
      // No request if search is empty
      setResMessage("");
      setResults([]);
    }
  }, [debouncedSearch]);

  const handleNewSearch = (e) => {
    setIsLoading(true);
    setSearch(e.target.value);
  };

  return (
    <>
      <Input search={search} handleChange={handleNewSearch} />
      <Feedback
        search={search}
        results={results}
        resMessage={resMessage}
        isLoading={isLoading}
      />
    </>
  );
};

export default App;
