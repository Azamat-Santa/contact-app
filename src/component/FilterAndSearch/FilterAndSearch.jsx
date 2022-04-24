import React, { useState } from "react";
import "./index.css";
import heart from "../../images/heart.png";
import sortRed from "../../images/sortRed.png";
import sortBlack from "../../images/sortBlack.png";
import { useDispatch } from "react-redux";
import {
  filterUsersAction,
  searchFilterAction,
} from "./../../redux/actions";

const FilterAndSearch = ({ handleUsers, setHandleUsers }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);
  const searchFunction = (e) => {
    setSearch(e.target.value);
    dispatch(searchFilterAction(e.target.value));
  };

  return (
    <div className="filter-and-search">
      <input
        type="text"
        value={search}
        placeholder="type to search..."
        onChange={(e) => searchFunction(e)}
      />
      <div className="filter-and-search__right">
        <img
          src={heart}
          alt=""
          onClick={() => {
            if (!isFavorite) {
              setHandleUsers({
                usersAll: false,
                usersFavorite: true,
              });
              setIsFavorite(true)
            } else {
              setHandleUsers({
                usersAll: true,
                usersFavorite: false,
              });
              setIsFavorite(false)
            }
          }}
        />
        <img
          src={sortRed}
          alt=""
          onClick={() =>
            dispatch(filterUsersAction({ filterName: "filterByAsc" }))
          }
        />
        <img
          src={sortBlack}
          alt=""
          onClick={() =>
            dispatch(filterUsersAction({ filterName: "filterByDesc" }))
          }
        />
      </div>
    </div>
  );
};

export default FilterAndSearch;
