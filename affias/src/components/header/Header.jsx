import { useState } from "react";
import "./Header.css";
function Header() {
  const [showModal, setshowModal] = useState(false);
  return (
    <header className="between flex ">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu"
      >
        <i className="material-icons-outlined">menu</i>
      </button>
      <a className="flex title" href="">
        <img className="img1" src="./logo3.jpeg" alt="logo" />
        <h4>store</h4>
      </a>

      <nav>
        <ul className="flex list ">
          <li>
            <a href="#">
              <span className="material-symbols-outlined">home</span>
              <p> home</p>
            </a>
          </li>
          <li>
            <a href="#product">
              <span className="material-symbols-outlined">shopping_bag</span>
              <p> product </p>
            </a>
          </li>
          <li>
            <a href="#create">
              <span className="material-symbols-outlined">add</span>
              <p> create website</p>
            </a>
          </li>
          <li>
            <a href="#contact">
              <span className="material-symbols-outlined">mail</span>
              <p> contact us</p>
            </a>
          </li>
        </ul>
      </nav>
      {showModal && (
        <div className=" fixed">
          <ul className="modal ">
            <li>
              <button
                onClick={() => {
                  setshowModal(false);
                }}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </li>
            <li>
              <a href="#hero">about</a>
            </li>
            <li>
              <a href="#ceate">create website</a>
            </li>
            <li>
              <a href="product">product</a>
            </li>
            <li>
              <a href="https://wa.me/+212708768573">whatsapp</a>
            </li>
            <li>
              <a href="contact">contact</a>
            </li>
          </ul>
        </div>
      )}
      <div></div>
    </header>
  );
}

export default Header;
