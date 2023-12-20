import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Container } from "./components/Container/Container";
import { ContactForm } from "./components/ContactForm/ContactForm"
import { Filter } from "./components/Filter/Filter"
import {ContactList} from "./components/ContactList/ContactList"

export class App extends Component {
  state = { 
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  createContact = (data) => {
    const contact = {
      ...data,
      id: nanoid(),
    }

    const twin = this.state.contacts.find(({ name }) => name.toLowerCase() === data.name.toLowerCase());
    if (twin) {
      Report.failure(
        'error',
        'There is already a contact with this name',
        'Okay',
      );
      return;
    } else {
      this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, contact],
      }
      })
      Notify.success('A new contact is created');
    }
  }

  deleteContact = (data) => {
    this.setState((prev) => {
      return {contacts: prev.contacts.filter(({ id }) => id !== data),}
    })
  }

  changeFilter = (val) => {
    this.setState({
      filter: val,
    })
  }

  render() {

    const foundContact = this.state.contacts.filter(({ name }) => name.toLowerCase().includes(this.state.filter.toLowerCase()));

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm data={this.createContact}/>
        <h2>Contacts</h2>
        <Filter changeFilter={this.changeFilter} filter={this.state.filter } />
        <ContactList contacts={foundContact} deleteContact={this.deleteContact} />
      </Container>
    )
  }
}

