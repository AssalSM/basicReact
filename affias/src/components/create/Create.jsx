import "./Create.css";

function Create() {
  return (
    <div id="create" className="creat flex cntr">
      <div>
        <img className="photo" src="./tree.jpeg" alt="assa" />
      </div>

      <div className="about">
        <h3>Design your business website by communicating with us on WhatsApp or Gmail</h3>
        <p>
          If you are one of those who want to design an e-commerce website or a
          website for articles, etc ... . Just contact us here and we will provide
          you with the service at the lowest cost and explain all the steps of
          building the website using reactjs or wordpress . 
        </p>
        <nav>
        <ul className="flex gap ">
          <li>
            <a href="https://wa.me/+212708768573">
             
              <p> whatsapp</p>{" "}
            </a>
          </li>
          <li>
            <a href="#product">
              <span className="material-symbols-outlined">shopping_bag</span>{" "}
              <p> product </p>
            </a>
          </li>
         
          <li>
            <a href="#contact">
              <span className="material-symbols-outlined">mail</span>
              <p>gmail</p>
            </a>
          </li>
        </ul>
      </nav>
      </div>
    </div>
  );
}

export default Create;
