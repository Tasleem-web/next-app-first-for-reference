import React from "react";

import styles from "./modal.module.css";

const { useState, useEffect } = React;

const Modal = (props) => {
  console.log(props);
  // Use useEffect to add an event listener to the document
  useEffect(() => {
    function onKeyDown(event) {
      if (event.keyCode === 27) {
        // Close the modal when the Escape key is pressed
        onRequestClose();
      }
    }

    // Prevent scolling
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    // Clear things up when unmounting this component
    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const onRequestClose = () => {
    props.parentCallback(false);
  }

  return (
    <div className={styles.modal__backdrop}>
      <div className={styles.modal__container}>
        <h3 className={styles.modal__title}>I'm a modal!</h3>
        <p>
          When this modal is open, we disable scrolling the <code>body</code> using{" "}
          <code>overflow: hidden</code>. This allows users to scroll the modal
          without losing their position on the page.
        </p>
        <p>
          To close this modal, press the button below or use the Escape key on desktop.
        </p>
        <button type="button" onClick={onRequestClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
};

export default Modal;