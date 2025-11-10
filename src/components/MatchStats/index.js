import {PieChart, Pie, Cell, Tooltip, Legend} from 'recharts'
import './index.css'

const COLORS = ['#00C49F', '#FF8042', '#8884D8']

const MatchStats = ({recentMatches = []}) => {
  console.log(recentMatches)
  const wins = recentMatches.filter(m => m.matchStatus === 'Won').length
  const losses = recentMatches.filter(m => m.matchStatus === 'Lost').length
  const draws = recentMatches.length - wins - losses

  const data = [
    {name: 'Won', value: wins},
    {name: 'Lost', value: losses},
    {name: 'Drawn', value: draws},
  ]

  return (
    <div className="match-stats-container">
      <h2 className="match-stats-heading">Match Statistics</h2>
      {recentMatches.length > 0 && (
        <PieChart width="100%" height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      )}
    </div>
  )
}

export default MatchStats
