/*
 *
 * LinkListContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  REQUEST_LINKS_SUCCEEDED,
  ADD_LINK_SUCCEEDED,
} from './constants';

const initialState = fromJS({
  links: [],
});

function addLink(state, link) {
  const links = state.get('links');
  links.push(link);
  return state.set('links', links);
}

function linkListContainerReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LINKS_SUCCEEDED:
      return state.set('links', action.links);
    case ADD_LINK_SUCCEEDED:
      return addLink(state, action.link);
    default:
      return state;
  }
}

export default linkListContainerReducer;
