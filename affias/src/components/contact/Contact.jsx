import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneanimation from "../../../public/inmt/done.json";
import  msganimation from"../../../public/inmt/msg.json";
const Contact = () => {
  const [state, handleSubmit] = useForm("xoqgelqb");

  return (
    <section id="contact" className="contact-us pdin ">
     
        <div>
          <div className="messeg flex ">
            <h1> contact us </h1>
          </div>
          <p className="sub-messeg">
            Get notified when I publish something new, and unsubscribe at any
            time.
          </p>
        </div>
        <div style={{justifyContent :"space-between"}} className="flex">
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <label htmlFor="email">Email Address:</label>
              <input
                autoComplete="off"
                required
                type="email"
                name="email"
                id="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="flex" style={{ marginTop: "24px" }}>
              <label htmlFor="message"> your message:</label>
              <textarea required name="message" id="message"></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="submit"
            >
              {state.submitting ? "submitting .. " : "submit"}{" "}
            </button>
            {state.succeeded && (
              <h1 className="flex ">
                {" "}
                <Lottie
                  loop={false}
                  style={{ height: "44px" }}
                  animationData={doneanimation}
                />
                Thanks for joining!
              </h1>
            )}
          </form>
          <div className=" animation">  <Lottie
                 
                  style={{ height: "444px" }}
                  animationData={msganimation}
                /> </div>
        </div>
      
    </section>
  );
};
export default Contact;
