// Write your code here
const LatestMatch = ({match}) => {
  const {
    date,
    venue,
    result,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = match

  return (
    <div className="latest-match">
      <div className="match-info">
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="competing-logo"
      />
      <div className="match-summary">
        <p>{firstInnings}</p>
        <p>{secondInnings}</p>
        <p>{manOfTheMatch}</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
