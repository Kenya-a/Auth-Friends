import React from 'react';
import { connect } from 'react-redux';
import { submitButton } from '../actions/actions'
import Friend from './Friend'

const FriendsList = props => {
    return (
        <>
        <h1>Dark Room</h1>
        <button onClick = {props.submitButton}>{props.test}</button>
        {props.friends && props.friends.map(ef => <Friend key = {ef.name} e = {ef}/>)}
        
        
        </>
    )
}

const mapStatetoProps = state => {
    return {
        test: state.test,
        friends: state.friends
    }
}

export default connect(mapStatetoProps, {submitButton})(FriendsList)