import './style.css'
import FindtalentSec1 from "../../component/FindtalentSec1"
import FindtalentSec2 from "../../component/FindtalentSec2"

const Index = ({SetJobPosterData}) => {
  return (
    <div className='container talenter' >
      <FindtalentSec1 SetJobPosterData={SetJobPosterData}/>
      <FindtalentSec2/>
    </div>
  )
}

export default Index