import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Legend,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {vaccineCoverageData} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="graph-container">
      <h1 className="vaccination-heading">Vaccination Coverage</h1>
      
        <BarChart width={9000} height={400} data={vaccineCoverageData}>
          <XAxis
            dataKey="vaccine_date"
            tick={{stroke: '#6c757d', strokeWidth: 1}}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: '#6c757d',
              strokeWidth: 0,
            }}
          />
          <Legend wrapperStyle={{padding: 30}} />
          <Bar dataKey="dose_1" name="Dose 1" radius={[10, 10, 0, 0]} fill="#5a8dee" barSize="20%" />
          <Bar dataKey="dose_2" name="Dose 2" radius={[5, 5, 0, 0]} fill="#F54394" barSize="20%" />
        </BarChart>
      
    </div>
  )
}

export default VaccinationCoverage
