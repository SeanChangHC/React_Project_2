
import './App.css';

const App = () => {
  const name = 'Sean';
  const isNameShowing = false;
  return (
    <div className="App">
      <h1> Hello, {2+2}</h1>
      {
        name ? (
          <>
          <h1>{name}</h1>
          </>
        )
      :(
        <>
          <h1>hihi</h1>
          <h2>there there</h2>
        </>
      )}
    </div>
  );
}

export default App;
