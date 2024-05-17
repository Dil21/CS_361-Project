
import React from 'react';
import { Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { GoGoal } from "react-icons/go";
import { MdCreateNewFolder } from "react-icons/md";
import { TbTemplate } from "react-icons/tb";
import { IoMdExit } from "react-icons/io";


// Eliminate Links to pages that don't work.

function SideNav() {
  return (
    <nav className="sidenav">
        <Link to="/"><IoHome/>Main</Link>
        <Link to="/Profile"><IoHome/>Profile</Link>
        <Link to="/goalDash"><GoGoal/>Goals Dashboard</Link>
        <Link to="/create"><MdCreateNewFolder />Goal Creator</Link>
        <Link to="/goalTemplate"><TbTemplate />Goal Template</Link>
        <Link to="/Feedback"><TbTemplate />Feedback</Link>
        <Link to="/"><IoMdExit />Log Out</Link>
    </nav>
  );
}

export default SideNav;