import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    vaccinationCoverageList: [],
    vaccinationByAgeList: [],
    vaccineDataByGenderList: [],
  }

  componentDidMount() {
    this.getVaccinationData()
  }

  getVaccinationData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const url = 'https://apis.ccbp.in/covid-vaccination-data'

    const response = await fetch(url)
    const data = await response.json()

    if (response.ok === true) {
      this.setState({
        vaccinationCoverageList: data.last_7_days_vaccination,
        vaccinationByAgeList: data.vaccination_by_age,
        vaccineDataByGenderList: data.vaccination_by_gender,
        apiStatus: apiStatusConstants.success,
      })
    }
    if (response.status === 401) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {
      vaccinationCoverageList,
      vaccinationByAgeList,
      vaccineDataByGenderList,
    } = this.state

    return (
      <>
        <VaccinationCoverage vaccineCoverageData={vaccinationCoverageList} />
        <VaccinationByGender
          vaccinationDataByGender={vaccineDataByGenderList}
        />
        <VaccinationByAge vaccineAgeData={vaccinationByAgeList} />
      </>
    )
  }

  renderFailureView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png "
        alt="failure view"
        className="failure-view-img"
      />
      <h1 className="failure-msg">Something went Wrong</h1>
    </>
  )

  renderLoaderView = () => (
    <div className="render-view-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" width={80} height={80} />
    </div>
  )

  renderVaccinationDetailsView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="website-logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
              className="website-logo"
            />
            <h1 className="website-name">Co-WIN</h1>
          </div>
          <h1 className="website-heading">CoWIN Vaccination in India</h1>
          {this.renderVaccinationDetailsView()}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
