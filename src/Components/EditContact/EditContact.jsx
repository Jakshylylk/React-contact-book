import React, { useState } from "react";
import "./EditContact.css";

const EditContact = ({ clickClose, clickEditSave, editContact }) => {
  const [name, setName] = useState(editContact.name);
  const [email, setEmail] = useState(editContact.email);
  const [imgUrl, setImgUrl] = useState(editContact.imgUrl);
  const [phoneNumber, setPhoneNumber] = useState(editContact.phoneNumber);
  // ! ================== функция для сохранения изменении strart ==================
  function saveContact() {
    if (
      !name.trim() ||
      !email.trim() ||
      !imgUrl.trim() ||
      !phoneNumber.trim()
    ) {
      alert("Заполните поле!");
      return;
    }

    let newContact = { ...editContact };
    newContact.name = name;
    newContact.email = email;
    newContact.imgUrl = imgUrl;
    newContact.phoneNumber = phoneNumber;

    clickEditSave(newContact);

    setName("");
    setEmail("");
    setImgUrl("");
    setPhoneNumber("");
  }
  // ? ================== функция для сохранения изменении  end ====================

  return (
    <div className="modal">
      <div className="main-Container">
        <h1>Редактировать</h1>
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
          <button onClick={saveContact}>Сохранить</button>
          <button onClick={clickClose}>Отмена</button>
        </span>
      </div>
    </div>
  );
};

export default EditContact;
