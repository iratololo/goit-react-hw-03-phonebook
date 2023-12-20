import { Component } from 'react';

import css from './Filter.module.css';

export class Filter extends Component {
    render() {
        const { filter, changeFilter } = this.props;
        return (
            <input onChange={({target:{value}}) => {changeFilter(value)}} className={css.input} type="text" name="filter" value={filter} placeholder='Find contacts by name'/>
        );
    }
}
