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

  render() {
    const { search } = this.state;

    return (
      <form>
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
