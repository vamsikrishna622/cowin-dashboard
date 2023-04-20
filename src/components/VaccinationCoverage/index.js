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
      <ResponsiveContainer width="100%" height={500}>
        <BarChart width={1000} height={300} data={vaccineCoverageData}>
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
          <Bar dataKey="dose_1" name="Dose 1" fill="#5a8dee" barSize="20%" />
          <Bar dataKey="dose_2" name="Dose 2" fill="#F54394" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationCoverage