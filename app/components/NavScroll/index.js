/**
 *
 * NavScroll
 *
 */

import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import './style.css';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function NavScroll() {
  return (
    <div>
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy
                smooth
                offset={0}
                duration={1000}
              >
                <FontAwesomeIcon icon={faSquare} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section4"
                spy
                smooth
                offset={0}
                duration={1000}
              >
                <FontAwesomeIcon icon={faSquare} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section3"
                spy
                smooth
                offset={0}
                duration={1000}
              >
                <FontAwesomeIcon icon={faSquare} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section2"
                spy
                smooth
                offset={0}
                duration={1000}
              >
                <FontAwesomeIcon icon={faSquare} />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section5"
                spy
                smooth
                offset={0}
                duration={1000}
              >
                <FontAwesomeIcon icon={faSquare} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

NavScroll.propTypes = {};

export default NavScroll;
