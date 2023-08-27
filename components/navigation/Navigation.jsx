"use client"
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import MyntraLogo from '../../public/Myntra-icon-logo.svg';
import IconSearchOutline from "../react-svg-icons/IconSearchOutline";
import IconMenu_hamburger from "../react-svg-icons/HamburgerMenu";
import UserProfile from "./UserProfile";
import Wishlist from "./Wishlist";
import Bag from "./Bag";

export default function Navigation() {

    const navMenu = useRef();

    function handleNavToggle(e){
        navMenu.current.classList.toggle("hidden");
    }

    return (
        <div className="nav-wrapper shadow-md">
            <div className="xl:container mx-auto">

                <nav className="p-2 relative flex flex-col items-center xl:flex-row ">
                    <div className="brand w-16 h-full">
                        <Link href="/">
                            <Image alt="Myntra logo" src={MyntraLogo}/>
                        </Link>
                    </div>

                    <div ref={navMenu} className="nav-menu-wrapper mt-4 flex flex-col items-center gap-4 xl:flex xl:flex-row xl:flex-grow xl:mt-0 xl:ml-10">
                        <ul className="nav-menu flex flex-col items-center gap-4 font-semibold text-xs uppercase xl:flex-row">
                            <li className="nav-list-item text-center xl:ml-5">
                                <Link href=".." className="">men</Link>
                            </li>
                            <li className="nav-list-item text-center xl:ml-5">
                                <Link href=".." className="">women</Link>
                            </li>
                            <li className="nav-list-item text-center xl:ml-5">
                                <Link href=".." className="">kids</Link>
                            </li>
                            <li className="nav-list-item text-center xl:ml-5">
                                <Link href=".." className="">home & living</Link>
                            </li>
                            <li className="nav-list-item text-center xl:ml-5">
                                <Link href=".." className="">beauty</Link>
                            </li>
                            <li className="nav-list-item text-center xl:ml-5">
                                <Link href=".." className="relative">studio<span className="absolute -top-2 -right-7 text-[10px] text-red-500">new</span></Link>
                            </li>
                        </ul>

                        <div className="search-container rounded-md bg-gray-100 my-2 px-2 flex justify-between items-center xl:flex-grow xl:ml-20">
                            <IconSearchOutline width="1.25rem" height="1.25rem" />
                            <input type="search" name="search" id="search" className="bg-transparent p-2 outline-none flex-grow xl:w-96" placeholder="Search for brands and products here..."/>
                        </div>

                        <div className="user-actions mb-4 flex flex-col gap-4 text-xs font-semibold xl:flex-row xl:mb-0 xl:ml-8">
                            <UserProfile />
                            <Wishlist />
                            <Bag />
                        </div>
                    </div>

                    <div className="absolute top-2 right-2 border xl:hidden" onClick={e => handleNavToggle(e)}>
                        <IconMenu_hamburger width="2rem" height="2rem" />
                    </div>
                    
                </nav>

            </div>
        </div>
    )
}
