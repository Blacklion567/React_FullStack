
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './components/Home';
import Posts from './components/Posts';
import Profile from './components/Profiles';
import PostItem from './components/PostItem';
import Header from './components/Header';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className=' px-5 py-3'>
          <Routes>
            <Route path='/Posts/:id' element={<PostItem />}>PostItem</Route>
            <Route path='/Posts' element={<Posts />}></Route>
            <Route path='/Profile' element={<Profile />}></Route>
            <Route path='/' exact element={<Home />}></Route>
            <Route render={() => (
              <h3>Page not found</h3>
            )} />
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
export default App;
