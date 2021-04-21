import React from "react";
import { Link } from "react-router-dom";

//styled
import styled from "styled-components";

const Nav = () => {
  return (
    <Stylednav>
      <h1>
        <Link to="/" id="logo">
          Create
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </Stylednav>
  );
};

const Stylednav = styled.nav`
  display: flex;
  margin: auto;
  min-height: 10vh;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;

  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    cursor: pointer;
  }
`;

export default Nav;
