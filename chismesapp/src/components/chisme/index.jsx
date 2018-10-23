import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../actions';
import * as selectores from '../../reducers';

const post_variable = '/post';

const Chisme = ({
  id,
  chisme,
  onDeleteHandle,
  onMoreHandle,
  history
}) => (
    <ul className="chisme" key={id}>
      <div>
        <div className="header">
          <p className="numeroId"> {`# ${chisme.id}`} </p>
          <p className="fecha"> {`${chisme.date}`} </p>
          <a className="btndelete" onClick={ onDeleteHandle }> <i class="far fa-trash-alt"></i> </a>
        </div>
        <div className="title">
          { chisme.title }
        </div>
        <div className="content">
          <span className="text">
            { chisme.content.substring(0, 150) }
          </span>
        </div>
        <div className="footer" onClick={() => onMoreHandle()}  >
          <Link to={ post_variable } style={{ textDecoration: 'none' }}><a className="button add" > <i class="fas fa-plus"></i> </a></Link>
        </div>
        
      </div>
    </ul>
);


export default connect(
  (state, { id }) => ({
    chisme: selectores.getChisme(state, id),
    id,
  }),
  (dispatch, { id }) => ({
    onDeleteHandle: () => {
      console.log(id);
      dispatch(actions.deleteChisme(id))
    },
    onMoreHandle: (history) => {
      console.log(id)
      dispatch(actions.chismeChanged(id))
    }
  })
)(Chisme);


