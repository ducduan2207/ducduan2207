import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/Auth';

const LoginPage = ( {startLogin} ) => (
    <div>
        <button className="btn" onClick={startLogin}>Login</button>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);