import { Link } from "react-router-dom";
import styles from "./MatchBriefCard.module.css";

const MatchBriefCard = ({ match, highlightedTeam }) => {
  const highlightedTeamIsHomeTeam = highlightedTeam === match.homeTeam;
  const opponentTeam = highlightedTeamIsHomeTeam
    ? match.awayTeam
    : match.homeTeam;

  return (
    <div>
      <div className={styles.vsContainer}>
        <h4>Vs.&nbsp;</h4>
        <h3>
          <Link to={`/teams/${opponentTeam}`}> {opponentTeam}</Link>
        </h3>
      </div>
      <h4>{highlightedTeamIsHomeTeam ? "Home" : "Away"}</h4>
      <h4>
        {highlightedTeamIsHomeTeam ? match.homeGoals : match.awayGoals}
        &nbsp; : &nbsp;
        {highlightedTeamIsHomeTeam ? match.awayGoals : match.homeGoals}
      </h4>
    </div>
  );
};

export default MatchBriefCard;
