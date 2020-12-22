import react from "react";

function Layout(props) {
  return (
    <>
      <div className="Layout">
        <h1>POKEDEX</h1>
        {props.children}
      </div>
    </>
  );
}

export default Layout;
