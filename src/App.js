import TeamPage from "./pages/TeamPage";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import MatchesPages from "./pages/MatchesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/teams/:teamTitle/matches" element={<MatchesPages />} />
        <Route path="/teams/:teamTitle" element={<TeamPage />} />
      </Routes>
    </Router>
  );
}

export default App;
