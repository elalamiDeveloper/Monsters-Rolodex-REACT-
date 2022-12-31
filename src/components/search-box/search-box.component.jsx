import './search-box.styles.css';

const SearchBox = ({ value, onSearchChangeHandler, placeholder }) => (
  <input
    type="search"
    className="search-box"
    value={value}
    placeholder={placeholder}
    onChange={onSearchChangeHandler}
  />
);

export default SearchBox;
