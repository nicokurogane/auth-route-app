import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../../actions/moviesdb/actions';
import Layout from '../../layout/Layout';

class ConnectedHome extends React.Component {
  render() {
    return (
      <div className="home-container">
        <Layout history={this.props.history}>
          <div>PELICULAS</div>
          <div>
            {this.props.movies.map(movie => {
              return (
                <div className="movie" key={movie.id}>
                  <span>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                      alt="movie"
                    />
                  </span>
                  <span>{movie.title}</span>
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
