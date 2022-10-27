import Head from 'next/head'
import AdminLayout from '@/components/Layouts/AdminLayout'
import TopNavigation from '@/components/Admin/TopNavigation'

const Organization = () => {
  return (
    <AdminLayout>
        <div className='main-wraper flex'>
            <div className='page-wraper'>
                {/* Top Navigation */}
                <TopNavigation />

            </div>
        </div>
    </AdminLayout>
  )
}

export default Organization
