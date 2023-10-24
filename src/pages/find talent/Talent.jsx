import './style.css'
import FindtalentSec1 from '../../components/FindtalentSec1'
import FindtalentSec2 from '../../components/FindtalentSec2'
import PublishModal from '../../Components/PublishModal'
import SubmissionModal from '../../Components/SubmissionModal'

const Index = () => {
  return (
    <div className='container' >
      <FindtalentSec1/>
      <FindtalentSec2 />
      <PublishModal />
      <SubmissionModal/>
    </div>
  )
}

export default Index