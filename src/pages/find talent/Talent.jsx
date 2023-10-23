import './style.css'
import FindtalentSec1 from '../../components/FindtalentSec1'
import FindtalentSec2 from '../../components/FindtalentSec2'
// import Footer from '../../components/Footer'

const Index = ({SetJobPosterData}) => {
  return (
    <div className='container talenter' >
      <FindtalentSec1 SetJobPosterData={SetJobPosterData}/>
      <FindtalentSec2/>
    </div>
  )
}

export default Index