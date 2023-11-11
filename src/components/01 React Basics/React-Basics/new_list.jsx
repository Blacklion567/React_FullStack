import NewsItem from "./new_list_item";

const newList = (props) => {

  const news = props.news.map((item) => (
    <NewsItem item={item} key={item.id} name="s" age='20' />
  ));

  return (
    <>
      {news}
      {props.children}
    </>
  );
};

export default newList;
