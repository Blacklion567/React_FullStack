import { useState, useEffect } from "react";
import Posts from "./posts";
const Hooks = ({ initialCount }) => {

  const [state, setState] = useState({
    count: initialCount,
    user: 'Blacklion567'
  });

  let [posts, setPosts] = useState([
    {
      name: 'Blacklion567',
      body: 'My body is 21'
    },
    {
      name: 'Chrisimos',
      body: 'My body is 20'
    },
  ]);

  const Decrement = () => {
    setState({
      ...state,
      count: state.count - 1
    });
  };

  const removePosts = () => {
    setPosts([]);
  };


  const addOnePost = () => {
    let newPost = {
      name: 'Chrisimos',
      body: 'My body is 20'
    };
    setPosts([
      ...posts,
      newPost
    ]);
  };

  useEffect(() => {
    //console.log('Change of State');
  }, [state]);

  useEffect(() => {
    //console.log('Change of Posts');
  }, [posts]);

  useEffect(() => {
    //console.log('Mounted');
  }, []);



  return (
    <>
      <h1>{state.user}</h1>
      <h3>Count: {state.count}</h3>
      <button onClick={() => setState({
        ...state,
        count: state.count + 1
      })}>ADD One +1</button>
      <button onClick={Decrement}>MINUS One -1</button>
      <button onClick={removePosts}>Remove Posts</button>


      <hr />
      {posts.map((item, index) => (
        <Posts item={item} key={index} />

      ))}

      <button onClick={addOnePost}>
        Add on more
      </button>
    </>

  );
};

export default Hooks;
