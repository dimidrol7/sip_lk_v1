import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import { withStyles } from '@material-ui/core/styles';


const styles = () => ({

});

function TransitionDown(props) {
    return <Slide {...props} direction="down" />;
}
//TODO: Не работает в режиме info
let defaultHideDuration = 20000;
const MessageSnackBar = props => {
    const { open,message,onClose, isError} = props;
    return (
        <div>
            <Snackbar
                open={open}
                onClose={isError ? () => false : onClose}
                TransitionComponent={TransitionDown}
                autoHideDuration = {isError ? null : defaultHideDuration}
                message={<span >{message}</span>}
            />
        </div>

    );
}

MessageSnackBar.propTypes = {
    open: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    isError: PropTypes.bool.isRequired,
};

export default withStyles(styles)(MessageSnackBar);
