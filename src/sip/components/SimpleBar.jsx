import React from 'react';
import PropTypes from 'prop-types';
//import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';


const styles = {
    disabledWrapper:{
        pointerEvents: 'none'
    },
    enabledWrapper:{
        pointerEvents: 'auto'
    },
    title:{flexGrow:1},
    buttonsComponent:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'nowrap'
    }
};


const SimpleBar = props => {
    const {isAuth,isLogin, title} = props;
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="h6" color="inherit" style = {styles.title}>
                    {title || "SIP-ЛК"}
                </Typography>
                {isAuth && <div style = {styles.buttonsComponent}>
                    <div style = {isLogin ? styles.disabledWrapper : styles.enabledWrapper}>
                        <Link to={"/login"} style={{ textDecoration: 'none' }}>
                            <Button disabled={isLogin}>Вход</Button>
                        </Link>
                    </div>
                    <div style = {!isLogin ? styles.disabledWrapper : styles.enabledWrapper}>
                        <Link to={"/register"} style={{ textDecoration: 'none' }}>
                            <Button disabled={!isLogin}>Регистрация</Button>
                        </Link>
                    </div>
                </div> }
            </Toolbar>

        </AppBar>
    );
}

SimpleBar.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    isLogin: PropTypes.bool.isRequired,
    //classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SimpleBar;