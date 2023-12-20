import { Component } from 'react';

import css from "./ContactForm.module.css"

export class ContactForm extends Component {
    state = {
    name: '',
    number: '', 
    }

    handlerOnChange = ({target:{name, value}}) => {
        this.setState({
            [name]: value,
        })
    }

    handlerOnSubmit = (e) => {
        e.preventDefault();
        this.props.data(this.state);
        this.setState({
            name: '',
            number: '', 
        })
    }
    
    render() {
        return (
            <form onSubmit={this.handlerOnSubmit} className={css.form}>
                <div className={css.container}>
                    <div className={css.item}>
                        <input onChange={this.handlerOnChange} className={css.input} id="name" type="text" name="name" value={this.state.name} required />
                        <label className={css.label} htmlFor="name">Name</label>
                    </div>
                    <div className={css.item}>
                        <input onChange={this.handlerOnChange} className={css.input} id="tel" type="tel" name="number" value={this.state.number} required />
                        <label className={css.label} htmlFor="tel">Number</label>
                    </div>
                </div>
                <button className={css.button} type='submit'>Add contact</button>
            </form>
            
        );
    }
}
