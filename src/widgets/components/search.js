import React from 'react';
import './search.css';
// function Search(props) {
//   return (
//     <form action=""></form>
//   )
// }

const Search = () => (
  <form className="Search">
    <input
      type="text"
      placeholder="Cerca il video"
      className="Search-input"
    />
  </form>
)

export default Search