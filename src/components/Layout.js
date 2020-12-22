import react from "react";
import Logo from '../assets/img/pokedexLogo.png';

function Layout(props) {
  return (
    <>
      <div className="Layout">
        <div id="logo">
        <img src={Logo} alt="POKEDEX"/>
        </div>
        {props.children}
      </div>
    </>
  );
}

export default Layout;
