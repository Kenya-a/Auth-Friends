import React from 'react';
import { connect } from 'react-redux';
import { submitButton } from './actions/actions'
import Friend from './Friend'

const FriendsList = props => {
    return (
        <>
        <h1>Dark Room</h1>
        <button onClick = {props.submitButton}>{props.test}</button>
        {props.friends && props.friends.map(smurf => <Friend key = {smurf.name} e = {smurf}/>)}
        
        
        </>
    )
}

const mapStatetoProps = state => {
    return {
        test: state.test,
        smurfs: state. smurfs
    }
}

export default connect(mapStatetoProps, {submitButton})(FriendsList)