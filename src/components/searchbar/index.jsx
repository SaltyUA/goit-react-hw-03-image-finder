import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState(() => ({
      search: value,
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { search } = this.state;
    this.props.onSubmit(search);
    this.setState(() => ({ search: '' }));
  };
  render() {
    const { search } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          name="search"
          value={search}
          required
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Searchbar;
