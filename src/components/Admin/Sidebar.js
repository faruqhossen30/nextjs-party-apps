import React, { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaHome, FaListAlt, FaMap, FaPowerOff, FaRegBell, FaRegUserCircle, FaSearch, FaUser, FaUsers } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import { Badge } from 'react-bootstrap';

const Sidebar = () => {
    const [show, setShow] = useState( false);
    const ToggleData = () => {
        setShow(!show);
    };
    const [show2, setShow2] = useState( false);
    const ToggleData2 = () => {
        setShow2(!show2);
    };
    return (
        <nav className="sidebar">
            <div className="sidebar-header">
                <Link href="/admin/dashboard" >
                <a  className="sidebar-brand">
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
                            <span className='pl-2 '>Dashboard</span>
                        </a>
                        </Link>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" className='flex items-center px-2 text-body' onClick={ToggleData}>
                            <FaUsers />
                            <span className='pl-2 '>Admin </span>
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
                        <a href="#others" data-bs-toggle="collapse" className='flex items-center px-2 text-body' onClick={ToggleData2}>
                            <FaUsers />
                            <span className='pl-2 '>Organization</span>
                        </a>
                        <ul className={`collapse ${show2 ? 'show' : ''}`} id="others" data-bs-parent="#others" >
                            <li>
                                <a href="/admin/organization" className='flex items-center'>
                                    <FaHome />
                                    <span className='px-2'>Organization</span>
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
                        <a href="#" className='flex items-center px-2 text-body'>
                            <FaUser />
                            <span className='pl-2 '>Users</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='flex items-center px-2 text-body'>
                            <FaListAlt />
                            <span className='pl-2 '>Posts</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className='flex items-center px-2 text-body'>
                            <FaMap />
                            <span className='pl-2 '>Location</span>
                        </a>
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
