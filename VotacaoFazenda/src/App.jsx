import './App.css'
import Home from "./pages/Home";
import Header from "./components/Header"

export default function App() {
  return <>
  <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/votacao" element={<Votacao />} />
      <Route path="/resultado" element={<Resultado />} />
    </Routes>
  </BrowserRouter>
     
   </>
}