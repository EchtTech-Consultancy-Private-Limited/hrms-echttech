import React,{useState} from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import accountimage from "../../assetsechttech/utility-images/accountimage.png"
import { Dialog } from '@headlessui/react';
import logo from "../../assetsechttech/logo/logo.png"



const HeaderComponent = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div className='top-header flex justify-between items-center px-3'>
      <div className="top-bar-left flex">
          <div className="sidebar-top-logo-con w-full rounded-lg logo-custom-border p-4">
            <img src={logo} alt="" />
          </div>
        {/* <h3 className='text-lg font-semibold' >Section Title</h3> */}
      </div>
      <div className="top-bar-left flex items-center ">

        <div>
          <ul className='flex items-center' >
            <li>
            <button
        onClick={openModal}
        className="px-3 py-2 gap-x-1.5  text-gray-400 rounded"
      >
        <SearchOutlinedIcon />
      </button>

      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-sm w-full rounded bg-white p-6">
            <Dialog.Title className="text-lg font-medium text-gray-900">
              Search Here
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-sm text-gray-500">
              <input className='w-full rounded border-gray-400' type="text" />
            </Dialog.Description>

            <div className="mt-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>






            </li>
          
              <li>

                <Menu as="div" className="relative inline-block text-left">
                  <div className='' >
                    <MenuButton className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-400   ">

                     <InfoOutlinedIcon/>

                    </MenuButton>
                  </div>

                  <MenuItems
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div className="py-1">
                      <MenuItem>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                              }`}
                          >
                            Account settings
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                              }`}
                          >
                            Support
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ active }) => (
                          <a
                            href="#"
                            className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                              }`}
                          >
                            License
                          </a>
                        )}
                      </MenuItem>
                      <form method="POST">
                        <MenuItem>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={`block w-full px-4 py-2 text-left text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                }`}
                            >
                              Sign out
                            </button>
                          )}
                        </MenuItem>
                      </form>
                    </div>
                  </MenuItems>
                </Menu>
              </li>          
            <li>

              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="relative inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-400 ">
                    {/* Notifications */}

                         <NotificationsActiveOutlinedIcon/>

                    <div class="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-gray-100 dark:border-gray-900 rounded-full"></div>




                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        Edit
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        Duplicate
                      </a>
                    </MenuItem>
                  </div>
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        Archive
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        Move
                      </a>
                    </MenuItem>
                  </div>
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        Share
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        Add to favorites
                      </a>
                    </MenuItem>
                  </div>
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        Delete
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>

            </li>
            <li>

              <Menu as="div" className="relative inline-block text-left">
                <div className='' >
                  <MenuButton className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900   ">

                    <img class="w-8 h-8 rounded-full" src={accountimage} width="32" height="32" alt="User" />


                    My Account
                   
                  </MenuButton>
                </div>

                <MenuItems
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div className="py-1">
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="/account-setting"
                          className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            }`}
                        >
                          Account settings
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="#"
                          className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            }`}
                        >
                          Support
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="#"
                          className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                            }`}
                        >
                          License
                        </a>
                      )}
                    </MenuItem>
                    <form method="POST">
                      <MenuItem>
                        {({ active }) => (
                          <button
                            type="submit"
                            className={`block w-full px-4 py-2 text-left text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                              }`}
                          >
                            Sign out
                          </button>
                        )}
                      </MenuItem>
                    </form>
                  </div>
                </MenuItems>
              </Menu>
            </li>
          </ul>
        </div>




      </div>
    </div>
  )
}

export default HeaderComponent
