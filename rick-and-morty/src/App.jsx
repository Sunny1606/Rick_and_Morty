import Cards from "./components/Cards/Cards.jsx";
import { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav.jsx";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "./components/Form/form.jsx";
import Details from "./components/Details/detail.jsx";
import About from "./components/About/about.jsx";
import PATHROUTES from "./components/Helpers/pathRouters.js";


function App() {
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const EMAIL = "";
  const PASSWORD = "";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const { pathname } = useLocation();

  const [characters, setCharacters] = useState([]);

  function handleSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters([...characters, data]);
        } else {
          window.alert("No hay personajes con este ID");
        }
      }
    );
  }

  const hndleOnClose = (id) => {
    const filtro = characters.filter((ch) => ch.id !== Number(id));
    setCharacters(filtro);
  };

  return (
    <div>
      <div>
        {pathname !== "/" && <Nav onSearch={handleSearch} />}
        <Routes>
          <Route path={PATHROUTES.LOGIN} element={<Form login={login}/>} />
          <Route path={PATHROUTES.HOME} element={<Cards characters={characters} onClose={hndleOnClose}/>}/>
          <Route path={PATHROUTES.ABOUT} element={<About/>}/>
          <Route path={PATHROUTES.DETAIL} element={<Details/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
