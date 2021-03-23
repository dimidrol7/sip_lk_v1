import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = (theme) => ({
    rootProgressCircle:{
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1600,
        position: 'fixed',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    messageProgressCircle:{
        color:'white',
        fontSize:24,
    },
    progress: {
        margin: theme.spacing.unit * 2,
    },
    contentProgressCircle:{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }
});

const ProgressCircle = props => {
    const {open,message, classes } = props;
    return (
        <div className={classes.rootProgressCircle}
             style = {{display: open ? 'flex' :'none'}}>
            <div className={classes.contentProgressCircle}>
                <div className={classes.messageProgressCircle}>{message}</div>
                <CircularProgress
                    className={classes.progress} />
            </div>
        </div>
    );
}

ProgressCircle.propTypes = {
  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(ProgressCircle);