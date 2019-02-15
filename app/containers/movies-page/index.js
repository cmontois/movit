// @flow
import { connect } from 'react-redux';
import MoviesPage from '../../components/movies-page';
import { searchMovies } from '../../actions';

const mapStateToProps = ({ movies: { movies, loading } }) => ({
  movies,
  loading,
})

const mapDispatchToProps = dispatch => ({
  searchMovies: query => dispatch(searchMovies(query)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage)
