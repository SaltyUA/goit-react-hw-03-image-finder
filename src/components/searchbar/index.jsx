import React, { Component } from 'react';
import {
  SearchButton,
  SearchForm,
  SearchInput,
  SearchbarContainer,
} from './Searchbar.styled';

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
      <SearchbarContainer>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchInput
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            required
            value={search}
          />
          <SearchButton type="submit">
            <span></span>
          </SearchButton>
        </SearchForm>
      </SearchbarContainer>
    );
  }
}

export default Searchbar;
