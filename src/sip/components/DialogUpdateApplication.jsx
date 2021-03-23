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
    contentUpdateApplication:{
        flexDirection:'row',
        justifyContent: 'center',
    },
    contentGroup:{
        flexDirection:'row',
        justifyContent: 'flex-start',
    },
    dialogContentUpdateApplication:{
        width:700,
    },
});
// TODO: доделать
const DialogUpdateApplication = props => {
    const {
        openUpdateApplicationDialog,
        operatorsObj,
        onChangeOperator,
        onClickUpdateApplicationCancel,
        onClickUpdateApplicationOk,
        downloadFileComponent,
        editSource,
        isLoadingSource,
        objOperatorsRegister,
        disabledUpdateApplicationConfirmButton,
        classes } = props;
    return (
        <div>
            <Dialog maxWidth={"lg"}
                    open={openUpdateApplicationDialog}
                    onClose={onClickUpdateApplicationCancel}>
                <DialogTitle >
                    {`${constants.EDIT_A} ${constants.APPLICATIONS.toLowerCase()} "${editSource}"`}
                </DialogTitle>
                <DialogContent className={classes.dialogContentUpdateApplication}>
                         <FormGroup className={classes.contentGroup}>
                             {!isLoadingSource && <FormControl component="fieldset" className={classes.formControlApplication}>
                                <FormLabel component="legend">{constants.OPERATORS}</FormLabel>
                                <FormGroup className ={classes.formGroupOperators}>
                                    {Object.keys(operatorsObj).map((currentID) =>(
                                        <FormControlLabel
                                            key={`operatorRegister-${currentID}`}
                                            control={
                                                <Checkbox checked={objOperatorsRegister[currentID]}
                                                          onChange={(e) => onChangeOperator(e, currentID)}
                                                          value={operatorsObj[currentID].id}
                                                />
                                            }
                                            label={operatorsObj[currentID].title}
                                        />)
                                    )}
                                </FormGroup>
                                <FormHelperText>
                                    {`${constants.OPERATORS} ${constants.FOR}
                                    ${constants.REGISTRATION_A.toLowerCase()}`}
                                </FormHelperText>
                            </FormControl> }
                            <div>
                                {downloadFileComponent}
                            </div>
                        </FormGroup>
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClickUpdateApplicationOk}
                            disabled={disabledUpdateApplicationConfirmButton}
                            color="primary">
                        {constants.APPLY}
                    </Button>
                    <Button onClick={onClickUpdateApplicationCancel} color="primary" autoFocus>
                        {constants.CANCEL}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

DialogUpdateApplication.propTypes = {

    operatorsObj: PropTypes.objectOf(PropTypes.object).isRequired,
    onChangeOperator: PropTypes.func.isRequired,
    downloadFileComponent: PropTypes.node.isRequired,
    onClickUpdateApplicationCancel: PropTypes.func.isRequired,
    onClickUpdateApplicationOk: PropTypes.func.isRequired,
    openUpdateApplicationDialog: PropTypes.bool.isRequired,
    editSource: PropTypes.string.isRequired,
    isLoadingSource: PropTypes.bool.isRequired,
    objOperatorsRegister:PropTypes.objectOf(PropTypes.bool).isRequired,
    disabledUpdateApplicationConfirmButton: PropTypes.bool.isRequired,
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(DialogUpdateApplication);
