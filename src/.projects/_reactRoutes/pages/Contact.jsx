import React, { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    const message = `Name: ${firstName}\nLastName: ${lastName}\nEmail: ${email}`;
    alert(message);
    setFirstName("");
    setLastName("");
    setEmail("");
  };
  return (
    <div className="contactWrapper">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="formWrapper">
        <div className="infoWrapper">
          <label htmlFor="firstName">Name:</label>
          <input
            type="text"
            id="firstName"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <label htmlFor="email">E-Mail :</label>
          <input
            type="text"
            id="email"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
