import Axios from '@/lib/axios'
import Breadcum from '@/components/Admin/Breadcum'
import PaginationComponent from '@/components/Admin/Pagination'
import TopNavigation from '@/components/Admin/TopNavigation'
import AdminLayout from '@/components/Layouts/AdminLayout'
import React from 'react'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Link from 'next/link'
import { useRouter } from 'next/router'

const Organization = ({ data, links }) => {
    const router = useRouter();

    const handleDestroy=(id)=>{
        // console.log(id);
        Axios.post(`${process.env.NEXT_PUBLIC_ADMIN_URL}/organization/destroy/${id}`)
        .then(function(response){
            console.log(response);
            router.push(`${process.env.NEXT_PUBLIC_URL}/admin/organization/organization`);
        });
    }

    return (
        <AdminLayout>
            <div className='main-wraper flex'>
                <div className='page-wraper'>
                    {/* Top Navigation */}
                    <TopNavigation />
                    <div className='p-3'>
                        <Breadcum title='Organization List' route='/admin/organization' />
                        <Link href="/admin/organization/create">
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
                                        data.data.map((organization, index) => {
                                            return (
                                                <tr key={index}>
                                                    <th>{organization.id}</th>
                                                    <td>{organization.name}</td>
                                                    <td>{organization.bn_name}</td>
                                                    <td>{organization.description}</td>
                                                    <td>{organization.user_id}</td>
                                                    <td>
                                                        <div className='flex'>
                                                            <Link href={`/admin/organization/edit/${organization.id}`}>
                                                                <a><FaEdit className='text-green-600' /></a>
                                                            </Link>
                                                            <button onClick={()=> handleDestroy(organization.id)}>
                                                                <a><FaTrashAlt className='text-rose-600'/></a>
                                                            </button>
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
    let page = null;
    page = query.page;
    if (page) {
        const res = await Axios.get(`${process.env.ADMIN_URL}/organization?page=${page}`)
        const data = res.data
        const links = res.data.links
        return { props: { data, links } }
    } else {
        const res = await Axios.get(`${process.env.ADMIN_URL}/organization/index`)
        const data = res.data
        const links = res.data.links
        return { props: { data, links } }
    }
}
export default Organization
