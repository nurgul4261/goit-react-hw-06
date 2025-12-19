import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice.js";
import { selectNameFilter } from "../../redux/filtersSlice.js";
import Contact from "../Contact/Contact.jsx";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;