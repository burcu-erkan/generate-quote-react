const Author = ({ author }) => {
  return <> {author ? <h3 className="author">- {author}</h3> : ""}</>;
};
export default Author;
