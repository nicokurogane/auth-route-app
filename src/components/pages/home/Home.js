import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../../actions/moviesdb/actions';
import Layout from '../../layout/Layout';

class ConnectedHome extends React.Component {
  render() {
    console.log(this.props.movies);
    return (
      <div className="home-container">
        <Layout>
          <span>aqui va algo chivo</span>
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
