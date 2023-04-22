// Write your code here

import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccineAgeData} = props
  return (
    <div className="graph-container">
      <h1 className="vaccination-heading">Vaccination by age</h1>
      <PieChart width={1000} height={300}>
          <Pie
            cx="50%"
            cy="50%"
            data={vaccineAgeData}
            startAngle={0}
            endAngle={360}
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="18-44" fill="#2d87bb" />
            <Cell name="44-60" fill="  #a3df9f" />
            <Cell name="Above60" fill=" #64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
          />
        </PieChart>
     
    </div>
  )
}

export default VaccinationByAge
