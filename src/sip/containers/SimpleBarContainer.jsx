/* eslint-disable react/destructuring-assignment,no-use-before-define */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';
// import { withStyles } from '@material-ui/core/styles';
import SimpleBar from '../components/SimpleBar';
import * as simpleBarAction from '../actions/SimpleBarAction';




const styles = () => ({

});


class SimpleBarContainer extends React.PureComponent {
    render() {
        return (
            <SimpleBar isLogin={this.props.isLogin}
                       isAuth={this.props.isAuth}
                       title={this.props.title}
            />
        );
    }
}

SimpleBarContainer.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    isLogin: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    //classes: PropTypes.objectOf(PropTypes.string).isRequired,

};

const mapStateToProps = state => ({
    isLogin:state.sip.simpleBar.isLogin,
    isAuth: state.sip.simpleBar.isAuth || true,
    title: state.sip.simpleBar.title,
});
const mapDispatchToProps = dispatch => ({
    onChangeIsLogin(isLogin){
        if(isLogin){

        }else{

        }
        dispatch(simpleBarAction.setIsLogin(isLogin));
    },
});

const mergeProps = (stateProps, dispatchProps, ownProps) => Object.assign({},
    ...ownProps,
    dispatchProps,
    stateProps,
    {
    });


export default withRouter(connect(mapStateToProps, mapDispatchToProps, mergeProps)(SimpleBarContainer));

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
//     mergeProps,
// )(withStyles(styles)(SimpleBarContainer));
