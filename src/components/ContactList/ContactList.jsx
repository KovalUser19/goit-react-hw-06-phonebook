import { useDispatch, useSelector } from "react-redux";
import { onDeleteContact } from "../../redux/contactSlice";
import css from "./ContactList.module.css"
import { getContact, getFilter } from "../../redux/selectors";

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContact);
  const filter = useSelector(getFilter);

   const getVisibleContact = () => {
    console.log(contacts);
     return contacts.filter((contact) =>
     contact.name.toLowerCase().includes(filter.toLowerCase()))
  };

   const visibleContact = getVisibleContact();

   return (
   <ul className={css.items}>
       {visibleContact.map((el) => {
         return <li key={el.id}>{el.name} {el.number}
           <button className={css.button}
             type="button"
             name="delete"
             onClick={() => dispatch(onDeleteContact(el.id))}>
               Delete</button>
         </li>
      })
      }
     </ul>
    )
}