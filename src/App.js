import "./App.scss";
import { Route, Routes } from "react-router-dom";

import EntryList from "./components/EntryList";
import Header from "./components/Header";
import NewEntry from "./components/NewEntry";
import Navbar from "./components/sideNav/Navbar";
import TrackerInfo from "./components/navPages/TrackerInfo";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <NewEntry />
              <EntryList />
            </>
          }
        />
        <Route path="/TrackerInfo" element={<TrackerInfo />} />
      </Routes>
    </div>
  );
};

export default App;
