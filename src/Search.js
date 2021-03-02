import { useRef } from 'react';
import search from './search.png';

function Search(props) {
  let searchQuery = props.searchQuery
  const searchEl = useRef(null)

  function onSearchClick() {
    // console.log(searchEl.current.value)
    searchQuery(searchEl.current.value)
  }

  return (
  <div className="contacts__search">
    <button className="contacts__search__button" onClick={onSearchClick}>
      <img src={search} alt="" className="contacts__search__icon"></img>
    </button>
    <input type="text" className="contacts__search__input" ref={searchEl}/>
  </div>)
}

export default Search