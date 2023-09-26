import { Component } from 'react';
import Searchbar from './Searchbar';
import { getImagesBySearch } from 'api/pixabayAPI';
import ImageGallery from './ImageGallery';
import AppStyled from './App.styled';
import LoadMoreButton from './LoadMoreButton';
import Loader from './Loader';
import Modal from './Modal';

export class App extends Component {
  state = {
    gallery: [],
    totalPages: null,
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    isShowBtn: false,
    isShowModal: false,
    error: null,
    alt: '',
    largeURL: '',
  };

  searchImages = request => {
    const { searchQuery, currentPage } = this.state;

    if (searchQuery === request) {
      this.setState(() => ({
        error: `It allready showing results for this query`,
      }));
      return;
    }

    this.setState(() => ({
      isLoading: true,
      gallery: [],
    }));

    getImagesBySearch(request, currentPage)
      .then(response => {
        const { totalHits, hits } = response;

        if (totalHits === 0) {
          this.setState(() => ({ error: 'There are no hits to this query' }));
          return;
        }
        const totalPages = Math.ceil(totalHits / 12);
        console.log(totalPages);
        this.setState(prev => ({
          gallery: [...prev.gallery, ...hits],
          searchQuery: request,
          currentPage: 1,
          totalPages: totalPages,
          isShowBtn: totalPages > 1 ? true : false,
          error: null,
        }));
      })
      .catch(error => console.log(error))
      .finally(() => this.setState(() => ({ isLoading: false })));
  };

  handleLoadMore = () => {
    this.setState(() => ({
      isLoading: true,
    }));
    const { currentPage, searchQuery } = this.state;
    const nextPage = currentPage + 1;
    getImagesBySearch(searchQuery, nextPage)
      .then(response => {
        this.setState(
          prev => ({
            gallery: [...prev.gallery, ...response.hits],
            currentPage: nextPage,
            isLoading: false,
            isShowBtn: nextPage < prev.totalPages ? true : false,
          }),
          () => {
            window.scrollBy({
              top: 584,
              behavior: 'smooth',
            });
          }
        );
      })
      .catch(error =>
        this.setState(() => ({
          error: error.data.message,
        }))
      );
  };

  showModal = (largeImageURL, alt) => {
    this.setState(() => ({
      largeURL: largeImageURL,
      alt: alt,
      isShowModal: true,
    }));
  };

  toggleModal = () => {
    this.setState(prev => ({
      isShowModal: !prev.isShowModal,
    }));
  };

  render() {
    const { gallery, error, isLoading, isShowModal, isShowBtn, largeURL, alt } =
      this.state;
    const { searchImages, toggleModal, showModal, handleLoadMore } = this;
    return (
      <AppStyled>
        <Searchbar onSubmit={searchImages} />
        {isLoading && <Loader />}
        {/* {error && <Error error={error} />} */}
        {isShowModal && (
          <Modal imgURL={largeURL} toggleModal={toggleModal} alt={alt} />
        )}
        <ImageGallery gallery={gallery} showModal={showModal} />
        {isShowBtn && <LoadMoreButton loadMore={handleLoadMore} />}
      </AppStyled>
    );
  }
}
