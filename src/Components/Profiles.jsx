import { useEffect, useState } from "react";

const Profiles = () => {
  const [search, setSearch] = useState('')
  return (
    <div>
      <div className="d-flex">
        <select name="" id="" placeholder='Select Field'>
          <option value="">Product Designer</option>
          <option value="">Web Developer</option>
          <option value="">Data Analysis</option>
        </select>

      <input type="text" placeholder='Searh for a member' value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div></div>
    </div>
  )
}

export default Profiles