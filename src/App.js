import React, { useEffect, useState } from "react";
import AddContact from "./Components/AddContact/AddContact";
import ContactList from "./Components/ContactList/ContactList";
import EditContact from "./Components/EditContact/EditContact";

const App = () => {
  const [contactArr, setContactArr] = useState([]);
  const [editContact, setEditContact] = useState({});
  const [modalWindow, setModalWindow] = useState(false);
  // ! ======================= Функция для добавления start ======================
  function handleContact(contactObj) {
    let newContact = [...contactArr];
    newContact.push(contactObj);
    setContactArr(newContact);
  }
  // ? ======================= Функция для добавления end ========================

  // ! ======================= Функция для удаления start ======================
  function deleteContact(id) {
    let newContactArr = contactArr.filter(item => {
      return item.id !== id;
    });
    setContactArr(newContactArr);
  }
  // ? ======================= Функция для удаления end ========================

  // ! ======================= Функция для редактирования start ===================
  function editedContact(index) {
    setModalWindow(true);
    setEditContact(contactArr[index]);
  }
  // ? ======================= Функция для редактирования end =====================

  // ! ======== Функция для открытия и закрытия модального окна start =============

  const clickClose = () => setModalWindow(false);
  // ? ======== Функция для открытия и закрытия модального окна end ===============

  // ! ================== функция для сохранения изменении strart ==================
  function clickEditSave(newContact) {
    let newContactArr = contactArr.map(item => {
      if (item.id === newContact.id) {
        return newContact;
      } else {
        return item;
      }
    });
    setContactArr(newContactArr);
    setModalWindow(false);
  }
  // ? ================== функция для сохранения изменении end =====================

  // ! ================== localStorage start =======================================
  useEffect(() => {
    if (localStorage.getItem("contacts") === null) {
      localStorage.setItem("contacts", JSON.stringify([]));
    } else {
      let data = localStorage.getItem("contacts");
      setContactArr(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contactArr));
  }, [contactArr]);
  // ? ================== localStorage end =========================================

  return (
    <div>
      <AddContact handleContact={handleContact} />
      {modalWindow ? (
        <EditContact
          clickClose={clickClose}
          editContact={editContact}
          clickEditSave={clickEditSave}
        />
      ) : null}
      <ContactList
        contactArr={contactArr}
        deleteContact={deleteContact}
        editedContact={editedContact}
      />
    </div>
  );
};

export default App;
