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
            className="inline-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-pink-200 text-4xl font-bold cursive tracking-widest"
          >
            Maria Barkouzou
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-white bg-blue-300"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-50 hover:text-pink-200"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-white bg-blue-300"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-50 hover:text-pink-200"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-white bg-blue-300"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-50 hover:text-pink-200"
          >
            About
          </NavLink>
        </nav>
        <div className="py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/mariabarkouzou"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/mariabarkouzou/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UCZAwc4NzUv8E_wsyAuJfdNg"
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
