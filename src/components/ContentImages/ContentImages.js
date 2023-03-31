import { fetchImages } from '../services/fetch';
import { Component } from 'react';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import LoadMoreButton from 'components/Button/Button';
import Loader from 'components/Loader/Loader';

class ContentImages extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
    error: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const searchText = this.props.searchText.trim();

    if (prevProps.searchText !== searchText && searchText) {
      this.setState({ images: [], page: 1, isLoading: true }, () => {
        this.fetchImages(searchText);
      });
    }
    if (prevState.page !== this.state.page) {
      this.fetchImages(searchText);
    }
  }

  fetchImages = searchText => {
    const { page } = this.state;
    this.setState({ isLoading: true });
    fetchImages(searchText, page)
      .then(({ hits }) =>
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
        }))
      )
      .catch(error => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1, isLoading: true }));
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <>
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        {images.length > 0 && <LoadMoreButton onClick={this.handleLoadMore} />}
      </>
    );
  }
}

export default ContentImages;
