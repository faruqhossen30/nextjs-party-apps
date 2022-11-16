import React, { useState, useEffect, useContext } from 'react'
import Navnew from '@/components/Header/Navnew'
import 'bootstrap/dist/css/bootstrap.min.css'
import Breadcrumb from '@/components/BreadCrumb'
import SettingTab from '@/components/Profile/SettingTab';
import UserContext from '@/contexts/Usercontext';

const settings = () => {
    const user = useContext(UserContext)
    return (
        <>
            {user &&
                <div>
                    <Navnew />
                    <Breadcrumb title="Profile Setting" />
                    <SettingTab user={user} />
                </div>
            }
        </>
    )
}

export default settings
