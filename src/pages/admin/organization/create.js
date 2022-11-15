import axios from '@/lib/axios'
import { useRouter } from 'next/router'
import Breadcum from '@/components/Admin/Breadcum'
import TopNavigation from '@/components/Admin/TopNavigation'
import AdminLayout from '@/components/Layouts/AdminLayout'
import React, { useState, useEffect } from 'react'

const add_organization = () => {
    const router = useRouter();

    const [organization, setOrganization] = useState(
        {
            name: 'najmul',
            bn_name: 'bangla name',
            description: 'organization',
        }
    )
    console.log(organization);
    async function organizationCrate(e) {
        e.preventDefault()
        let url = `${process.env.NEXT_PUBLIC_API_URL}/create`

        await axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/admin/organization/store`, {
                name: organization.name,
                bn_name: organization.bn_name,
                description: organization.description
            })
            .then(response => {
                console.log(response);
                setOrganization('');
                router.push(`${process.env.NEXT_PUBLIC_API_URL}/admin/organization/create`);
            });

    }


    return (

        <AdminLayout>
            <div className='main-wraper flex'>
                <div className='page-wraper'>
                    {/* Top Navigation */}
                    <TopNavigation />
                    <div className='p-3'>
                        <Breadcum title='Add Organization' route='/admin/organization' />
                        <div className='p-2 bg-white'>
                            <form method='post' onSubmit={organizationCrate}>
                                <div className="form-group">
                                    <label htmlFor="name">Organization Name</label>
                                    <input type="text" onChange={e => setOrganization({ ...organization, name: e.target.value })} className='form-control' id='name' name='name' placeholder='Name' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="bn_name">Organization Name Bangla</label>
                                    <input type="text" className='form-control' id='bn_name' name='bn_name' onChange={e => setOrganization({ ...organization, bn_name: e.target.value })} placeholder='Bangla' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Organization Description</label>
                                    <textarea name="description" id="description" onChange={e => setOrganization({ ...organization, description: e.target.value })} className='form-control' rows="5" placeholder='Description' ></textarea>
                                </div>
                                <button type='submit' className='btn btn-sm btn-success mt-2'>Add Organization</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>

    )
}

export async function getServerSideProps({ query }) {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_ADMIN_URL}/organization/edit/${query.id}`)
    const data = res.data
    return { props: { data } }
}


export default add_organization
