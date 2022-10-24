import React from 'react'
import { FaUser } from 'react-icons/fa'

const DashboardContent = () => {
    return (
        <div className='page-content p-2 m-2'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-3 bg-white">
                        <p className='semi-bold font-semibold text-sm p-2 pb-0'>Total User</p>
                        <div className='flex p-2 gap-2 items-center'>
                            <div className='ring-2 ring-gray-500 rounded-full p-2'>
                                <FaUser className='text-2xl' />
                            </div>
                            <div>
                                <div>
                                    <span className='fs-4 fw-bold'>120</span>
                                    <span className='text-sm'>User</span>
                                </div>
                                <p className='text-sm'>+3.3% </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardContent
