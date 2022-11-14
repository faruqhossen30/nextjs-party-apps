import React, { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaHome, FaListAlt, FaMap, FaPowerOff, FaRegBell, FaRegUserCircle, FaSearch, FaUser, FaUsers } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import { Badge } from 'react-bootstrap';

const Sidebar = () => {

    const [show, setShow] = useState(false);
    const ToggleData = () => {
        setShow(!show);
    };

    const [show2, setShow2] = useState(false);
    const ToggleData2 = () => {
        setShow2(!show2);
    };

    const [designation, setDesination] = useState(false);
    const ToggleDesignation = () => {
        setDesination(!designation);
    };

    const [location, setLocation] = useState(false);
    const locationToggle = () => {
        setLocation(!location);
    };

    return (
        <nav className="sidebar">
            <div className="sidebar-header">
                <Link href="/admin/dashboard" >
                    <a className="sidebar-brand">
                        PARTY<span> UI</span>
                    </a>
                </Link>
                <div className="sidebar-toggler">
                    <FaBars />
                </div>
            </div>
            <div className="sidebar-menu bg-body">
                <ul className='p-2 m-0 text-body vh-100 overflow-auto'>
                    <li>
                        <Link href="/admin/dashboard">
                            <a className='flex items-center px-2 text-body'>
                                <FaHome />
                                <span className='pl-2'>Dashboard</span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" className='flex items-center px-2 text-body' onClick={ToggleData}>
                            <FaUsers />
                            <span className='pl-2'>Admin </span>
                        </a>
                        <ul className={`collapse ${show ? 'show' : ''}`} id="submenu1" data-bs-parent="#menu" >
                            <li>
                                <a href="#" className='flex items-center'>
                                    <FaHome />
                                    <span className='px-2'>All Admin</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center'>
                                    <FaHome />
                                    <span className='px-2'>All Admin</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className='flex items-center'>
                                    <FaHome />
                                    <span className='px-2'>All Admin</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a data-bs-toggle="collapse" className='flex items-center px-2 text-body' onClick={ToggleData2}>
                            <FaUsers />
                            <span className='pl-2 '>Organization</span>
                        </a>
                        <ul className={`collapse ${show2 ? 'show' : ''}`} id="others" data-bs-parent="#others" >
                            <Link href="/admin/organization/organization">
                                <li>
                                    <a className='flex items-center'>
                                        <FaHome />
                                        <span className='px-2'>Organization List</span>
                                    </a>
                                </li>
                            </Link>
                            <Link href="/admin/organization/create">
                                <li>
                                    <a className='flex items-center'>
                                        <FaHome />
                                        <span className='px-2'>Create</span>
                                    </a>
                                </li>
                            </Link>
                        </ul>
                    </li>
                    <li>
                        <Link href='/admin/users'>
                            <a className='flex items-center px-2 text-body'>
                                <FaUser />
                                <span className='pl-2 '>Users</span>
                            </a>
                        </Link>
                    </li>
                    <li>

                        <a data-bs-toggle="collapse" className='flex items-center px-2 text-body' onClick={ToggleDesignation}>
                            <FaUsers />
                            <span className='pl-2 '>Designation</span>
                        </a>

                        <ul className={`collapse ${designation ? 'show' : ''}`} id="submenu1" data-bs-parent="#menu" >

                        <Link href="/admin/designations">
                                <li>
                                    <a className='flex items-center'>
                                        <FaHome />
                                        <span className='px-2'>Show</span>
                                    </a>
                                </li>
                            </Link>
                            <Link href="/admin/designations/create">
                                <li>
                                    <a className='flex items-center'>
                                        <FaHome />
                                        <span className='px-2'>Create</span>
                                    </a>
                                </li>
                            </Link>
                        </ul>







                        {/* <Link href='/admin/designation'>
                            <a className='flex items-center px-2 text-body'>
                                <FaUser />
                                <span className='pl-2 '>Designation</span>
                            </a>
                        </Link> */}
                    </li>
                    <li>
                        <a href="#" className='flex items-center px-2 text-body'>
                            <FaListAlt />
                            <span className='pl-2 '>Posts</span>
                        </a>
                    </li>
                    <li>
                        <a className='flex items-center px-2 text-body' data-bs-toggle="collapse" onClick={locationToggle}>
                            <FaMap />
                            <span className='pl-2 '>Location</span>
                        </a>
                        <ul className={`collapse ${location ? 'show' : ''}`} id="locations" data-bs-parent="#locations" >
                            <Link href='/admin/location/divisions'>
                                <li>
                                    <a className='flex items-center'>
                                        <FaHome />
                                        <span className='px-2'>Divisions</span>
                                    </a>
                                </li>
                            </Link>
                            <Link href='/admin/location/districts'>
                                <li>
                                    <a className='flex items-center'>
                                        <FaHome />
                                        <span className='px-2'>Districts</span>
                                    </a>
                                </li>
                            </Link>
                            <Link href='/admin/location/upazilas'>
                                <li>
                                    <a className='flex items-center'>
                                        <FaHome />
                                        <span className='px-2'>Upazilas</span>
                                    </a>
                                </li>
                            </Link>
                            <Link href='/admin/location/unions'>
                                <li>
                                    <a className='flex items-center'>
                                        <FaHome />
                                        <span className='px-2'>Unions</span>
                                    </a>
                                </li>
                            </Link>
                        </ul>
                    </li>
                    {/* <li onClick={logout}>
                        <a href="#" className='flex items-center px-2 text-body'>
                            <FaPowerOff />
                            <span className='pl-2 '>Logout</span>
                        </a>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Sidebar
