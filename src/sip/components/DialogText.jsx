import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import * as constants from '../Constants';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';



const styles = () => ({
});
// TODO: доделать
const DialogText = props => {
    const {  content, title, onClickClose, open, classes } = props;
    return (
        <div>
            <Dialog maxWidth={'lg'}
                    scroll='paper'
                    open={open}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClickClose} color="primary" autoFocus>
                        {constants.CLOSE}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

DialogText.propTypes = {
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClickClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(DialogText);