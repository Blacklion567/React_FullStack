import { useEffect } from "react";

const Posts = ({ item }) => {

  useEffect(() => {
    console.log('Post Created');

    return () => {
      console.log('Post Destroyed');
    };

  }, []);
  return (
    <div>
      <div>Name: {item.name}</div>
      <div>Age: {item.body}</div>
      <hr />
    </div>
  );
};

export default Posts;
