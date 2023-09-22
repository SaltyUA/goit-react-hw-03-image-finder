import { Component } from 'react';
import Searchbar from './searchbar';
import { getImagesBySearch } from 'api/pixabayAPI';
import ImageGallery from './imageGallery';

export class App extends Component {
  state = {
    gallery: [],
    page: 1,
  };

  searchImages = request => {
    const { page } = this.state.page;
    getImagesBySearch(request, page)
      .then(response => {
        this.setState(prev => ({
          gallery: [...prev.gallery, ...response.hits],
        }));
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.searchImages} />
      </div>
    );
  }
}
