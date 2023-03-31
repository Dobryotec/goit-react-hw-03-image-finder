import { Component } from 'react';
import { fetchImages } from '../services/fetch';
import Searchbar from 'components/Searchbar/Searchbar';
import Modal from 'components/Modal/Modal';
import css from './App.module.css';

import ImageGallery from 'components/ImageGallery/ImageGallery';
import LoadMoreButton from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
class App extends Component {
  state = {
    searchText: '',
    images: [],
    page: 1,
    isLoading: false,
    isShowModal: false,
    largeImageURL: '',
    showBtn: true,
  };

  componentDidUpdate(prevProps, prevState) {
    const searchText = this.state.searchText.trim();

    if (
      prevState.searchText !== searchText ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages(searchText);
    }
  }

  fetchImages = searchText => {
    const { page } = this.state;
    this.setState({ isLoading: true });
    try {
      fetchImages(searchText, page)
        .then(({ hits }) =>
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            showBtn: hits.length >= 12,
          }))
        )
        .catch(error => {
          console.error('Error fetching images:', error);
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  createSearchText = searchText => {
    this.setState({ searchText, images: [], page: 1 });
  };

  showModal = image => {
    this.setState({ isShowModal: true, largeImageURL: image });
  };
  hideModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    const { images, isLoading, isShowModal, showBtn } = this.state;
    return (
      <div className={css.app}>
        <Searchbar createSearchText={this.createSearchText} />
        <ImageGallery images={images} showModal={this.showModal} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && showBtn && (
          <LoadMoreButton onClick={this.handleLoadMore} />
        )}
        {isShowModal && (
          <Modal
            hideModal={this.hideModal}
            largeImageURL={this.state.largeImageURL}
          />
        )}
      </div>
    );
  }
}

export default App;
