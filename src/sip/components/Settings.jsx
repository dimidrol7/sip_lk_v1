import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import * as constants from '../Constants';

const styles = (theme) => ({
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
    tableWrapper:{
        width:1200,
        overflowX:'auto'
    },
    rootSettings:{
        padding:8
    },
    formControl:{
        width:210
    }
});

const Settings = props => {
    const { objTableID,dataTable,arrNumbers,numberValue,onChangeParam,classes} = props;
    return (
        <div className={classes.rootSettings}>
            <FormControl className={classes.formControl}>
                <InputLabel shrink={true} htmlFor={`settings-sip`}>{constants.NUMBERS}</InputLabel>
                <Select
                    value={numberValue}
                    onChange={onChangeParam}
                    inputProps={{
                        name: 'number'
                    }}
                >
                    <MenuItem value={'-1'}>Не выбрано</MenuItem>
                    {arrNumbers.map(number =>
                        <MenuItem value={number}>{number}</MenuItem>
                    )}
                </Select>
            </FormControl>
            <div className={classes.tableWrapper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            {Object.values(objTableID).map(row =>
                                <TableCell>
                                    {row.title}
                                </TableCell>)
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {dataTable.map((row,index) =>
                            <TableRow className={classes.row} key={`settings-row-${index}`}>
                                {Object.keys(objTableID).map(currentID =>
                                    <TableCell>
                                        {row[currentID]}
                                    </TableCell>)}
                            </TableRow>)}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

Settings.propTypes = {
    dataTable: PropTypes.arrayOf(PropTypes.object).isRequired,
    objTableID: PropTypes.objectOf(PropTypes.string).isRequired,
    onChangeParam: PropTypes.func.isRequired,
    arrNumbers: PropTypes.arrayOf(PropTypes.string).isRequired,
    numberValue: PropTypes.objectOf(PropTypes.string).isRequired,
    classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Settings);
