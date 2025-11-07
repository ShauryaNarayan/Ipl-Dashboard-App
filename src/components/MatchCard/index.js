// Write your code here
const MatchCard = props => {
  const {match} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = match

  const statusClass = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="team-match-logo"
      />
      <p className="team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`status ${statusClass}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
