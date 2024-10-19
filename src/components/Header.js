import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faVideoCamera,
  faBell,
  faUser,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setMenuOpen } from "../utils/appSlice";
import { useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggle = () => {
    dispatch(setMenuOpen());
  };

  const [searchquery, setSearchQuery] = useState("");
  //console.log(searchquery);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSearchSuggestion, setSelectedSearchSuggestion] = useState("");
  //console.log(selectedSearchSuggestion);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch()

  useEffect(() => {
    //console.log("searchquery is", searchquery);
    const timer = setTimeout(() => {
      if (searchCache[searchquery]) {
        setSearchSuggestions(searchCache[searchquery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchquery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchquery);
    const json = await data.json();
    //console.log("Search Suggestions: ", json[1]);
    setSearchSuggestions(json[1]);

    //update the store
    dispatch(cacheResults({ [searchquery]: json[1] }));
  };

  useEffect(() => {
    if (selectedSearchSuggestion) {
      setSearchQuery(selectedSearchSuggestion);
    }
  }, [selectedSearchSuggestion]);

  const handleSuggestionSelect = (suggestion) => {
    setSelectedSearchSuggestion(suggestion);
    //console.log("Selected suggestion is:", suggestion);
    setShowSuggestions(false);

    // Redirect to Results.js with the selected search query
    //navigate(`/results?search_query=${suggestion}`);

    const formattedQuery = suggestion.split(" ").join("+");
    navigate(`/results?search_query=${formattedQuery}`);
  };
  

  return (
    <header className="shadow-md px-7 py-2">
      <nav className="flex justify-between items-center">
        <div className="logo-sec flex gap-5 items-center w-2/12">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => handleToggle()}
            className="cursor-pointer"
          />
          <Link to="/">
            <img src={logo} alt="YouTube" className="w-24" />
          </Link>
        </div>
        <div className="search-sec w-8/12">
          <div className="">
            <div className="w-full flex justify-center items-center">
              <input
                type="text"
                placeholder="Search"
                className="border-gray-300 border px-5 py-2 rounded-l-full outline-none focus:border-blue-500 active:border-blue-500 focus:shadow-inner w-[500px]"
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setShowSuggestions(false)}
                value={searchquery}
              />
              <button className="border-gray-300 border px-5 py-2 rounded-r-full">
                <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
              </button>
            </div>
            {showSuggestions && (
              <div className="w-full flex justify-center items-center relative">
                <ul className="w-[560px] absolute top-0  bg-white py-5  border border-gray-200 rounded-xl shadow-lg">
                  {searchSuggestions.map((suggestion) => (
                    <li
                      className="cursor-default hover:bg-gray-100 px-3 py-1"
                      key={suggestion}
                      // onMouseDown={() => {
                      //   setSelectedSearchSuggestion(suggestion);
                      //   console.log("selected suggestion is:", suggestion);
                      //   setShowSuggestions(false);
                      // }}
                      onMouseDown={() => handleSuggestionSelect(suggestion)}
                    >
                      <FontAwesomeIcon
                        icon={faSearch}
                        className="text-gray-400 mr-3"
                      />
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="user-sec w-2/12 flex justify-center items-center">
          <ul className="flex justify-between items-center gap-5">
            <li>
              <FontAwesomeIcon icon={faVideoCamera} className="w-8" />
            </li>
            <li>
              <FontAwesomeIcon icon={faBell} className="w-8" />
            </li>
            <li>
              <FontAwesomeIcon icon={faUser} className="w-8" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
