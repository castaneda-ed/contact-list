import { useEffect, useState } from "react";
import ContactRow from "./ContactRow";

export default function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    async function getContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const parsed = await response.json();
        setContacts(parsed);
      } catch (error) {
        console.error(error);
      }
    }
    getContacts();
  }, []);

  console.log("contacts : ", contacts);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((c) => {
          return (
            <ContactRow
              setSelectedContactId={setSelectedContactId}
              key={c.id}
              contact={c}
            />
          );
        })}
      </tbody>
    </table>
  );
}
