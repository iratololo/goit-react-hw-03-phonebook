import { Component } from 'react';

import css from "./ContactListElement.module.css"

export class ContactListElement extends Component  {
        render() {
                const { data: { id, name, number }, deleteContact } = this.props;
                return (
                <li className={css.item}>
                        <span className={css.span}>{name}</span>
                        <span className={css.span}>{number}</span>
                        <button id ={id} onClick={()=> deleteContact(id)} className={css.button} type="button">Delete</button>
                </li>
                )
        }
}