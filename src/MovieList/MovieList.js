import React, { Component } from "react";
import MovieCard from "../MovieCard/MovieCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MoviesApi = [
  {
    title: "Devil's Mile",
    rate: 4,

    imgUrl:
      "https://i.pinimg.com/originals/4d/ea/be/4deabeb03554cacdba17995886789005.jpg",
    description:
      "A relentlessly-paced hybrid of gritty crime thriller and Lovecraftian supernatural horror, The Devil's Mile follows a trio of kidnappers who take an ill-advised detour en route to deliver...",
  },
  {
    title: "Once Upon A Time In The west",
    rate: 5,

    imgUrl:
      "https://static.cinemagia.ro/img/db/movie/00/69/88/once-upon-a-time-in-the-west-549264l.jpg",
    description:
      "A mysterious stranger with a harmonica joins forces with a notorious desperado to protect a beautiful widow from a ruthless assassin working for the railroad.",
  },
  {
    title: "Devil's Mile",
    rate: 4,

    imgUrl:
      "https://i.pinimg.com/originals/4d/ea/be/4deabeb03554cacdba17995886789005.jpg",
    description:
      "A relentlessly-paced hybrid of gritty crime thriller and Lovecraftian supernatural horror, The Devil's Mile follows a trio of kidnappers who take an ill-advised detour en route to deliver...",
  },
  {
    title: "Devil's Mile",
    rate: 4,

    imgUrl:
      "https://i.pinimg.com/originals/4d/ea/be/4deabeb03554cacdba17995886789005.jpg",
    description:
      "A relentlessly-paced hybrid of gritty crime thriller and Lovecraftian supernatural horror, The Devil's Mile follows a trio of kidnappers who take an ill-advised detour en route to deliver...",
  },
  {
    title: "Devil's Mile",
    rate: 4,

    imgUrl:
      "https://i.pinimg.com/originals/4d/ea/be/4deabeb03554cacdba17995886789005.jpg",
    description:
      "A relentlessly-paced hybrid of gritty crime thriller and Lovecraftian supernatural horror, The Devil's Mile follows a trio of kidnappers who take an ill-advised detour en route to deliver...",
  },
  {
    title: "Devil's Mile",
    rate: 4,

    imgUrl:
      "https://i.pinimg.com/originals/4d/ea/be/4deabeb03554cacdba17995886789005.jpg",
    description:
      "A relentlessly-paced hybrid of gritty crime thriller and Lovecraftian supernatural horror, The Devil's Mile follows a trio of kidnappers who take an ill-advised detour en route to deliver...",
  },
  {
    title: "Devil's Mile",
    rate: 4,

    imgUrl:
      "https://i.pinimg.com/originals/4d/ea/be/4deabeb03554cacdba17995886789005.jpg",
    description:
      "A relentlessly-paced hybrid of gritty crime thriller and Lovecraftian supernatural horror, The Devil's Mile follows a trio of kidnappers who take an ill-advised detour en route to deliver...",
  },
  {
    title: "Devil's Mile",
    rate: 4,

    imgUrl:
      "https://i.pinimg.com/originals/4d/ea/be/4deabeb03554cacdba17995886789005.jpg",
    description:
      "A relentlessly-paced hybrid of gritty crime thriller and Lovecraftian supernatural horror, The Devil's Mile follows a trio of kidnappers who take an ill-advised detour en route to deliver...",
  },
  {
    title: "Devil's Mile",
    rate: 4,

    imgUrl:
      "https://i.pinimg.com/originals/4d/ea/be/4deabeb03554cacdba17995886789005.jpg",
    description:
      "A relentlessly-paced hybrid of gritty crime thriller and Lovecraftian supernatural horror, The Devil's Mile follows a trio of kidnappers who take an ill-advised detour en route to deliver...",
  },
  {
    title: "Devil's Mile",
    rate: 4,

    imgUrl:
      "https://i.pinimg.com/originals/4d/ea/be/4deabeb03554cacdba17995886789005.jpg",
    description:
      "A relentlessly-paced hybrid of gritty crime thriller and Lovecraftian supernatural horror, The Devil's Mile follows a trio of kidnappers who take an ill-advised detour en route to deliver...",
  },
];

class MovieList extends Component {
  render() {
    return (
      <Row>
        {MoviesApi.map((film) => (
          <Col>
            <MovieCard
              title={film.title}
              rate={film.rate}
              imgUrl={film.imgUrl}
              description={film.description}
            />
          </Col>
        ))}
      </Row>
    );
  }
}
export default MovieList;
