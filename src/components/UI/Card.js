import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

// props.children will have the inclossing content of the Cards component where-ever used

export default Card;
