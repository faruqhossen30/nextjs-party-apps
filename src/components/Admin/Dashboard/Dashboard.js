import PageWrap from '../PageWrap'
import Sidebar from '../Sidebar'

const Dashboard = () => {
    return (
        <div className='main-wraper flex'>
            {/* sidebar */}
            <Sidebar />
            <PageWrap />
        </div>
    )
}

export default Dashboard
