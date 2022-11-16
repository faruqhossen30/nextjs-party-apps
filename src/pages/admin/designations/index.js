import Axios from '@/lib/axios'
import AdminLayout from '@/components/Layouts/AdminLayout'
import Breadcum from '@/components/Admin/Breadcum'
import TopNavigation from '@/components/Admin/TopNavigation'
import Link from 'next/link'
import PaginationComponent from '@/components/Admin/Pagination'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useRouter } from 'next/router'

const designation =({ data, links })=> {

    return (
        <AdminLayout>
            <div className='main-wraper flex'>
                <div className='page-wraper'>
                    {/* Top Navigation */}
                    <TopNavigation />

                    <div className='p-3'>
                    <Breadcum title='Designation' route='#' />

                    <div className='p-2 bg-white'>
                            <table className="table table-bordered table-hover p-4 bg-white">
                                <thead>
                                    <tr>
                                        <th scope="col">S.N</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">User ID</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                        data.data.map((designations, index) => {
                                            return (
                                                <tr key={index}>
                                                    <th>{designations.id}</th>
                                                    <td>{designations.title}</td>
                                                    <td>{designations.status}</td>
                                                    <td>{designations.user_id}</td>
                                                    <td>
                                                        <div className='flex'>
                                                             <Link href={`/admin/designations/edit/${designations.id}`}>
                                                                <a><FaEdit className='text-green-600' /></a>
                                                            </Link>
                                                            <button>
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
        const res = await Axios.get(`${process.env.ADMIN_URL}/designations?page=${page}`)
        const data = res.data
        const links = res.data.links
        return { props: { data, links } }
    } else {
        const res = await Axios.get(`${process.env.ADMIN_URL}/designations`)
        const data = res.data
        const links = res.data.links
        return { props: { data, links } }
    }
}
export default designation
