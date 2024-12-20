import React from "react";
import "./Contact.css";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b66e3a04-8f3d-48eb-8157-39920150da3d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <p style={{ textAlign: "center" }}>Contact Me</p>
      <h1 style={{ textAlign: "center" }}>Get in Touch</h1>
      <div>
        <div className="left-info">
          <h2>Send a message </h2>

          <br />
          <h4>
            Gmail : <span>somashekharym@gmail.com</span>
          </h4>
          <br />
          <h4>
            GitHub :{" "}
            <a href="https://github.com/Somu9008?tab=repositories">
              https://github.com/Somu9008?tab=repositories
            </a>
          </h4>
          <br />
          <h3>
            Mobile No. : <span>+ 91 7676865755</span>
          </h3>
        </div>
        <div className="right-info">
          <form action="" onSubmit={onSubmit}>
            <div>
              <label htmlFor="username">username</label>
              <input
                id="username"
                type="text"
                placeholder="username"
                required
                name="username"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="email"
                name="email"
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="Number"
                placeholder="Phone"
                name="phone"
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button>{result ? result : "submit"}</button>
          </form>
        </div>
      </div>
      <h1
        style={{
          marginTop: "1rem",
          fontSize: "2rem",
          textDecoration: "underline",
          textAlign: "center",
        }}
      >
        Thanks for Scroll
      </h1>
    </div>
  );
}
