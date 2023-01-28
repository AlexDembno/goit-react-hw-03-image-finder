import { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import axios from 'axios';
// import styles from './ImageSearch.module.css';
import ImageGallery from 'components/ImageGallery/ImageGallery';

const KEY = '31934328-4f49ab69ab8cdfa2acbd8f5df';
axios.defaults.baseURL = `https://pixabay.com/api/`;
class ImageSearch extends Component {
  state = {
    search: '',
    articles: [],
    error: null,
  };

  searchImages = ({ search }) => {
    console.log(search);
    this.setState({ search });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { search } = this.state;
    if (prevState.search !== search) {
      try {
        const response = await axios.get(
          `?q=${this.state.search}=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        console.log(response.data.hits);
        this.setState({ articles: response.data.hits });
      } catch (error) {
        this.setState({ error });
      }
    }
  }

  //   async componentDidMount() {
  //     try {
  //       const response = await axios.get(
  //         `?q=cat&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  //       );
  //       console.log(response.data.hits);
  //       this.setState({ articles: response.data.hits });
  //     } catch (error) {
  //       this.setState({ error });
  //     }
  //   }

  render() {
    return (
      <>
        <Searchbar searchImages={this.searchImages} />
        <ImageGallery items={this.state.articles} />
      </>
    );
  }
}

export default ImageSearch;
