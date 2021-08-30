import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import Gallerie from './components/Gallerie'
import MyFooter from './components/MyFooter'


function App() {
  return (
    <div className="body">
      <MyNavbar />
      <div className="break"></div>
      <MyFooter />
    </div>

  )
}

export default App