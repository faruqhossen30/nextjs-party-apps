import React from 'react'

const HomepageLike = () => {
    return (
        <div>
            <div className='p-2 bg-white m-2 rounded'>
                <h6>
                    <strong>Page You Like</strong>
                </h6>
                <div className='mt-4'>
                    <a href="#" className='sm:block md:flex items-center mb-6'>
                        <img src="/user.jpg" alt="" className='rounded-full w-16 h-16' />
                        <div className='ml-4 capitalize'>
                            <h6 className='m-0'><strong>Graphic Design</strong></h6>
                            <span>1215 Members</span>
                        </div>
                    </a>
                    <a href="#" className='flex items-center mb-6'>
                        <img src="/user.jpg" alt="" className='rounded-full w-16 h-16' />
                        <div className='ml-4 capitalize'>
                            <h6 className='m-0'><strong>Graphic Design</strong></h6>
                            <span>1215 Members</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HomepageLike