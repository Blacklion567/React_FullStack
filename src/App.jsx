
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './components/Home';
import Posts from './components/Posts';
import Profile from './components/Profiles';
import PostItem from './components/PostItem';
import Header from './components/Header';
import Life from './components/Lifecyles';
import User from './components/User';
import Conditional from './components/Conditional';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <div className=' px-5 py-3'>
          <Routes>
            <Route path='/Posts/:id' element={<PostItem />}></Route>
            <Route path='/Posts' element={<Posts />}></Route>
            <Route path='/Profile' element={<Profile />}></Route>
            <Route path='/' exact element={<Home />}></Route>

            <Route path='/Life' element={<Life />}></Route>
            <Route path='/User' element={<User />}></Route>
            <Route path='/Conditional' exact element={<Conditional />}></Route>

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
