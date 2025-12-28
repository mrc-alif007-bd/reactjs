
import { BrowserRouter as Router, Routes,Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import BlogEntry from './pages/BlogEntry';
import BlogEntry1 from './pages/BlogEntry1';
function App() {
    return (
        <Router>
           
           {/*NavBar will added*/ }
            <NavBar/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path='/blog/new' element={<BlogEntry/>}/>  
                    <Route path='/blog/new1' element={<BlogEntry1/>}/>   
                </Routes>
            </div>
            <Footer/>
        </Router>
        
    );
}



export default App;