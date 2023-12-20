import {ContactListElement} from "../ContactListElement/ContactListElement"

export const ContactList = ({ contacts, deleteContact }) => {
        return (
            <ul>
                {contacts.map((item) => {
                    return <ContactListElement key={item.id} data={item} deleteContact={deleteContact} />
                })}
            </ul>
        );
}
