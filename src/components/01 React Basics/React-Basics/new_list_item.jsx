const NewsItem = ({ item }) => {
  return (
    <div className="NewsItem">
      <h4>{item.tittle}</h4>
      <h3>{item.feed}</h3>
    </div>
  );
};

export default NewsItem;
