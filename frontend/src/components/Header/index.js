import React from "react";
import "./css/index.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/Inbox";
import HelpIcon from "@material-ui/icons/Help";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <a href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/220px-Stack_Overflow_logo.svg.png"
              alt="logo"
            />
          </a>

          <h3>Products</h3>
        </div>
        <div className="header-middle">
          <div className="header-search-container">
            <SearchIcon />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="header-right">
          <div className="header-right-container">
            {window.innerWidth < 768 && <SearchIcon />}

            <Avatar />
            <InboxIcon />
            <HelpIcon />
            <img
              src="https://symbols-electrical.getvecta.com/stencil_96/73_stack-exchange-icon.bbd1a14a04.svg"
              alt="stack-exchange"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
