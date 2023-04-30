import React, { useRef } from "react";
import { useDispatch} from "react-redux";
import { setpokeApy } from "../Store/slices/pokeApy.slice";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const inputName = useRef();
  const disoatch = useDispatch();
  const navigate = useNavigate()
  const handelsubmit = (e) => {
    e.preventDefault();
    disoatch(setpokeApy(inputName.current.value.trim()));
    navigate("./location")
  };
  return (
    <div>
      <h1>Hola, por favor ingresa tu nombre aqui</h1>
      <form onSubmit={handelsubmit} action="">
        <input ref={inputName} type="text" />
        <button>ingresa</button>
      </form>
    </div>
  );
};

export default Home;
