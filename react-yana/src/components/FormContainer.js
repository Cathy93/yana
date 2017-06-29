import React from 'react';
import { FormErrors } from './FormErrors';
import {Well, Panel, FormGroup } from 'react-bootstrap';
import SingleInput from './SingleInput';
import TextArea from './TextArea';

class FormContainer extends React.Component {

  constructor(props) {
      super(props);

      //Set Initial State for all form inputs
      this.state = {
        formErrors: { userName: '', userEmail: '', userPhone: '', userMessage: '' },
        formValid: false,
        userName: '',
        userNameValid: false,
        userEmail: '',
        userEmailValid: false,
        userPhone: '',
        userPhoneValid: false,
        userMessage: '',
        userMessageValid: false,
    };

      //------Bind all Handling Functions into class FormContainer----------//
      //For userName
      this.handleFullNameChange = this.handleFullNameChange.bind(this);

      //For userEmail
      this.handleEmailChange = this.handleEmailChange.bind(this);

      //For userPhone
      this.handlePhoneChange = this.handlePhoneChange.bind(this);

      //For userMessage
      this.handleMessageChange = this.handleMessageChange.bind(this);

      //For Submit Button
      this.handleFormSubmit = this.handleFormSubmit.bind(this);

      //For Clearing Contents
      this.handleClearForm = this.handleClearForm.bind(this);
  }

  //fetch all input data
  componentDidMount() {
    fetch('./fake_db.json')
      .then(res => res.json())
      .then(data => {
          this.setState({
              userName: data.userName,
              userEmail: data.userEmail,
              userPhone: data.userPhone,
              userMessage: data.userMessage,
           });
       });
    }

    //Display user name after user input
    handleFullNameChange(e) {
        const name = e.target.name;
        const value = e.target.value;
          this.setState({
            userName: value,
          }, () => { this.validateField(name, value) });
    }

    //Display user email after user input
    handleEmailChange(e) {
        const name = e.target.name;
        const value = e.target.value;
          this.setState({
            userEmail: value,
          }, () => { this.validateField(name, value) });
    }

    //Display user phone after user input
    handlePhoneChange(e) {
        const name = e.target.name;
        const value = e.target.value;
          this.setState({
            userPhone: value,
          }, () => { this.validateField(name, value) });
    }

    //Display user message after user input
    handleMessageChange(e) {
        const name = e.target.name;
        const value = e.target.value;
          this.setState({
            userMessage: value,
          }, () => { this.validateField(name, value) });
    }

    //Display User Inputs (Generic)
    //handleUserInput = (e) => {
    //    const name = e.target.name;
    //    const value = e.target.value;
    //    this.setState({[name]: value},
    //                  () => { this.validateField(name, value) });
    //}

    //Validate User Inputs
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let userNameValid = this.state.userNameValid;
        let userEmailValid = this.state.userEmailValid;
        let userPhoneValid = this.state.userPhoneValid;
        let userMessageValid = this.state.userMessageValid;

        //Validate User Inputs seperately
        switch(fieldName) {
          case 'userName':
              userNameValid = value.length >= 3;
              fieldValidationErrors.userName = userNameValid ? '': ' has to be in alphabet letters and minimum of 3 letters';
              break;
          case 'userEmail':
              userEmailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
              fieldValidationErrors.userEmail = userEmailValid ? '' : ' is invalid';
              break;
          case 'userPhone':
              userPhoneValid = value.match(/^[0-9]+$/);
              fieldValidationErrors.userPhone = userPhoneValid ? '' : ' is an invalid phone number';
              break;
          case 'userMessage':
              userMessageValid = value.length > 3 && value.length < 150 ;
              fieldValidationErrors.userMessage = userMessageValid ? '': ' has to more than 3 letters and less than 150 letters';
              break;
          default:
            break;
        }

        //Display User Input Error Message
        this.setState({ formErrors: fieldValidationErrors,
                        userNameValid: userNameValid,
                        userEmailValid: userEmailValid,
                        userPhoneValid: userPhoneValid,
                        userMessageValid: userMessageValid
                      }, this.validateForm);

    }

    //Validate All required User Inputs dynamically
    validateForm() {
       this.setState({formValid: this.state.userNameValid &&
                                 this.state.userEmailValid &&
                                 this.state.userPhoneValid &&
                                 this.state.userMessageValid });
    }

    //Submit Form Action
    handleFormSubmit(e) {
      // prevents the page from reloading
      e.preventDefault();

      const formContents = {
          userName: this.state.userName,
          userEmail: this.state.userEmail,
          userPhone: this.state.userPhone,
          userMessage: this.state.userMessage,
      };

      console.log('Send this in a POST request:', formContents);
      //Remove this to prevent input from clearing once submit button is clicked
      //this.handleClearForm(e);
      }

    //Clear Form Action
    //Clearing the data displayed in the form's child components
    handleClearForm(e) {
      // prevents the page from reloading
      e.preventDefault();
      // clears the form
      this.setState({
          userName: '',
          userNameValid: false,
          userEmail: '',
          userEmailValid: false,
          userPhone: '',
          userPhoneValid: false,
          userMessage: '',
          //userMessageValid: false,
      });
    }

    render() {
        return(
          <div>
              <Well bsSize="lg">
                <h1 className="form-header">VACL Contact Form</h1>
                  <Panel className="contact-form-panel">
                      <FormGroup>
                          <form onSubmit={this.handleFormSubmit}>
                              <div className="panel panel-default custom">
                                  <FormErrors formErrors={this.state.formErrors} />
                              </div>
                              <SingleInput
                                   inputType={'text'}
                                   title={'Your Name (*)'}
                                   name={'userName'}
                                   controlFunc={this.handleFullNameChange}
                                   content={this.state.userName}
                                   placeholder={'Full Name'}/> {/* Full name text input */}
                              <SingleInput
                                   inputType={'text'}
                                   title={'Email (*)'}
                                   name={'userEmail'}
                                   controlFunc={this.handleEmailChange}
                                   content={this.state.userEmail}
                                   placeholder={'Email'} /> {/* Email input */}
                              <SingleInput
                                   inputType={'text'}
                                   title={'Phone'}
                                   name={'userPhone'}
                                   controlFunc={this.handlePhoneChange}
                                   content={this.state.userPhone}
                                   placeholder={'Phone Number'} /> {/* Phone Number input */}
                              <TextArea
                                   inputType={'text'}
                                   title={'Message (*)'}
                                   name={'userMessage'}
                                   rows={8}
                                   resize={true}
                                   content={this.state.userMessage}
                                   controlFunc={this.handleMessageChange}
                                   placeholder={'Please type your message'} /> {/* Message input */}
                              <div className="col-lg-offset-2">
                                    <input
                                          type="submit"
                                          className="btn"
                                          disabled={!this.state.formValid}
                                          value="Submit"
                                    />
                                    <button
                                          className="btn btn-link"
                                          onClick={this.handleClearForm}>
                                          Clear form
                                    </button>
                              </div>
                          </form>
                      </FormGroup>
                  </Panel>
              </Well>
          </div>
        );
    }
}

export default FormContainer;
