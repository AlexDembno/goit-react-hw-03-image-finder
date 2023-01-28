import { Component } from 'react';
import axios from 'axios';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
// import styles from './ImageSearch.module.css';

const KEY = '31934328-4f49ab69ab8cdfa2acbd8f5df';
axios.defaults.baseURL = `https://pixabay.com/api/`;
class ImageSearch extends Component {
  state = {
    search: '',
    page: 1,
    articles: [],
    loading: false,
    error: null,
  };

  searchImages = ({ search }) => {
    console.log(search);
    this.setState({ search });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      try {
        this.setState({ loading: true });
        const response = await axios.get(
          `?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        const data = response.data.hits;
        console.log(data);

        this.setState({ articles: response.data.hits });

        // this.setState(({ articles }) => ({ articles: articles + data }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  loadMore = () => {
    console.log('hello');
    console.log(this.state);
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { loading, articles } = this.state;
    return (
      <>
        <Searchbar searchImages={this.searchImages} />
        {loading && <Loader />}
        <ImageGallery items={this.state.articles} />
        {articles.length && <Button loadMore={this.loadMore} />}
      </>
    );
  }
}

export default ImageSearch;
