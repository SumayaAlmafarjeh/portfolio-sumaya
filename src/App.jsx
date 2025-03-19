import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Header from "./Header"
import MainPage from "./MainPage"
import About from "./About"
import Contact from "./Contact"
import MyWork from './MyWork'

function App() {
    return (

        <>
            <Router>
                <Header />
                <Routes>
                    <Route index element={<MainPage />} />
                    <Route path='About' element={<About/>} />
                    <Route path='Contact' element={<Contact/>} />
                    <Route path='MyWork' element={<MyWork/>} />                   
                </Routes>
            </Router>



        </>

    )

}

export default App
