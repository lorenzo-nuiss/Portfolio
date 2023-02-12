import { useEffect, useRef, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import FirstContent from "./FirstContent";

export default function ModalContact() {
  useEffect(() => {
    const button = document.querySelector("#btnAnmi1");

    button.addEventListener("click", function () {
      button.style.transform = "scale(0.9)";
      setTimeout(function () {
        button.style.transform = "scale(1)";
      }, 300);
    });
  }, []);

  return (
    <>
      <Popup
        trigger={
          <button className="btn1" id="btnAnmi1">
            Me contacter
          </button>
        }
        modal
      >
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div>
              {" "}
              <FirstContent
                from={{ opacity: 0, x: 10 }}
                visible={true}
                numberArrayRobot={Math.floor(Math.random() * 2)}
              >
                Test Du modal content 1
              </FirstContent>
              {/* {!test ? firstContent() : secondContent()} */}
            </div>
          </div>
        )}
      </Popup>
    </>
  );
}
