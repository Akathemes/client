import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualifications from './components/qualifications/Qualifications';
import Works from './components/works/Works';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

// function App() {

//     const [backendData, setBackendData] = useState([{}])
    
//     useEffect(() =>{
//         fetch("/api").then(
//             response => response.json()
//         ).then(
//             data => {
//                 setBackendData(data)
//             }
//         )
//     }, [])
//   return (
//     <div>
        
//         {(typeof backendData.users === 'undefined') ? (
//              <p>Loading...</p>
//         ): (
//             backendData.users.map((user,i) => (
//                 <p key={i}>{user}</p>
//             ))
//         )}
//     </div>
//   )
// }
const App = () => {
    return (
        <>
        <Header/>
        <main className='main'>
            <Home />
            <About />
            <Skills />
            <Services />
            <Qualifications />
            <Works />
            <Contacts />
            <Footer />
            <ScrollUp />
        </main>
        </>
    )
}

export default App