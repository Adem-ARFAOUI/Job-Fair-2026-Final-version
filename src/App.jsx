import "./App.css";
import LoadingScreen from "./components/Loading-screen/Loading-screen.jsx";
import MainScreen from "./components/Main-screen/Main-screen.jsx";
import { useState } from "react";
function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <MainScreen />
      )}
      {/* <MainScreen /> */}
    </>
  );
}

export default App;
