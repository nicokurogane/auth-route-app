import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../../actions/moviesdb/actions';

class ConnectedHome extends React.Component {
  render() {
    console.log(this.props.movies);
    return (
      <div className="home-container">
        <span>HOME PAGE</span>

        <div>
          {this.props.movies.length > 0
            ? 'si hay productos'
            : 'no hay productos'}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchMovies();
  }
}

const mapStateToProps = state => {
  return { movies: state.movies.list };
};

const Home = connect(
  mapStateToProps,
  { fetchMovies }
)(ConnectedHome);

export default Home;
