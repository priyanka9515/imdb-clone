import React, { Component } from "react";
import faker from "faker";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import StarRatingComponent from "react-star-rating-component";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import "./Movies.css";
import { Redirect } from "react-router-dom";

const movies = [];
for (let i = 0; i < 30; i++) {
  movies.push({
    id: i,
    image: faker.image.image(150, 200, true),
    movie: faker.lorem.word(),
    year: faker.random.number({ min: 1995, max: 2020 }),
    price: faker.random.number({ min: 150, max: 500 }),
    description: faker.lorem.sentence(),
    director: faker.name.findName(),
    rating: 0
  });
}

const styles = theme => ({
  card: {
    display: "flex",
    width: "400px",
    height: "200px"
  },
  data: {
    display: "flex",
    flexDirection: "row",
    alignContent: "flex-end"
  },

  cover: {
    width: "180px"
  }
});

class movieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      redirect: true
    };
    // this.state = {
    //   rating: 1
    // };
  }

  onStarClick(nextValue, index) {
    this.setState({ rating: nextValue });
  }

  render() {
    const { classes } = this.props;
    const { rating } = this.state;
    const { redirect } = this.state;
    if (redirect) {
      return (
        <Redirect to={{ pathname: "/signin", state: { from: "/movies" } }} />
      );
    }
    return (
      <div className="movies">
        {movies.map((object, index) => {
          console.log(this.state);
          return (
            <Card className={classes.card}>
              <CardMedia
                className={classes.cover}
                image={object.image}
                title={object.movie + object.year}
              />
              <div className={classes.data}>
                <CardContent>
                  <Typography component="h6" variant="h6">
                    {object.movie}({object.year})
                  </Typography>
                  <Typography>Price:Rs.{object.price}/-</Typography>
                  <Typography>Rating:</Typography>
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                  />
                  {rating}/5
                  <Typography
                    color="textSecondary"
                    style={{ fontSize: "12px" }}
                  >
                    {object.description}
                  </Typography>
                  <p style={{ fontSize: "12px" }}>
                    Director: {object.director}
                  </p>
                </CardContent>
              </div>
            </Card>
          );
        })}
      </div>
    );
  }
}

movieList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(movieList);
