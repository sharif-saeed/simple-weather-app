import "./App.css";

export default function App() {

  return (
    <div className="app">
      <h1>Saeed Weather App ⛅</h1>

      <div className="search-bar">
        <form>
          <input
            type="text"
            placeholder="Enter city..."
          />
          <button type="submit">Search</button>
        </form>
      </div>

    </div>
  );
};