import React from 'react'
import './deploy.css'
import Topbar from '../../components/topbar/Topbar'
import Sidenav from '../../components/sidenav/Sidenav'
import Header from '../../components/header/Header'
import DeployForm from './DeployForm'
import { connect } from 'react-redux';


function Deploy(props) {
  return (
    <div>
      <Topbar showProjectSelector />
      <Sidenav selectedItem="deploy" />
      <div className="page-content">
        <Header name="Project Configurations" color="#000" fontSize="22px" />
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Deploy);

