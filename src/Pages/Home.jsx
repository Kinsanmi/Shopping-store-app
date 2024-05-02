import React from "react";
import { useState, useEffect } from "react";
import { MegaMenu } from "./MegaMenu";
import { Categories } from "./Categories";
import "../Styles/Home.css";

// back to top icon
import { IoIosArrowUp } from "react-icons/io";

export const Home = ({ handleClick, err }) => {
  const [visible, setVisible] = useState(false);

  // display scroll to top with ease on the body

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const failedRequest = () => {
    return (
      <main className="main-section .sec">
        <section>
          <MegaMenu />
          <Categories handleClick={handleClick} />
        </section>
      </main>
    );
  };

  return (
    <>
      {failedRequest()}

      {visible && (
        <button className="btn-Top" onClick={goTop}>
          <IoIosArrowUp className="arrow" />
        </button>
      )}
    </>
  );
};
