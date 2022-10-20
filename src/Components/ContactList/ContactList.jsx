import React from "react";
import "./ContactList.css";

const ContactList = ({ contactArr, deleteContact, editedContact }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {contactArr.map((item, index) => (
        <ul key={item.id}>
          <li>{item.name}</li>
          <li>
            <img src={item.imgUrl} alt="" />
          </li>
          <li>{item.email}</li>
          <li>{item.phoneNumber}</li>
          <li>
            <button onClick={() => deleteContact(item.id)}>Удалить</button>
            <button onClick={() => editedContact(index)}>Редактировать</button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ContactList;
