import { Component } from 'react';
import axios from 'axios';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

const KEY = '31934328-4f49ab69ab8cdfa2acbd8f5df';
axios.defaults.baseURL = `https://pixabay.com/api/`;
class ImageSearch extends Component {
  state = {
    search: '',
    page: 1,
    articles: [],
    loading: false,
    error: null,
    perPage: 12,
    totalHits: '',
    showModal: false,
    largeImageURL: null,
    tags: null,
  };

  searchImages = ({ search }) => {
    this.setState({ search });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { search, page, perPage } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      try {
        this.setState({ loading: true });
        const response = await axios.get(
          `?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
        );
        this.setState({ totalHits: response.data.totalHits });
        this.setState({ articles: response.data.hits });
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  openModal = (largeImageURL, tags) => {
    this.setState({
      showModal: true,
      largeImageURL: largeImageURL,
      tags: tags,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      largeImageURL: null,
      tags: null,
    });
  };

  loadMore = () => {
    this.setState(({ page, perPage }) => ({
      page: page + 1,
      perPage: perPage * 2,
    }));
  };

  render() {
    const {
      loading,
      articles,
      page,
      totalHits,
      showModal,
      largeImageURL,
      tags,
    } = this.state;

    return (
      <>
        <Searchbar searchImages={this.searchImages} />
        {loading && <Loader />}
        <ImageGallery items={articles} openModal={this.openModal} />
        {page < Math.ceil(totalHits / 40) && (
          <Button loadMore={this.loadMore} />
        )}
        {showModal && (
          <Modal
            closeModal={this.closeModal}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        )}
      </>
    );
  }
}

export default ImageSearch;
