import React from 'react'
import Image from 'next/image'
import { FaRegUserCircle } from 'react-icons/fa'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'

  
  



const Header = () => {
  return (
    <header className="text-blue-900 font-serif max-w-screen-2xl mx-auto ">
    <div className="container mx-auto flex flex-wrap p-2 gap-5 flex-row items-center justify-between">
    <Sheet>
  <SheetTrigger><GiHamburgerMenu className='md:hidden text-2xl'/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
        <ul className='mt-5 gap-5 text-white'>
                <li className='p-2 hover:text-blue-800 rounded-lg'><Link href='/'>Home</Link></li>
               <li className='p-2 hover:text-blue-800 rounded-lg'><Link href='/blog-page'>Blog</Link></li> 
               <li className='p-2 hover:text-blue-800 rounded-lg'><Link href='/about'>About</Link></li>
               <li className='p-2 hover:text-blue-800 rounded-lg'><Link href='/contact'>Contact</Link></li> 
        </ul>
    </SheetHeader>
  </SheetContent>
</Sheet>

      <Link className="flex title-font font-medium items-center text-gray-900 md:mb-0" href='/'>
      <Image
    src="/logo.png"
    alt="Logo"
    width={50}
    height={50}
    className="lg:w-20 lg:h-20 -ml-2 w-15 h-15 text-white rounded-full "
  />
        <span className=" text-2xl text-blue-900 hover:text-blue-800 font-extrabold font-serif">Blogify</span>
      </Link>
      <nav className="hidden sm:block md:ml-auto dm:flex font-serif flex-wrap items-center text-2xl justify-center ">
        <Link href='/' className="mr-5 hover:text-blue-800">Home</Link>
        <Link href='/blog-page' className="mr-5 hover:text-blue-800">Blog</Link>
        <Link href='/about' className="mr-5 hover:text-blue-800">About</Link>
        <Link href='/contact' className="mr-5 hover:text-blue-800">Contact</Link>
      </nav>
      <DropdownMenu>
  <DropdownMenuTrigger><FaRegUserCircle className='text-2xl hover:text-blue-800' /></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
    <DropdownMenuItem>Log Out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

    </div>
  </header>
  )
}

export default Header