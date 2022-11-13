import Axios from 'axios'
import Breadcum from '@/components/Admin/Breadcum'
import PaginationComponent from '@/components/Admin/Pagination'
import TopNavigation from '@/components/Admin/TopNavigation'
import AdminLayout from '@/components/Layouts/AdminLayout'
import React from 'react'

const Divisions = ({data, links}) => {
    // console.log(data);
  return (
    <AdminLayout>
            <div className='main-wraper flex'>
                <div className='page-wraper'>
                    {/* Top Navigation */}
                    <TopNavigation />

                    <div className='p-3'>
                        <Breadcum title='Divisions' route='/admin/location/divisions' />
                        <div className='p-2 bg-white'>
                            <table className="table table-bordered table-hover p-4 bg-white">
                                <thead>
                                    <tr>
                                        <th scope="col">S.N</th>
                                        <th scope="col">Division Name</th>
                                        <th scope="col">বিভাগের নাম</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.data.map((division, index) => {
                                            return (
                                                <tr key={index}>
                                                    <th>{division.id}</th>
                                                    <td>{division.name}</td>
                                                    <td>{division.bn_name}</td>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>

                            <PaginationComponent links={links} data={data} />

                        </div>
                    </div>
                </div>
            </div>
    </AdminLayout>
  )
}



export async function getServerSideProps({ query }) {
    // console.log(query.page)
    let page = null;
    page=query.page;
    // Fetch data from external API
    // let page = Number(query.page) || 1;
    if (page) {
        const res = await Axios.get(`${process.env.ADMIN_URL}/location/divisions?page=${page}`)
        const data = res.data
        const links = res.data.links
        // Pass data to the page via props
        return { props: { data, links } }
    } else {
        const res = await Axios.get(`${process.env.ADMIN_URL}/location/divisions`)
        const data = res.data
        const links = res.data.links
        // Pass data to the page via props
        return { props: { data, links } }
    }

}

export default Divisions
