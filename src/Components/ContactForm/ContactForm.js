import React, { Component } from 'react';
import shortid from 'shortid';
import styles from './styles.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleChange = evt => {
    this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;

    this.props.onSubmit({ name, number });

    this.reset();
  };

  render() {
    const nameInputId = shortid.generate();
    const phoneInputId = shortid.generate();
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={styles.label} htmlFor={nameInputId}>
          Name
        </label>
        <input
          className={styles.input}
          name="name"
          value={this.state.name}
          type="text"
          onChange={this.handleChange}
          id={nameInputId}
        />
        <label className={styles.label} htmlFor={phoneInputId}>
          Number
        </label>
        <input
          className={styles.input}
          name="number"
          value={this.state.number}
          type="tel"
          onChange={this.handleChange}
          id={phoneInputId}
        />
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
