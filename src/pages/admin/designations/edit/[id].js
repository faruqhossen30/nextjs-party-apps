import Axios from '@/lib/axios'
import Breadcum from '@/components/Admin/Breadcum'
import TopNavigation from '@/components/Admin/TopNavigation'
import AdminLayout from '@/components/Layouts/AdminLayout'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import axios from '@/lib/axios'


const edit = ({ data, links }) => {

    const router=useRouter();

    const[designation,setDesignation]=useState(data);

    // console.log(designation);

    async function designationCreate(e){

        e.preventDefault()
        console.log(designation);
        await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin/designations/${data.id}`,{
            title:'some'
        })
        .then(response =>{
            console.log(response);
            // setDesignation('');
            router.push(`${process.env.NEXT_PUBLIC_URL}/admin/designations`);
        })
        .catch((err)=>{
            console.log(err);
        });;
    }

      return (
        <AdminLayout>
        <div className='main-wraper flex'>
            <div className='page-wraper'>
                {/* Top Navigation */}
                <TopNavigation />
                <div className='p-3'>
                    <Breadcum title='Update Designation' route='/admin/desginations' />
                    <div className='p-2 bg-white'>
                        <form method='POST' onSubmit={designationCreate}>
                            <div className="form-group">
                                <label htmlFor="name">Designation Name</label>
                                <input type="text" value={designation.title} onChange={e => setDesignation({ ...designation, title: e.target.value })}  className='form-control' name='title' placeholder='Designation Name' />
                            </div>
                            <button type='submit' className='btn btn-sm btn-success mt-2'>Update Designation</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AdminLayout>

      )

}


export async function getServerSideProps({ query }) {
    const res = await Axios.get(`${process.env.NEXT_PUBLIC_ADMIN_URL}/designations/${query.id}`);
    const data = res.data
    return { props: { data } }
}
export default edit
