import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useAuth } from "../API/AuthContext.jsx";

export default function NavbarMenu({ isActive, setIsActive }) {
  const { user, setUser } = useAuth(); // Get current user from context
  
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    setUser(null); // Clear user state
  };
  
  const menuItems = [
      { id: "01", label: "HOME", path: "/" },
      ...(user
        ? [
            { id: "02", label: "PROFILE", path: "/profile" },
            { id: "03", label: "MY ORDER", path: "/my-order" },
            { id: "04", label: "LOGOUT", action: handleLogout },
          ]
        : [{ id: "04", label: "LOGIN", path: "/login" }]),
    ];

  const socialLinks = [
    { name: "Instagram", url: "https://instagram.com/ii.bbs" },
    { name: "Github", url: "https://github.com/mukhtaransarii" },
    { name: "LinkedIn", url: "https://linkedin.com/in/iibbs" },
    { name: "mukhtar.alam458546@gmail.com", url: "mailto:mukhtar.alam458546@gmail.com" },
  ];

  return (
    <div
      className={`fixed z-[90] h-screen left-0 w-full bg-gray-50 p-8 
      transition-all duration-500 ease-in-out flex flex-col justify-center gap-5 
      lg:flex-row lg:items-center ${isActive ? "top-16" : "-top-[110%] opacity-0"}`}
    >
      {/* Navigation Links */}
      <div onClick={() => setIsActive(false)}>
        {menuItems.map(({ id, label, path, action }) =>
          action ? (
            <button key={id} onClick={action} className="flex gap-2">
              <mark className="bg-transparent text-black font-semibold">{id}</mark>
              <span className="font-[Grotesk] text-7xl lg:text-7xl leading-none">{label}</span>
            </button>
          ) : (
            <Link key={id} to={path} className="flex gap-2">
              <mark className="bg-transparent text-black font-semibold">{id}</mark>
              <span className="font-[Grotesk] text-7xl lg:text-7xl leading-none">{label}</span>
            </Link>
          )
        )}
      </div>

      {/* Social Links */}
      <div className="flex flex-col text-sm">
        {socialLinks.map(({ name, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 underline text-blue-500 font-semibold"
          >
            {name}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}
