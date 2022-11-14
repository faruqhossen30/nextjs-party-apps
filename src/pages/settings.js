import React, { useState, useEffect } from 'react'
import Navnew from '@/components/Header/Navnew'
import 'bootstrap/dist/css/bootstrap.min.css'
import Breadcrumb from '@/components/BreadCrumb'
import SettingTab from '@/components/Profile/SettingTab';

const settings = () => {
    return (
        <div>
            <Navnew />
            <Breadcrumb title="Profile Setting" />
            <SettingTab />
        </div>
    )
}

export default settings
