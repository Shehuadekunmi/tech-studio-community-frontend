import './style.css'
import FindtalentSec1 from '../../components/FindtalentSec1'
import FindtalentSec2 from '../../components/FindtalentSec2'
import PublishModal from '../../Components/PublishModal'
import SubmissionModal from '../../Components/SubmissionModal'
import Header2 from '../../Components/Header2'
import Footer from '../../Components/Footer'

const Index = ({SetJobPosterData}) => {
  return (
    <div className='containe talenter' >
      <Header2/>
      <FindtalentSec1 SetJobPosterData={SetJobPosterData}/>
      <FindtalentSec2/>
      <PublishModal />
      <SubmissionModal/>
      <Footer/>
    
     
      
    </div>
  )
}

export default Index