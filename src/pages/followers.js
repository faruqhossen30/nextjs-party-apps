import Breadcrumb from '@/components/BreadCrumb'
import Navnew from '@/components/Header/Navnew'
import SingleFollwer from '@/components/SingleFollwer'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

const followers = () => {
    return (
        <div>
            <Navnew />
            <Breadcrumb title="Followers" />

            <div className="grid grid-cols-12 p-2 gap-3">
                <SingleFollwer />
                <SingleFollwer />
                <SingleFollwer />
                <SingleFollwer />
                <SingleFollwer />
                <SingleFollwer />
                <SingleFollwer />
                <SingleFollwer />
                <SingleFollwer />
                <SingleFollwer />
                <SingleFollwer />
                <SingleFollwer />
            </div>
        </div>
    )
}

export default followers
