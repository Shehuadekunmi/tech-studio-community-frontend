import React, { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import "../styles/Profiles.css"
import { AiOutlineSearch } from "react-icons/ai"

const Profiles = () => {
  const url = "https://techstudiocommunity.onrender.com/"
  const [Profiles, setProfiles] = useState([])
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState('')
  const [search, setSearch] = useState('')
  const itemsPerPage = 10;
  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setIsLoading(false);
    setProfiles(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const infoMap = {
    option1: "Product Designer",
    option2: "Web Developer",
    option3: "Data Analysis"
  }

  const filteredProfiles = Profiles.filter((profile) => profile.toLowerCase().includes(search.toLowerCase()))

  // Pagination logic
  const offset = currentPage * itemsPerPage;
  const currentProfiles = filteredProfiles.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredProfiles.length / itemsPerPage);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div className="container">
      <div className="container spread">
        <select name="" id="" value={selectedOption} placeholder='Select Field' onChange={handleOptionChange} className="sl">
          <option value="option1">Product Designer</option>
          <option value="option2">Web Developer</option>
          <option value="option3">Data Analysis</option>
        </select>
        <div>
        {selectedOption && (
          <div>
            <h3>Select Field:</h3>
            <p>{infoMap[selectedOption]}</p>
          </div>
        )}
      </div>

      <div>
        <input type="text" placeholder='Search for a member' value={search} onChange={(e) => setSearch(e.target.value)} className="ip" />
        <AiOutlineSearch className="search" />
      </div>
    </div>
    <section>
      <div className="container d-flex">
        {filteredProfiles.length === 0 ? <h1>No results found</h1> : currentProfiles.map((Profile) => {
          const { id, image, fullname, community } = Profile
          return (
            <div className='card' key={id}>
              <img src={image} alt={fullname} />
              <h3>{fullname}</h3>
              <h4>{community}</h4>
            </div>
          )
        })}
      </div>
    </section>
    
    <div className="pagination">
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  </div>
  )
}

export default Profiles;
