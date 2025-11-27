import React from "react";
import logo from '../../../public/logo.jpg';
import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#245c5e] text-white rounded p-10">
      <div className="flex items-center ">
        <img src={logo} className="w-20 h-20 rounded-xl" alt="" />
        <h1 className="logo-text text-xl">Local Food Lovers Network</h1>
      </div>
      <nav className="grid grid-flow-col gap-4 text-xl">
        <NavLink to="/allReviews">All Review</NavLink>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 text-3xl">
          <a>
            <FaXTwitter />
          </a>
          <a>
            <FaYoutube />
          </a>
          <a>
            <FaFacebook />
          </a>
          <a>
            <FaTelegram />
          </a>
        </div>
      </nav>
      <aside>
        <p className="text-2xl">
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
