import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { MovieState } from "../moviestate";
import { useState, useEffect } from "react";

const MovieDetail = () => {
  const Navigate = useLocation();
  const url = Navigate.pathname;
  const [movies, SetmMovies] = useState(MovieState);
  const [movie, SetMovie] = useState(null);

  //Effect//
  useEffect(() => {
    const currentMovie = movies.filter((StateMovie) => StateMovie.url === url);
    SetMovie(currentMovie[0]);
  }, [movies, url]);
  console.log(movie);
  return (
    <>
      {movie && (
        <Details>
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImage} alt="movie" />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
        </Details>
      )}
    </>
  );
};

const Details = styled.div`
  color: white;
`;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%. -10%);
  }
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;
const AwardsStyle = styled.div`
  padding: 5rem;
  h2 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

//Awards
const Award = ({ title, description }) => {
  return (
    <AwardsStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardsStyle>
  );
};

export default MovieDetail;
