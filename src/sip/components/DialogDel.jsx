import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import * as constants from '../Constants';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';


const styles = () => ({
});
// TODO: доделать
const DialogDel = props => {
    const {
        openDialogDel,
        onClickCancelDialogDel,
        onClickOkDialogDel,
        titleDialogDel,
        classes } = props;
    return (
        <div>
            <Dialog open={openDialogDel}
                    onClose={onClickCancelDialogDel}>
                <DialogTitle >
                    {titleDialogDel}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={onClickOkDialogDel} color="primary">
                        {constants.DELETE}
                    </Button>
                    <Button onClick={onClickCancelDialogDel} color="primary" autoFocus>
                        {constants.CANCEL}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

DialogDel.propTypes = {

    onClickCancelDialogDel: PropTypes.func.isRequired,
    onClickOkDialogDel: PropTypes.func.isRequired,
    openDialogDel: PropTypes.bool.isRequired,
    titleDialogDel: PropTypes.string.isRequired,
    classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(DialogDel);
