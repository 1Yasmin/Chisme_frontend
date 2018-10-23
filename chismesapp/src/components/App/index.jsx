import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

import Container from '../container';
import PostForm from '../postForm';

import * as actions from '../../actions';

class App extends Component {
  
  constructor(props) {
        super(props)
        this.fetchAll = this.props.fetchAll;
    }

    componentWillMount() {
        this.props.fetchAll();
    }

    render() {
        return (
            <div>
                <Container />
                <PostForm />
            </div>
        );
    }
}

export default connect(
    undefined,
    (dispatch) => ({
        fetchAll: () => {
            dispatch(actions.chismeRequest())
        },
    })

)(App);
