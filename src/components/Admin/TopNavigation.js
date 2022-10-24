import { FaPowerOff, FaRegBell, FaRegUserCircle, FaSearch } from 'react-icons/fa';
import Dropdown from 'react-bootstrap/Dropdown';
import { useAuth } from '@/hooks/auth'

const TopNavigation = () => {
    const { user } = useAuth({ middleware: 'auth' })
    const { logout } = useAuth()
  return (
    <nav className='navigation flex justify-between items-center border border-bottom bg-white'>
                <form className="search-form px-2">
                    <div className="input-group">
                        <div className="input-group-text bg-white border-0">
                            <FaSearch />
                        </div>
                        <input type="text" className="form-control bg-transparent border-0" id="navbarForm" placeholder="Search here..." />
                    </div>
                </form>
                <div className='page-navigation flex items-center'>
                    <Dropdown className='pr-4'>
                        <Dropdown.Toggle variant="" id="dropdown-basic" className='p-0 '>
                            <FaRegBell className='h-12' />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='p-0 rounded-0'>
                            <Dropdown.Item href="#/action-1" className=''>
                                <div className='flex'>
                                    <FaRegBell className='h-12' />
                                    <div className='fs-10 p-2'>
                                        <p className='text-muted text-xs p-0 m-0'>New Order Recieved</p>
                                        <p className="text-muted text-xs p-0 m-0">30 min ago</p>
                                    </div>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1" className=''>
                                <div className='flex'>
                                    <FaRegBell className='h-12' />
                                    <div className='fs-10 p-2'>
                                        <p className='text-muted text-xs p-0 m-0'>New Order Recieved</p>
                                        <p className="text-muted text-xs p-0 m-0">30 min ago</p>
                                    </div>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1" className=''>
                                <div className='flex'>
                                    <FaRegBell className='h-12' />
                                    <div className='fs-10 p-2'>
                                        <p className='text-muted text-xs p-0 m-0'>New Order Recieved</p>
                                        <p className="text-muted text-xs p-0 m-0">30 min ago</p>
                                    </div>
                                </div>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='pr-4'>
                        <Dropdown.Toggle variant="" id="dropdown-basic" className='p-0'>
                            <img className='h-8 rounded-full ring-1' src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" alt="" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1" className='py-0 px-2'>
                                <div className='flex items-center'>
                                    <FaRegUserCircle className='h-8' />
                                    <div className='fs-10 p-2'>
                                        <p className='text-sm p-0 m-0'>Profile</p>
                                    </div>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1" className='py-0 px-2'>
                                <div className='flex items-center'>
                                    <FaRegUserCircle className='h-8' />
                                    <div className='fs-10 p-2'>
                                        <p className='text-sm p-0 m-0'>Profile</p>
                                    </div>
                                </div>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-1" className='py-0 px-2'>
                                <div className='flex items-center' onClick={logout}>
                                    <FaPowerOff className='h-8' />
                                    <div className='fs-10 p-2'>
                                        <p className='text-sm p-0 m-0'>Logout</p>
                                    </div>
                                </div>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </nav>
  )
}

export default TopNavigation
