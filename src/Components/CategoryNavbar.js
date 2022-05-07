import React from "react";
import styles from "./css/categorynavbar.module.css";

import { NavLink } from "react-router-dom";

const CategoryNavbar = () => {
  const linkData = [
    { to: "/all", name: "all" },
    { to: "/image", name: "image" },
    { to: "/news", name: "news" },
  ];
  return (
    <nav className={styles.navContainer}>
      {linkData.map(({ to, name }, index) => {
        return (
          <NavLink
            to={to}
            key={index}
            className={(props) => {
              return `${props.isActive ? styles.isActive : ""}`;
            }}
            end
          >
            <span>{name}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default CategoryNavbar;
