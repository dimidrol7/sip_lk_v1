/* eslint-disable react/destructuring-assignment,no-use-before-define */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ProgressCircle from '../components/ProgressCircle';
import MessageSnackBar from '../components/MessageSnackBar';
import * as constants from '../Constants';
import * as settingAction from '../actions/SipAction';



const styles = () => ({
  rootSettings: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width:'100%',
    minWidth: 500,
  },
  paperSettings: {
    flexGrow: 1,
    maxWidth: 1300,
    height: '100%',
    width: '100%'
  },
});


class SipContainer extends React.PureComponent {
    componentDidMount(){
  }
  render() {
    return (
        < div className={this.props.classes.rootSettings}>
            <Paper square className={this.props.classes.paperSettings}>
                <div>Настройки</div>
            </Paper>
          <div>
            <MessageSnackBar isError={this.props.isErrorMessageSnackBar}
                             message={this.props.messageSnackBar}
                             onClose={this.props.onCloseMessageSnackBar}
                             open={this.props.openMessageSnackBar}/>
          </div>
        <ProgressCircle message={this.props.messageCircleProgress}
                        open={this.props.openCircleProgress}/>
        </div>
    );
  }
}

SipContainer.propTypes = {
  getSettingsParam: PropTypes.func.isRequired,
  isErrorMessageSnackBar: PropTypes.bool.isRequired,
  messageSnackBar: PropTypes.string.isRequired,
  onCloseMessageSnackBar: PropTypes.func.isRequired,
  openMessageSnackBar: PropTypes.bool.isRequired,
  messageChange: PropTypes.func.isRequired,
  messageCircleProgress: PropTypes.string.isRequired,
  openCircleProgress: PropTypes.bool.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,

};

const parseBool = (val) => val === "true" || val === true;

const mapStateToProps = state => ({
  messageSnackBar:state.sip.sip.messageSnackBar,
  isErrorMessageSnackBar:state.sip.sip.isErrorMessageSnackBar,
  openMessageSnackBar:state.sip.sip.openMessageSnackBar,
  messageCircleProgress:state.sip.sip.messageCircleProgress,
  openCircleProgress:state.sip.sip.openCircleProgress,
});
let debugURL = 'http://192.168.35.4/admclntlk/auth.php';
const mapDispatchToProps = dispatch => ({
  getSettingsParam(actionRequest, paramObj, callback, isFormData){
    let settingsParamFetch = (delayCount,actionRequest,callback,isFormData) =>
    { dispatch(settingAction.fetchPosts('' + actionRequest,
        constants.getURL(actionRequest),paramObj,isFormData,true))
        .then((param) =>{
            const data = JSON.parse(param.posts);
            const errors = data.errors ? data.errors : {};
            if (parseBool(data.success)) {
                dispatch(settingAction.setErrorMessageSnackBar(false));
                dispatch(settingAction.setOpenMessageSnackBar(false));
                callback(data);
            } else {
              if(data.error)
              {
                  dispatch(settingAction.setMessageSnackBar(data.error));
              }else{
                  dispatch(settingAction.setMessageSnackBar(errors));
                  if(delayCount <= constants.MAX_DELAY_REQUEST_ERROR_COUNT) {
                      setTimeout(() =>
                          settingsParamFetch(delayCount * 2,actionRequest,callback), delayCount);
                  }else{
                    dispatch(settingAction.setOpenMessageSnackBar(true));
                    dispatch(settingAction.setMessageSnackBar(constants.ERROR_UNKNOWN));
                  }
                  dispatch(settingAction.setErrorMessageSnackBar(true));
              }
              dispatch(settingAction.setOpenCircleProgress(false));
                dispatch(settingAction.setOpenMessageSnackBar(true));
            }
      })};
      settingsParamFetch(constants.DELAY_REQUEST_ERROR_COUNT,actionRequest,callback,isFormData);
  },




    getAuth(paramObj, callback, isFormData){
        let settingsParamFetch = (delayCount,actionRequest,callback,isFormData) =>
        { dispatch(settingAction.fetchPosts('auth',
            debugURL,paramObj,isFormData,true))
            .then((param) =>{
                const data = JSON.parse(param.posts);
                const errors = data.errors ? data.errors : {};
                console.log('getAuth',errors);
            })};
        settingsParamFetch(constants.DELAY_REQUEST_ERROR_COUNT,'auth',callback,isFormData);
    },

  onCloseMessageSnackBar(e,openMessageSnackBar){
    dispatch(settingAction.setOpenMessageSnackBar(!openMessageSnackBar));
  },


});

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.assign({},
  ...ownProps,
  dispatchProps,
  stateProps,
  {
  onCloseMessageSnackBar:(e,openMessageSnackBar) =>
      dispatchProps.onCloseMessageSnackBar(e, stateProps.openMessageSnackBar),
      messageChange:(message,tabValue) => dispatchProps.messageChange(message,stateProps.tabValue),
  });


export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(withStyles(styles)(SipContainer));
