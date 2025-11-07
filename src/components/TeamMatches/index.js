// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatch: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const latestMatch = this.camelCaseMatch(data.latest_match_details)
    const recentMatches = data.recent_matches.map(this.camelCaseMatch)

    this.setState({
      teamBannerUrl: data.team_banner_url,
      latestMatch,
      recentMatches,
      isLoading: false,
    })
  }

  camelCaseMatch = match => ({
    id: match.id,
    date: match.date,
    venue: match.venue,
    result: match.result,
    umpires: match.umpires,
    manOfTheMatch: match.man_of_the_match,
    competingTeam: match.competing_team,
    competingTeamLogo: match.competing_team_logo,
    firstInnings: match.first_innings,
    secondInnings: match.second_innings,
    matchStatus: match.match_status,
  })

  render() {
    const {teamBannerUrl, latestMatch, recentMatches, isLoading} = this.state

    return isLoading ? (
      <div testid="loader" className="loader-container">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="team-matches-container">
        <img src={teamBannerUrl} alt="team banner" className="team-banner" />
        <h1 className="section-title">Latest Matches</h1>
        <LatestMatch match={latestMatch} />
        <ul className="recent-matches">
          {recentMatches.map(match => (
            <MatchCard key={match.id} match={match} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
