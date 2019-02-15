// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import styles from './styles.scss';
import Input from '../ui/input';

type Props = {};

const InitialState = {
  inputQuery: ''
}

export default class Movies extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props)
    this.state = {
      ...InitialState
    }
  }

  getMoviesResult(inputValue) {
    this.setState({inputQuery: inputValue})

    const {
      loading,
      movies,
      searchMovies
    } = this.props;

    searchMovies({
      apiKey: '3dd02c8c133b521cdd43824583da2c2e',
      language: 'fr-FR',
      query: inputValue, 
    });

    //TODO call api at each input and so change state
  }

  render() {
    const {
      loading,
      movies,
    } = this.props;

    const {
      inputQuery,
    } = this.state;

    return (
      <div className={styles.container} data-tid="container">
        <div className={styles.backButton} data-tid="backButton">
          <Link to={routes.HOME}>
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>

        <div>
          <h3>Movies</h3>

          <Input
            placeholder="Search for your movie..."
            type="text"
            onChange={e => this.getMoviesResult(e.target.value)}
            value={inputQuery}
          />
        </div>

        <div className={styles.table}>
          {movies.map(movie => (
            <div className={styles.col} key={movie.id}>
              <img src={"https://image.tmdb.org/t/p/w200/" + movie.posterPath}/>
              <div key={movie.id}>{movie.title}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
