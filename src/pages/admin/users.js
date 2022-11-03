import Axios from 'axios'
import { useRouter } from 'next/router'
import Breadcum from '@/components/Admin/Breadcum'
import TopNavigation from '@/components/Admin/TopNavigation'
import AdminLayout from '@/components/Layouts/AdminLayout'
import PaginationComponent from '@/components/Admin/Pagination'


const Users = ({ data, links }) => {
    const router = useRouter()
    // console.log(router.query);
    return (
        <AdminLayout>
            <div className='main-wraper flex'>
                <div className='page-wraper'>
                    {/* Top Navigation */}
                    <TopNavigation />

                    <div className='p-3'>
                        <Breadcum title='Users' route='admin/users' />
                        <div className='p-2 bg-white'>
                            <table className="table table-bordered table-hover p-4 bg-white">
                                <thead>
                                    <tr>
                                        <th scope="col">S.N</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Mobile</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.data.map((user, index) => {
                                            return (
                                                <tr key={index}>
                                                    <th scope="row">{user.id}</th>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>some@gmail.com</td>
                                                    <td>@mdo</td>
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
    console.log(query.page)
    let page = null;
    page=query.page;
    // Fetch data from external API
    // let page = Number(query.page) || 1;
    if (page) {
        const res = await Axios.get(`${process.env.ADMIN_URL}/users?page=${page}`)
        const data = res.data
        const links = res.data.links
        // Pass data to the page via props
        return { props: { data, links } }
    } else {
        const res = await Axios.get(`${process.env.ADMIN_URL}/users`)
        const data = res.data
        const links = res.data.links
        // Pass data to the page via props
        return { props: { data, links } }
    }

}


export default Users




