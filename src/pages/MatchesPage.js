import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MatchCompleteCard from "../components/MatchCompleteCard";
import styles from "./MatchesPage.module.css";

const MatchesPages = () => {
  const [matches, setMatches] = useState([]);
  let { teamTitle } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/teams/${teamTitle}/matches`)
      .then((res) => res.json())
      .then((data) => setMatches(data));
  }, [matches]);

  return (
    <div className={styles.layout}>
      <h1>{teamTitle} Matches</h1>
      {matches.map((match) => (
        <MatchCompleteCard
          match={match}
          highlightedTeam={teamTitle}
          key={match.id}
        />
      ))}
    </div>
  );
};

export default MatchesPages;
