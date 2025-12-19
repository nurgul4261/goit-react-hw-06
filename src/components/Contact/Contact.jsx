import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import styles from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {contact.name} {contact.number}
      <button className={styles.button} onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
    </li>
  );
};

export default Contact;