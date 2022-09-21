// Write your JS code here
// Write your JS code here
// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted: false,
  }

  validateFirstname = () => {
    const {firstname} = this.state
    return firstname !== ''
  }

  validateLastname = () => {
    const {lastname} = this.state
    return lastname !== ''
  }

  onBlurFirstname = () => {
    const isValidFirstname = this.validateFirstname()
    this.setState({showFirstNameError: !isValidFirstname})
  }

  onBlurLastname = () => {
    const isValidLastname = this.validateLastname()
    this.setState({showLastNameError: !isValidLastname})
  }

  onChangeFirstname = event => {
    const {target} = event
    const {value} = target
    this.setState({firstname: value})
  }

  onChangeLastname = event => {
    const {target} = event
    const {value} = target
    this.setState({lastname: value})
  }

  renderLastnameField = () => {
    const {lastname, showLastNameError} = this.state
    const className = showLastNameError
      ? 'name-input-field error-field'
      : 'name-input-field'
    return (
      <div className="input-field">
        <label className="input-label" htmlFor="lastname">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastname"
          className={className}
          value={lastname}
          onChange={this.onChangeLastname}
          placeholder="Last Name"
          onBlur={this.onBlurLastname}
        />
      </div>
    )
  }

  renderFirstnameField = () => {
    const {firstname, showFirstNameError} = this.state
    const className = showFirstNameError
      ? 'name-input-field error-field'
      : 'name-input-field'
    return (
      <div className="input-field1">
        <label className="input-label" htmlFor="firstname">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstname"
          className={className}
          value={firstname}
          onChange={this.onChangeFirstname}
          placeholder="First Name"
          onBlur={this.onBlurFirstname}
        />
      </div>
    )
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidateFirstname = this.validateFirstname()
    const isValidateLastname = this.validateLastname()

    if (isValidateFirstname && isValidateLastname) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidateFirstname,
        showLastNameError: !isValidateLastname,
        isFormSubmitted: false,
      })
    }
  }

  onClickAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstname: '',
      lastname: '',
    }))
  }

  renderFormSubmission = () => {
    const {showFirstNameError, showLastNameError} = this.state
    return (
      <form onSubmit={this.onSubmitform}>
        {this.renderFirstnameField()}
        {showFirstNameError && <p className="error-message">Required</p>}

        {this.renderLastnameField()}
        {showLastNameError && <p className="error-message">Required</p>}

        <button type="submit" className="login-button">
          Submit
        </button>
      </form>
    )
  }

  renderSubmissionSuccessView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="app-container">
        <h1 className="header">Registration</h1>
        <div className="view-container">
          {isFormSubmitted
            ? this.renderFormSubmission()
            : this.renderSubmissionSuccessView()}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
