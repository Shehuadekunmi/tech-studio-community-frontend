import Profiles from "../../components/Profiles";
import Banner from "../../components/Banner";
import "../../styles/community.css";
import searchicon from "../../assets/iconamoon_search-thin.svg";
import UseFetch from "../../Hooks/UseFetch";
import { useState, useEffect } from "react";
import axios from "axios";

const Community = () => {
  const [profiles, setProfiles] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const { data: communities } = UseFetch(
    "https://techstudiocommunity.onrender.com/api/users/community/"
  );

  const ALLUSERS_URL = "https://techstudiocommunity.onrender.com/api/users/";
  const SEARCH_URL = `https://techstudiocommunity.onrender.com/api/users/?name=${searchKey}`;

  // console.log(SEARCH_URL);

  const FetchMovies = async (searchKey) => {
    const API_URL = searchKey ? ALLUSERS_URL : SEARCH_URL;
    axios.get(API_URL).then((res) => {
      setProfiles(res.data.results);
    });
  };

  useEffect(() => {
    FetchMovies(searchKey);
  }, []);

  // console.log(profiles);

  function searchMovies(e) {
    e.preventDefault();
    FetchMovies();
  }

  return (
    <>
      <Banner />
      <div className="container community">
        <div className="community-header">
          <div className="heading">
            <div className="select-field">
              <select name="community" id="">
                <option value="" disabled>
                  Select Field
                </option>
                {communities.map((community) => {
                  return <option key={community?.id}>{community?.name}</option>;
                })}
              </select>
            </div>
            <form className="search" onSubmit={searchMovies}>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search for a member"
                onChange={(e) => setSearchKey(e.target.value)}
              />
              <img src={searchicon} alt="" />
            </form>
          </div>
        </div>
        <Profiles profiles={profiles} />
      </div>
    </>
  );
};

export default Community;
