import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactSlice";
import { selectFilter } from "../../redux/filterSlice";
import ContactItem from "../ContactItem/ContactItem";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filterName = useSelector(selectFilter) || ""; // Fallback olarak boş string eklenir

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );

  if (!contacts.length) {
    return <p>No contacts available.</p>;
  }

  if (!filteredContacts.length) {
    return <p>No contacts match the search criteria.</p>;
  }

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
