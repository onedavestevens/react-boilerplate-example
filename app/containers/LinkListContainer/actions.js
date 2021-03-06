/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINKS,
  REQUEST_LINKS_SUCCEEDED,
  REQUEST_LINKS_FAILED,
  START_ADD,
  ADD_LINK_SUCCEEDED,
} from './constants';

export function addLinkSucceeded(link) {
  return {
    type: ADD_LINK_SUCCEEDED,
    link,
  };
}
export function requestLinks(topicName) {
  return {
    type: REQUEST_LINKS,
    topicName,
  };
}

export function requestLinksSucceeded(links) {
  return {
    type: REQUEST_LINKS_SUCCEEDED,
    links,
  };
}

export function requestLinksFailed(message) {
  return {
    type: REQUEST_LINKS_FAILED,
    message,
  };
}

export function startAdd(topicName) {
  return {
    type: START_ADD,
    topicName,
  };
}

