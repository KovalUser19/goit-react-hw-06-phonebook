import { useDispatch, useSelector } from "react-redux";
import { onDeleteContact, selectvisivleContacts } from "../../redux/contactSlice";
import { getVisibleContact } from "../../redux/contactSlice";
import css from "./ContactList.module.css"

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.contact.filterContacts);
  const visibleContacts = useSelector(selectvisivleContacts);
  dispatch(getVisibleContact(filter));
   return (
   <ul className={css.items}>
       {visibleContacts.map((el) => {
         return <li key={el.id}>{el.name} {el.number}
           <button className={css.button}
             type="button"
             name="delete"
             onClick={() => dispatch(onDeleteContact({contactId: el.id}))}>
               Delete</button>
         </li>
      })
      }
     </ul>
    )
}