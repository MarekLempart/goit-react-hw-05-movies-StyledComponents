import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  SectionTitle,
  StyledLink,
  StyledSection,
} from './MovieList.styled'; // додаємо стилі

const MovieList = ({ trendingMovies }) => {
  return (
    <StyledSection>
      <SectionTitle>Trending today</SectionTitle>

      <List>
        {trendingMovies.map(trendingMovie => (
          <ListItem key={trendingMovie.id}>
            <StyledLink to={`/movies/${trendingMovie.id}`}>
              {trendingMovie.title}
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </StyledSection>
  );
};

export default MovieList;

MovieList.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    })
  ).isRequired,
};
