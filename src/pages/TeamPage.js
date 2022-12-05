import { useEffect, useState } from "react";
import { useParams,  Link } from "react-router-dom";

import MatchCompleteCard from "../components/MatchCompleteCard";
import MatchBriefCard from "../components/MatchBriefCard";
import styles from "./TeamPage.module.css";
import MyPieChart from "../components/MyPieChart";

const TeamPage = () => {
  const [team, setTeam] = useState(null);
  let { teamTitle } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/teams/${teamTitle}`)
      .then((response) => response.json())
      .then((data) => setTeam(data));
  }, [team]);

  if (!team) return null;

  return (
    <div className={styles.layout}>
      <div className={styles.innerContainer}>
        <div className={styles.teamTitle}>
          <h1>{team.title}</h1>
        </div>

        <div className={styles.pieCharts}>
          <MyPieChart
            wins={team.homeWins}
            draws={team.homeDraws}
            losses={team.homeLosses}
          />
          Total Home Stats
        </div>
        <div className={styles.pieCharts}>
          <MyPieChart
            wins={team.awayWins}
            draws={team.awayDraws}
            losses={team.awayLosses}
          />
          Total Away Stats
        </div>

        <div className={`${styles.matchCompleteCard} ${styles.drawCard}`}>
          <MatchCompleteCard
            match={team.latestMatches[0]}
            highlightedTeam={team.title}
            latestMatch={true}
          />
        </div>

        {team.latestMatches.slice(1).map((match) => (
          <MatchBriefCard
            match={match}
            highlightedTeam={team.title}
            key={match.id}
          />
        ))}
        <div>
          <h3>
            <Link to={"matches"}> more {">"}</Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
