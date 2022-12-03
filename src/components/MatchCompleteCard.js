import { Link } from "react-router-dom";
import styles from "./MatchCompleteCard.module.css";

const MatchCompleteCard = ({ match, highlightedTeam, latestMatch }) => {
  const highlightedTeamIsHomeTeam = highlightedTeam === match.homeTeam;
  const opponentTeam = highlightedTeamIsHomeTeam
    ? match.awayTeam
    : match.homeTeam;
  const result = () => {
    if (match.homeGoals === match.awayGoals) {
      return "draw";
    }
    if (
      (highlightedTeamIsHomeTeam && match.homeGoals > match.awayGoals) ||
      (!highlightedTeamIsHomeTeam && match.awayGoals > match.homeGoals)
    ) {
      return "win";
    }
    return "loss";
  };

  return (
    <div
      className={`${styles.layout} ${
        result() === "win"
          ? styles.winCard
          : result() === "draw"
          ? styles.drawCard
          : styles.lossCard
      }`}
    >
      <div className={styles.additionalDetails}>
        {latestMatch ? <h1>Latest Match</h1> : null}
        <div>
          <h4>Date: {match.date}</h4>
          <h4>Referee: {match.referee}</h4>
        </div>
      </div>

      <div className={styles.matchResult}>
        <h4>{highlightedTeamIsHomeTeam ? "Home" : "Away"}</h4>
        <h1>
          {highlightedTeamIsHomeTeam ? match.homeGoals : match.awayGoals}
          &nbsp; : &nbsp;
          {highlightedTeamIsHomeTeam ? match.awayGoals : match.homeGoals}
        </h1>
      </div>

      <div className={styles.vsTeamContainer}>
        <h3>Vs.&nbsp;</h3>
        <h2>
          <Link to={`/teams/${opponentTeam}`}> {opponentTeam}</Link>
        </h2>
      </div>
    </div>
  );
};

export default MatchCompleteCard;
