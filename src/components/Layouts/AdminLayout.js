
import 'bootstrap/dist/css/bootstrap.css'
import Sidebar from '../Admin/Sidebar'
// import 'bootstrap/dist/js/bootstrap.bundle'


const AdminLayout = ({ header, children }) => {
    return (
        <>
            <Sidebar />
            {children}
        </>
    )
}

export default AdminLayout
