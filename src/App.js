import Navbar from './Navbar';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import NewBlog from './NewBlog';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

const App = () => {
  

  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/newblog' element={<NewBlog />}/>
          <Route path='/blog/:id' element={<BlogDetails  />}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
