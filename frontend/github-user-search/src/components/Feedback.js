import React from "react";

const Feedback = ({ search, results, resMessage, isLoading }) => {
  return resMessage ? (
    // Inform the user when request does not succeed
    <div>Response from Github: {resMessage}</div>
  ) : results.length ? (
    // Display the fetched results
    <ul>
      {results.map(({ html_url, login }) => (
        <li key={login}>
          <a href={html_url}>{login}</a>
        </li>
      ))}
    </ul>
  ) : search ? (
    // No results but a search exp is set ? Check if results are being fetched
    isLoading ? (
      <div>Loading...</div>
    ) : (
      <div>No result for "{search}"</div>
    )
  ) : null;
};

export default Feedback;
