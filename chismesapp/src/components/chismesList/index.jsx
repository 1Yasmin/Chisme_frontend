import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as selectors from '../../reducers';

const ChismeList = ({
    title,
    content,
    date,
}) => (
    <div >
        <h1> { title } </h1>
        <p> { date } </p>
        <p> { content } </p>
    </div>
);

export default connect(
    state => {
        const chisme= selectors.getChisme(state, state.current);

        return {
            ...chisme,
        }
    },
    undefined,
)(ChismeList);