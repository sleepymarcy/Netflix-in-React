  import './App.css'
import CustomNavbar from './components/Navbar'
import Header from './components/Header'
import RowOfMovies from './components/RowOfMovies'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ShowDetail from './components/ShowDetail'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Header />
      <Route path="/" exact render={(routerProps) => <RowOfMovies {...routerProps} title="Star Wars" />} />
      <Route path="/" exact render={(routerProps) => <RowOfMovies {...routerProps} title="Harry Potter" />} />
      <Route path="/" exact render={(routerProps) => <RowOfMovies {...routerProps} title="Lord Of The Rings" />} />
      <Route path="/details/:movieID" render={(routerProps) => <ShowDetail {...routerProps} title="hello" />} />
      <Footer></Footer>
    </Router>
  )
}

export default App

// Create a Route for a ShowDetail component. It should be able to receive a ID parameter from the querystring.

// Create the ShowDetail component that receives from the url the ID parameter and fetches all the informations
// about the movie (from omdb & comments too).

// Make every Show (Movie or Series) clickable and create an onClick redirect to the ShowDetail route.

// From the main component pass also a prop called 'title' to every other component wrapped inside a Route,
// and use it for displaying inside of it the title of that section (in an "h1").