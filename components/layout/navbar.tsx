"use client";
import { FC, useState, useEffect, useRef } from "react";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import { ShoppingCart, User, Search } from "lucide-react";
import DropdownMenu from "../shared/dropdown";
import Image from "next/image";
import Sidebar from "../shared/sidebar";
interface NavBarProps {
  session: Session | null;
}

const menuItemsArray = [
  [
    { MenuLinkName: "Home", MenuLinkURL: "/" },
    { MenuLinkName: "Courses1", MenuLinkURL: "/courses1" },
  ],
  [
    { MenuLinkName: "Courses", MenuLinkURL: "/" },
    { MenuLinkName: "Courses2", MenuLinkURL: "/courses2" },
  ],
  [
    { MenuLinkName: "Blog", MenuLinkURL: "/" },
    { MenuLinkName: "Courses2", MenuLinkURL: "/courses2" },
  ],
  [
    { MenuLinkName: "Shop", MenuLinkURL: "/" },
    { MenuLinkName: "Courses2", MenuLinkURL: "/courses2" },
  ],
  [
    { MenuLinkName: "Pages", MenuLinkURL: "/" },
    { MenuLinkName: "Courses2", MenuLinkURL: "/courses2" },
  ],
  [
    { MenuLinkName: "Events", MenuLinkURL: "/" },
    { MenuLinkName: "Courses2", MenuLinkURL: "/courses2" },
  ],
  // ... other menu items
];
// Dropdown menu items

const NavBar: FC<NavBarProps> = ({ session }) => {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);
  const navBarRef = useRef<HTMLElement>(null);

  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null,
  );

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Element;
      if (!target.closest(".dropdown")) {
        if (!isButtonClicked) {
          setOpenDropdownIndex(null);
        } else {
          setIsButtonClicked(false);
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isButtonClicked]);

  const toggleDropdown = (index: number | null = null) => {
    setIsButtonClicked(true);
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  return (
    <>
      <SignInModal />
      <nav
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 p-4 transition-all`}
      >
        <div className="mx-auto flex h-16 w-full max-w-screen-xl flex-wrap items-center justify-between">
          <div className="flex items-center">
            {" "}
            <Link href="/">
              <Image
                src="/Website_Simple_Logo_1.png"
                alt="Project Skip logo"
                width={70}
                height={75}
                className="mr-2rounded-sm"
              />
            </Link>
            <span>Project Skip</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden justify-center space-x-4 md:flex">
            {menuItemsArray.map((menuItems, index) => (
              <DropdownMenu
                key={index}
                menuData={menuItems}
                isOpen={openDropdownIndex === index}
                onToggle={() => toggleDropdown(index)}
              />
            ))}
          </div>

          {/* ... Icons and Login/Signup buttons code ... */}
          <div className="hidden items-center space-x-4 md:flex">
            <ShoppingCart />
            <User />
            <Search />
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <>
                <button
                  className="rounded px-4 py-2 text-black underline"
                  onClick={() => setShowSignInModal(true)}
                >
                  Login
                </button>
                <button
                  className="rounded bg-gradient-purple px-4 py-2 text-white"
                  onClick={() => setShowSignInModal(true)}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          {/* Hamburger menu icon for mobile */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsSideBarOpen(true)}>
              {/* Simple Hamburger Icon */}≡
            </button>
          </div>

          {/* Mobile Menu */}
          {isSideBarOpen && (
            <Sidebar isOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen}>
              <div className=" left-0 top-full mt-2 flex w-full flex-col space-y-4 rounded bg-white shadow-lg md:hidden">
                {menuItemsArray.map((menuItems) =>
                  menuItems.map((item) => (
                    <Link href={item.MenuLinkURL} key={item.MenuLinkName}>
                      <span className="block px-4 py-2 hover:bg-gray-200">
                        {item.MenuLinkName}
                      </span>
                    </Link>
                  )),
                )}
                <div className="flex flex-col items-center space-y-4">
                  <ShoppingCart />
                  <User />
                  <Search />
                  {session ? (
                    <UserDropdown session={session} />
                  ) : (
                    <>
                      <button
                        className="rounded px-4 py-2 text-black underline"
                        onClick={() => setShowSignInModal(true)}
                      >
                        Login
                      </button>
                      <button
                        className="rounded bg-gradient-purple px-4 py-2 text-white"
                        onClick={() => setShowSignInModal(true)}
                      >
                        Sign Up
                      </button>
                    </>
                  )}
                </div>
              </div>
            </Sidebar>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;