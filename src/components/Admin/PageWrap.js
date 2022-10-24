import DashboardContent from './Dashboard/DashboardContent';
import TopNavigation from './TopNavigation';

const PageWrap = () => {

    return (
        <div className='page-wraper'>
            {/* Top Navigation */}
            <TopNavigation />
            <DashboardContent />
        </div>
    )
}

export default PageWrap
