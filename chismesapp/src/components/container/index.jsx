import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as selectores from '../../reducers';
import Chisme from '../chisme'

const Container = ({
    chismes
}) => (
    <div>
        <h2> Chismes </h2>
        <div >
            <ul className="list"> {console.log(chismes)}
                {
                    chismes.map( chisme => <Chisme id={chisme.id} /> )
                }
            </ul>
        </div>
    </div>
);


export default connect(
    state => ({
        chismes: selectores.getChismes(state),
    }),
    undefined
)(Container);