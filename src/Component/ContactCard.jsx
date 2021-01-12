import React,{Component} from 'react';
import PropTypes from 'prop-types';


export default class ContactCard extends Component{
    constructor(props){
      super(props)
      this.state = {
        name: '',
        email: '',
        mobilephone: '',
        workphone: ''
      }
    }
    render(){
      return <div>
          <div id = {this.props.name}>Name: {this.props.name}</div> 
          <div id = {this.props.email}>Email: {this.props.email}</div>
          <div id = {this.props.mobilephone}>Mobile Phone: {this.props.mobilephone}</div>
          <div id = {this.props.workphone}>Work Phone: {this.props.workphone}</div>
          <br/>
        </div>
      }
  };

  ContactCard.propTypes = {
    name: PropTypes.string.isRequired,
    workphone: PropTypes.string,
    mobilephone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }