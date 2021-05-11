import React from "react";

const Nav = () => {
  return (
    <div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="user-tab"
            data-toggle="tab"
            href="#user_listing_tab"
            role="tab"
            aria-controls="user"
            aria-selected="true"
          >
            User
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="scratch_card-tab"
            data-toggle="tab"
            href="#add_user_tab"
            role="tab"
            aria-controls="scratch_card"
            aria-selected="false"
          >
            Add User
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
