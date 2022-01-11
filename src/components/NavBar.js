import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function NavBar() {
  return (
    <header className="bg-black">
      <div className="container mx-auto flex justify-between">
        <nav>
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-blue-200 hover:text-pink-300 text-4xl font-bold cursive tracking-widest"
          >
            Maria Barkouzou
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-white bg-blue-500"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 hover:text-pink-400"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-white bg-blue-500"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 hover:text-pink-400"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-white bg-blue-500"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-100 hover:text-pink-400"
          >
            About
          </NavLink>
        </nav>
        <div className="py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/mariabarkouzou"
            rel="noopener"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/mariabarkouzou/"
            rel="noopener"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UCZAwc4NzUv8E_wsyAuJfdNg"
            rel="noopener"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
