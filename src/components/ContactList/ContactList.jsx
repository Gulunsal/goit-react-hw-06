import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactSlice";
import { selectFilter } from "../../redux/filterSlice";

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
        <li key={contact.id}>{contact.name}</li>
      ))}
    </ul>
  );
}
