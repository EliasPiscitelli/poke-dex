import react from 'react';


const Loading = () => {
  const LoadingGif = 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'
  return (
    <div style={{
          display: "flex",
          alignContent: "top",
          justifyContent: "center",
          width: "100%",
          position: "absolute"
    }}>
      <img style={{width: "40%"}} src={LoadingGif} alt="loading" />
      </div>
  )
}

export default Loading;