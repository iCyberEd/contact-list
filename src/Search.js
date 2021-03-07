import { useRef } from 'react';
import searchIconLight from './search-light.png';
import searchIconDark from './search-dark.png';

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
      <img src={searchIconLight} alt="" className="contacts__search__icon contacts__search__icon--light" />
      <img src={searchIconDark} alt="" className="contacts__search__icon contacts__search__icon--dark" />
    </button>
    <input type="text" className="contacts__search__input" ref={searchEl}/>
  </div>)
}

export default Search