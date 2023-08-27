import Image from "next/image";
import Link from "next/link";
import MyntraLogo from '../public/Myntra-icon-logo.svg';
import IconSearchOutline from "./react-svg-icons/IconSearchOutline";
import IconMenu_hamburger from "./react-svg-icons/HamburgerMenu";

export default function Navigation() {
    return (
        <div className="nav-wrapper">
            <div className="xl:container">

                <nav className="relative flex flex-row">
                    <div className="brand">
                        <Image alt="Myntra logo" src={MyntraLogo} width="64" height="auto" />
                    </div>

                    <div className="absolute top-0 right-0 border border-red-600">
                        <IconMenu_hamburger width="2rem" height="2rem" />
                    </div>

                    <div className="nav-menu-wrapper">
                        <ul className="nav-menu">
                            <li className="nav-list-item">
                                <Link href=".." className="">men</Link>
                            </li>
                            <li className="nav-list-item">
                                <Link href=".." className="">women</Link>
                            </li>
                            <li className="nav-list-item">
                                <Link href=".." className="">kids</Link>
                            </li>
                            <li className="nav-list-item">
                                <Link href=".." className="">home & living</Link>
                            </li>
                            <li className="nav-list-item">
                                <Link href=".." className="">beauty</Link>
                            </li>
                            <li className="nav-list-item">
                                <Link href=".." className="">studio<span className="">new</span></Link>
                            </li>
                        </ul>

                        <div className="search-container">
                            <IconSearchOutline />
                            <input type="search" name="search" id="search" className="" placeholder="Search for brands and products here..."/>
                        </div>

                        <div className="user-actions">
                            <p>Profile</p>
                            <p>Wishlist</p>
                            <p>Bag</p>
                        </div>
                    </div>
                    
                </nav>

            </div>
        </div>
    )
}
