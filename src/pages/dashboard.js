import AdminLayout from '@/components/Layouts/AdminLayout'
import Head from 'next/head'
import DashbordComponent from '@/components/Admin/Dashboard/Dashboard'

const Dashboard = () => {
    return (
        <AdminLayout>
            <Head>
                <title>Laravel - Dashboard</title>
            </Head>
            <DashbordComponent />
        </AdminLayout>
    )
}

export default Dashboard
