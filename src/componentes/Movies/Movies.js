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
    rate: 0
  });
}

const styles = theme => ({
  card: {
    height: "200px",
    width: "300px",
    display: "flex"
  },
  data: {
    display: "flex",
    flexDirection: "column",
    alignContent: "flex-end"
  },
  content: {
    flex: "1 0"
  },
  cover: {
    width: "120px"
  }
});

class movieList extends React.Component {
  constructor() {
    super();

    // state = { expanded: false };

    this.state = {
      rating: 1
    };
  }
  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  render() {
    const { classes, rating } = this.props;

    return (
      <div className="movies">
        {movies.map((object, index) => {
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
                  <h2> {object.rating}</h2>

                  {/* <h2>{object.rate}/5</h2> */}
                  <Typography
                    variant="subtitle1"
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
// export default movie;
