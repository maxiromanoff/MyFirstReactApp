import './App.css';

function App() {
  return (
    <div className="bgImage">
      <div className='App-display-topleft'>Logo</div>
      <div className="App-display-middle">
        <h1 className='App-title'>COMING SOON</h1>
        <hr className="Border-line" />
        <p className="App-description">35 days left</p>
      </div>
      <div className='App-display-bottomleft App-link'>
        Created by
        <a className='App-link' href="https://titach24.blogspot.com/" target="_blank" rel="noopener noreferrer" >
          Maxiromanoff
        </a>
      </div>
    </div>
  );
}

export default App;