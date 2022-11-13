import Axios from 'axios'
import Breadcum from '@/components/Admin/Breadcum'
import PaginationComponent from '@/components/Admin/Pagination'
import TopNavigation from '@/components/Admin/TopNavigation'
import AdminLayout from '@/components/Layouts/AdminLayout'
import React from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Link from 'next/link'

const Organization = ({ data, links }) => {
    return (
        <AdminLayout>
            <div className='main-wraper flex'>
                <div className='page-wraper'>
                    {/* Top Navigation */}
                    <TopNavigation />
                    <div className='p-3'>
                        <Breadcum title='Organization List' route='/admin/organization' />
                        <Link href="#">
                            <a className='btn btn-sm btn-success text-white'>
                                Add Organization
                            </a>
                        </Link>
                        <div className='p-2 bg-white'>
                            <table className="table table-bordered table-hover p-4 bg-white">
                                <thead>
                                    <tr>
                                        <th scope="col">S.N</th>
                                        <th scope="col"> Name</th>
                                        <th scope="col"> Bangla Name</th>
                                        <th scope="col"> Description</th>
                                        <th scope="col"> Created At</th>
                                        <th scope="col"> Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.data.map((organizations, index) => {
                                            return (
                                                <tr key={index}>
                                                    <th>{organizations.id}</th>
                                                    <td>{organizations.name}</td>
                                                    <td>{organizations.bn_name}</td>
                                                    <td>{organizations.description}</td>
                                                    <td>{organizations.user_id}</td>
                                                    <td>
                                                        <div className='flex'>
                                                            <Link href="#" >
                                                                <a><FaEdit className='text-green-600' /></a>
                                                            </Link>
                                                            <Link href="#">
                                                                <a><FaTrashAlt className='text-rose-600' /></a>
                                                            </Link>
                                                        </div>
                                                    </td>
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
    page = query.page;
    // Fetch data from external API
    // let page = Number(query.page) || 1;
    if (page) {
        const res = await Axios.get(`${process.env.ADMIN_URL}/organization?page=${page}`)
        const data = res.data
        const links = res.data.links
        // Pass data to the page via props
        return { props: { data, links } }
    } else {
        const res = await Axios.get(`${process.env.ADMIN_URL}/organization`)
        const data = res.data
        const links = res.data.links
        // Pass data to the page via props
        return { props: { data, links } }
    }

}
export default Organization
