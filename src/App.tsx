import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import "./styles/index.css";
import Layout from "./components/Layout";
import Journal from "./components/Journal/Journal";
import Progress from "./components/Progress";
import Challanges from "./components/Challanges";
import Settings from "./components/Settings";
import { HabitProvider } from "./components/context/habitContext";

function App() {
  return (
    <HabitProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Journal />} />
          <Route path="progress" element={<Progress />} />
          <Route path="challanges" element={<Challanges />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </HabitProvider>
  );
}

export default App;
