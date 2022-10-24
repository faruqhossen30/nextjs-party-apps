import React, { useState } from 'react'
import { FaBars, FaHome, FaListAlt, FaMap, FaPowerOff, FaRegBell, FaRegUserCircle, FaSearch, FaUser, FaUsers } from "react-icons/fa";
import Dropdown from 'react-bootstrap/Dropdown';
import { Badge } from 'react-bootstrap';

const Sidebar = () => {
    const [show, setShow] = useState( false);
    const ToggleData = () => {
        setShow(!show);
    };
    return (
        <nav className="sidebar">
            <div className="sidebar-header">
                <a href="#" className="sidebar-brand">
                    PARTY<span> UI</span>
                </a>
                <div className="sidebar-toggler">
                    <FaBars />
                </div>
            </div>
            <div className="sidebar-menu">
                <ul className='p-2 m-0 text-body vh-100 overflow-auto'>
                    <li>
                        <a href="#" className='flex items-center px-2 text-body'>
                            <FaHome />
                            <span className='pl-2 '>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" className='flex items-center px-2 text-body' onClick={ToggleData}>
                            <FaUsers />
                            <span className='pl-2 '>Admin </span>
                        </a>
                        <ul className={`collapse ${show ? 'show' : ''}`} id="submenu1" data-bs-parent="#menu"  >
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
