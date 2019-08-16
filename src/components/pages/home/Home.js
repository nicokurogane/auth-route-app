import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../../actions/moviesdb/actions';
import Layout from '../../layout/Layout';

import './home.scss';

class ConnectedHome extends React.Component {
  render() {
    return (
      <div className="home-container">
        <Layout history={this.props.history}>
          <div className="lastest-movies">Lastest movies</div>
          <div className="movies-list-container">
            {this.props.movies.map(movie => {
              return (
                <div className="movie" key={movie.id}>
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                      alt="movie"
                      className="poster"
                    />
                  </div>
                  <div className="info-overlay"></div>
                  <div className="text-overlay">{movie.title}</div>
                </div>
              );
            })}
          </div>
        </Layout>
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
