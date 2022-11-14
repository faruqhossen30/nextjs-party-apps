import axios from '@/lib/axios'
import { useRouter } from 'next/router'
import Breadcum from '@/components/Admin/Breadcum'
import TopNavigation from '@/components/Admin/TopNavigation'
import AdminLayout from '@/components/Layouts/AdminLayout'
import React, { useState, useEffect } from 'react'

const AddOrganization = ({data}) => {
    const router = useRouter();
    // console.log('some', data);

    const[organization, setOrganization] = useState(data);


    async function organizationCrate(e) {
        e.preventDefault()

        console.log(organization);
        await axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/admin/organization/update/${data.id}`, {
                name: organization.name,
                bn_name: organization.bn_name,
                description: organization.description
            })
            .then(response => {
                console.log(response);
                setOrganization('');
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
                        <Breadcum title='Add Organization' route='/admin/organization' />
                        <div className='p-2 bg-white'>
                            <form method='post' onSubmit={organizationCrate}>
                                <div className="form-group">
                                    <label htmlFor="name">Organization Name</label>
                                    <input type="text" value={organization.name} onChange={e => setOrganization({ ...organization, name: e.target.value })} className='form-control' id='name' name='name' placeholder='Name' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="bn_name">Organization Name Bangla</label>
                                    <input type="text" value={organization.bn_name} className='form-control' id='bn_name' name='bn_name' onChange={e => setOrganization({ ...organization, bn_name: e.target.value })} placeholder='Bangla' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Organization Description</label>
                                    <textarea name="description" value={organization.description} id="description" onChange={e => setOrganization({ ...organization, description: e.target.value })} className='form-control' rows="5" placeholder='Description' ></textarea>
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

export default AddOrganization
