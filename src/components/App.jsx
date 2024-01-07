
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import css from "./App.module.css"

export const App = () => {

  /*  useEffect(() => {
   const localData = localStorage.getItem('contacts')
    if (localData && JSON.parse(localData).length > 0) {
    setContacts(JSON.parse(localData))
    }
    return () => {
      localStorage.removeItem('contacts')
    }
},[])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]); */


   return (
    <div className={css.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter/>
      <ContactList/>
    </div>
  );
};
