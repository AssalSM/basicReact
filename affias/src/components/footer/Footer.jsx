import "./footer.css";

const Footer = () => {
  return (
    <footer className="flex pdin">
      <div>
        <ul className="flex list ">
          <li>
            <a href="#hero">
              <span className="material-symbols-outlined">person_alert</span>

              <p> about </p>
            </a>
          </li>
          <li>
            <a href="#product">
              <span className="material-symbols-outlined">shopping_bag</span>
              <p> product </p>
            </a>
          </li>
        </ul>
      </div>
      <p>© 2024 Spencer Sharp. by assal , welcome again</p>
    </footer>
  );
};

export default Footer;
