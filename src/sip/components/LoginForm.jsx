import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card  from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const styles = {
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '300px',
    },
    mobileNumber: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '300px',
    },
    errorMessage: {
        padding: '0 16px',
        color: 'tomato',
    }
};

const AuthLoginForm = ({
                           onSubmit,
                           onChange,
                           errors,
                           user,
                           submitDisabled,
                           classes
                       }) => {

    return (
    <Card className={classes.card}>
        {errors.summary && <p className={classes.errorMessage}>{errors.summary}</p>}
        <TextField
            className={classes.input}
            name="login"
            label={"Логин"}
            value = {user.login}
            //defaultValue="maleks"
            margin="normal"
            variant="outlined"
            onChange={onChange}
            placeholder = {'Введите логин'}
            InputLabelProps={{
                shrink: true,
            }}
            error={errors.login}
            autoComplete={"new-password"}
        />
        <TextField
            className={classes.input}
            name="password"
            label={"Пароль"}
            value = {user.password}
            margin="normal"
            variant="outlined"
            onChange={onChange}
            placeholder = {'Введите пароль'}
            InputLabelProps={{
                shrink: true,
            }}
            error={errors.password}
            autoComplete={"new-password"}
            maxLength="255"
            onKeyPress={(ev) => {
                if (ev.key === 'Enter') {
                    onSubmit();
                }
            }}
        />
        <br />
        <Button
            variant={"raised"}
            type="submit"
            primary
            onClick={onSubmit}
            disabled={submitDisabled}
        >Войти2</Button><br />
        <Button
            variant={"raised"}
            type="reset"
            primary
            onClick={onSubmit}
            disabled={submitDisabled}
        >Очистить</Button>
        <br />
        <br />
    </Card>
);
}

AuthLoginForm.defaultProps = {
    errors: { summary: '', login: '', password: '' },
    user: {  login: '', password: '' },
};

AuthLoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.shape({
        summary: PropTypes.string,
        login: PropTypes.string,
        password: PropTypes.string,
    }),
    user: PropTypes.shape({
        login: PropTypes.string,
        password: PropTypes.string,
    }),
    submitDisabled: PropTypes.bool.isRequired,
};

export default withStyles(styles)(AuthLoginForm);