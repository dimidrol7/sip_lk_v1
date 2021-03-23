import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Settings from '../components/Settings';
import {connect} from 'react-redux';
import sipAction from '../actions/SipAction';
import * as settingsAction from '../actions/SettingsAction';
import * as constants from '../Constants';


const styles = (theme) => ({

    actionsRoot:{
        display:'flex',
        flexBasis:100,
        justifyContent:'center',
        alignItems: 'center',
    },
    button: {
        margin: 0,
        padding:4,
    },
});

//TODO: Переделать загрузку файла из строки
class SettingsContainer extends React.PureComponent {

    componentDidMount(){
        //this.props.getSettingsParam();
    }
    render() {
        return (
            <Settings dataTable={this.props.tableData}
                      objTableID={constants.OBJ_SETTINGS_PROPS}
                      arrNumbers={this.props.arrNumbers}
                      numberValue={this.props.numberValue}
                      onChangeParam={this.props.onChangeParam}
            />
        );
    }
}

SettingsContainer.propTypes = {
    onChangeParam: PropTypes.func.isRequired,
    arrNumbers: PropTypes.arrayOf(PropTypes.string).isRequired,
    numberValue: PropTypes.objectOf(PropTypes.string).isRequired,
    tableData:   PropTypes.arrayOf(PropTypes.object).isRequired,
};


const mapStateToProps = (state,ownProps) => ({
    tableData :state.sip.settings.tableData || ownProps.tableData || [],
    arrNumbers:state.sip.settings.arrNumbers,
    numberValue:state.sip.settings.numberValue,
});

const mapDispatchToProps = (dispatch,ownProps) => ({
    /*
    getSettingsParam(){
        {
            //dispatch(sipAction.setOpenCircleProgress(true));
            ownProps.getSettingsParam(constants.OBJ_ACTION_REQUEST.get_sources,{},(data) =>{
                if(ownProps.parseBool(data.success)) {
                    let tableData = ownProps.getArrDataTable(data);
                    tableData = ownProps.getConvertDateTable(tableData,
                        ['add_date']);
                    dispatch(applicationsAction.setDataTableApplications(tableData));
                    dispatch(settingsAction.setOpenCircleProgress(false));
                }
            });
        }

    },
    */

    onChangeParam(e){
        dispatch(settingsAction.setNumberValue(e.target.value));
    }

});

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.assign({},
    ...ownProps,
    dispatchProps,
    stateProps,
    {

    });

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
)(withStyles(styles)(SettingsContainer));