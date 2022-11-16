import axios from '@/lib/axios'
import Breadcum from '@/components/Admin/Breadcum'
import TopNavigation from '@/components/Admin/TopNavigation'
import AdminLayout from '@/components/Layouts/AdminLayout'
import { useRouter } from 'next/router'
import React, {useRef} from 'react'

const create = () => {
const router=useRouter();

const title = useRef()

async function designationCreate(e){
    e.preventDefault()
    let url=`${process.env.NEXT_PUBLIC_API_URL}/create`

    await axios
    .post(`${process.env.NEXT_PUBLIC_API_URL}/admin/designations`, {
        title: title.current.value,
        user_id: 1,
    })
    .then(response => {
        console.log(response);
        router.push(`${process.env.NEXT_PUBLIC_URL}/admin/designations`);
    });

}



  return (
    <AdminLayout>
    <div className='main-wraper flex'>
        <div className='page-wraper'>
            {/* Top Navigation */}
            <TopNavigation />
            <div className='p-3'>
                <Breadcum title='Create Designation' route='/admin/desginations' />
                <div className='p-2 bg-white'>
                    <form onSubmit={designationCreate}>
                        <div className="form-group">
                            <label htmlFor="name">Designation Name</label>
                            <input type="text" ref={title}  className='form-control' name='title' placeholder='Designation Name' />
                        </div>
                        <button type='submit' className='btn btn-sm btn-success mt-2'>Add Designation</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</AdminLayout>

  )
}

export default create
