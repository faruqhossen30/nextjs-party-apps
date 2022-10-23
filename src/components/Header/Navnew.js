import {
    HomeIcon,
    UserIcon,
    EnvelopeIcon,
    BellAlertIcon,
    MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'

export default function Navnew() {
    return (
        <>
            <div className="bg-purple-800 py-2">
                <section className="container mx-auto">
                    <div className=" grid grid-cols-12 items-center">
                        <div className="w-full col-span-2 sm:col-span-3 md:col-span-6 lg:col-span-6">
                            <div className="flex items-center flex-grow">
                                <img
                                    src="https://www.catalystswings.com/public/img/2.png"
                                    alt=""
                                    className="mr-10"
                                />
                                <div className="hidden md:block w-full">
                                    <div className="rounded-full h-9 bg-white font-sans text-black flex items-center justify-end w-full">
                                        <input
                                            type="text"
                                            className="h-7 w-full rounded-full border-0 border-transparent focus:border-transparent focus:ring-0"
                                            placeholder="Search..."></input>
                                        <button className="px-4">
                                            <MagnifyingGlassIcon className="h-4 pr-1" />{' '}
                                        </button>
                                    </div>
                                </div>

                                <button className="px-4 md:hidden">
                                    <MagnifyingGlassIcon className="h-4 pr-1 text-white" />{' '}
                                </button>
                            </div>
                        </div>
                        <div className="w-full col-span-10 sm:col-span-9 md:col-span-6 lg:col-span-6">
                            <ul className="flex items-center justify-end gap-4 sm:gap-10 md:gap-8 lg:gap-10">
                                <li>
                                    <a href="#" className="text-white">
                                        <HomeIcon className="h-6 w-6 " />{' '}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-lg text-white">
                                        <UserIcon className="h-6 w-6" />{' '}
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white relative">
                                        <EnvelopeIcon className="h-6 w-6" />
                                        <span className="absolute -top-4 -right-3 animate-pulse font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                            2
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-white relative">
                                        <BellAlertIcon className="h-6 w-6" />
                                        <span className="absolute -top-4 -right-3 animate-pulse font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                                            2
                                        </span>
                                    </a>
                                </li>
                                <li className="text-white">
                                    <form className="w-8">
                                        <fieldset>
                                            <select className="border-none bg-inherit">
                                                <option
                                                    value="1"
                                                    className="bg-black text-white">
                                                    En
                                                </option>
                                                <option
                                                    value="2"
                                                    className="bg-black text-white">
                                                    Bn
                                                </option>
                                            </select>
                                        </fieldset>
                                    </form>
                                </li>
                                <li className='z-50'>
                                    <Menu
                                        as="div"
                                        className="relative text-left">
                                        <div>
                                            <Menu.Button className=" w-full justify-center rounded-md text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 flex items-center">
                                                <img
                                                    src="https://www.catalystswings.com/public/img/2.png"
                                                    alt=""
                                                    className="w-10 h-10 ring-1 ring-white rounded-full mr-1"
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95">
                                            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="px-1 py-1 ">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                className={`${active
                                                                    ? 'bg-violet-500 text-white'
                                                                    : 'text-gray-900'
                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                                                {active ? (
                                                                    <EditActiveIcon
                                                                        className="mr-2 h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    <EditInactiveIcon
                                                                        className="mr-2 h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                )}
                                                                Edit
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                className={`${active
                                                                    ? 'bg-violet-500 text-white'
                                                                    : 'text-gray-900'
                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                                                {active ? (
                                                                    <DuplicateActiveIcon
                                                                        className="mr-2 h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    <DuplicateInactiveIcon
                                                                        className="mr-2 h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                )}
                                                                Duplicate
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                                <div className="px-1 py-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                className={`${active
                                                                    ? 'bg-violet-500 text-white'
                                                                    : 'text-gray-900'
                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                                                {active ? (
                                                                    <ArchiveActiveIcon
                                                                        className="mr-2 h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    <ArchiveInactiveIcon
                                                                        className="mr-2 h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                )}
                                                                Archive
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                className={`${active
                                                                    ? 'bg-violet-500 text-white'
                                                                    : 'text-gray-900'
                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                                                {active ? (
                                                                    <MoveActiveIcon
                                                                        className="mr-2 h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    <MoveInactiveIcon
                                                                        className="mr-2 h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                )}
                                                                Move
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                                <div className="px-1 py-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                className={`${active
                                                                    ? 'bg-violet-500 text-white'
                                                                    : 'text-gray-900'
                                                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                                                                {active ? (
                                                                    <DeleteActiveIcon
                                                                        className="mr-2 h-5 w-5 text-violet-400"
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    <DeleteInactiveIcon
                                                                        className="mr-2 h-5 w-5 text-violet-400"
                                                                        aria-hidden="true"
                                                                    />
                                                                )}
                                                                Delete
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

function EditInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    )
}

function EditActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    )
}

function DuplicateInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4 4H12V12H4V4Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path
                d="M8 8H16V16H8V8Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    )
}

function DuplicateActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4 4H12V12H4V4Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path
                d="M8 8H16V16H8V8Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    )
}

function ArchiveInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
                x="5"
                y="8"
                width="10"
                height="8"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <rect
                x="4"
                y="4"
                width="12"
                height="4"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function ArchiveActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
                x="5"
                y="8"
                width="10"
                height="8"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <rect
                x="4"
                y="4"
                width="12"
                height="4"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function MoveInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function MoveActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    )
}

function DeleteInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function DeleteActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    )
}
