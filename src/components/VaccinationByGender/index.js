// Write your code here
import {PieChart, Pie, Cell, Legend, ResponsiveContainer} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {vaccinationDataByGender} = props

  return (
    <div className="graph-container">
      <h1 className="vaccination-heading">Vaccination by gender</h1>
      
        <PieChart width="100%" height={300}>
          <Pie
            data={vaccinationDataByGender}
            cx="50%"
            cy="50%"
            outerRadius="70%"
            innerRadius="40%"
            startAngle={180}
            endAngle={0}
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend
            iconType="circle"
            align="center"
            layout="horizontal"
            verticalAlign="bottom"
          />
        </PieChart>
     
    </div>
  )
}

export default VaccinationByGender
