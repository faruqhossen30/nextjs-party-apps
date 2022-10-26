import React from 'react'

const HomepageBirthday = () => {
    return (
        <>
            <div className='bg-white m-2 rounded p-2'>
                <div className='flex justify-between pb-4'>
                    <h6>
                        <strong>Today Birthdays</strong>
                    </h6>
                    <h6>
                        <a href='#' className='underline'>See All</a>
                    </h6>
                </div>
                <div>
                    <a href='#' className='flex md:flex-col lg:flex-row items-center mb-6'>
                        <img src="/user.jpg" alt="" className='rounded-full w-12 h-12' />

                        <div className='md:ml-4 text-center capitalize'>
                            <h6 className='m-0'><strong>najmul hasan</strong></h6>
                            <span>10 minits ago</span>
                        </div>
                    </a>
                    <a href='#' className='flex md:flex-col lg:flex-row items-center mb-6'>
                        <img src="/user.jpg" alt="" className='rounded-full w-12 h-12' />
                        <div className='md:ml-4 text-center capitalize'>
                            <h6 className='m-0'><strong>najmul hasan</strong></h6>
                            <span>10 minits ago</span>
                        </div>
                    </a>
                    <a href='#' className='flex md:flex-col lg:flex-row items-center mb-6'>
                        <img src="/user.jpg" alt="" className='rounded-full w-12 h-12' />

                        <div className='md:ml-4 text-center capitalize'>
                            <h6 className='m-0'><strong>najmul hasan</strong></h6>
                            <span>10 minits ago</span>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default HomepageBirthday