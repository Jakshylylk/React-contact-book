import React, { useState } from "react";
import "./AddContact.css";
const AddContact = ({ handleContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function AddNewContact() {
    if (
      !name.trim() ||
      !email.trim() ||
      !imgUrl.trim() ||
      !phoneNumber.trim()
    ) {
      alert("Заполните поле!");
      return;
    }
    let newContact = {
      name: name,
      email: email,
      imgUrl: imgUrl,
      phoneNumber: phoneNumber,
      id: Date.now(),
    };
    handleContact(newContact);
    setName("");
    setEmail("");
    setImgUrl("");
    setPhoneNumber("");
  }
  return (
    <div className="mainContainer">
      <h1>CONTACT BOOK</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        type="text"
        placeholder="Name"
      />
      <input
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="text"
        placeholder="Email"
      />
      <input
        value={imgUrl}
        onChange={e => setImgUrl(e.target.value)}
        type="url"
        placeholder="Img Url"
      />
      <input
        value={phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}
        type="number "
        placeholder="Phone number"
      />
      <span>
        <button onClick={AddNewContact}>Добавить</button>
      </span>
    </div>
  );
};

export default AddContact;
