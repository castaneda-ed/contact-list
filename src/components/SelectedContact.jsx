//I need state to store a selectred contact
//Create a click handler for the contact rows to change the selected contact
//need to render the selected contact to my app jsx with all its props
import { useEffect, useState } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState("");
  useEffect(() => {
    async function getContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const parsed = await response.json();
        setContact(parsed);
      } catch (error) {
        console.error(error);
      }
    }
    getContact();
  }, [selectedContactId]);
  console.log(contact);
  return (
    <>
      <table className="contact">
        <thead>
          <th colSpan="5">Selected Contact</th>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Username</td>
            <td>Website</td>
          </tr>
          <tr>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
            <td>{contact.username}</td>
            <td>{contact.website}</td>
          </tr>
          <tr>
            <td colSpan="5">
              <button onClick={() => setSelectedContactId(null)}>
                Go back
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      ;
    </>
  );
}
