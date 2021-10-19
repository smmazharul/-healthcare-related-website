import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
// import Doctors from './Pages/Doctors';
import Service from './Pages/Service';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ContactUs from './Pages/ContactUs';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';
import AuthProvider from './Contexts/AuthProvider';
import Footer from './components/Footer/Footer';
import Details from './components/Details/Details/Details';
import PrivateRoute from './Route/PrivateRoute';



function App() {
  return (
    <div>
      <AuthProvider>
              <Router>
              <Header></Header>
                <Switch>
                  <Route exact path='/'>
                    <Home></Home>
                  </Route>
                  <Route  path='/home'>
                    <Home></Home>
                  </Route>
                  <Route path='/about'>
                    <AboutUs></AboutUs>
                  </Route>
                  <Route exact path="/service">
                    <Service></Service>
                  </Route>
                  <Route path="/service/:Id">
                    <Details></Details>
                  </Route>
                  <Route path='/contact'>
                    <ContactUs></ContactUs>
                  </Route>
                  <PrivateRoute path='/cart'>
                    <Cart></Cart>
                  </PrivateRoute>
                  <Route path='/login'>
                    <Login></Login>
                  </Route>
                  <Route path='/signup'>
                    <Signup></Signup>
                  </Route>
                  <Route path='*'>
                    <NotFound></NotFound>
                  </Route>
                </Switch>
                <Footer></Footer>
              </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
