import TopNavigation from '../TopNavigation'
import DashboardContent from './DashboardContent'

const Dashboard = () => {
    return (
        <div className='main-wraper flex'>
            <div className='page-wraper'>
                {/* Top Navigation */}
                <TopNavigation />
                <DashboardContent />
            </div>
        </div>
    )
}

export default Dashboard
