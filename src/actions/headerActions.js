import LinkApi from '../api/mockHeaderApi'
import * as types from './actionTypes'
import { beginAjaxCall } from './ajaxStatusActions'

export function loadLinksSuccess(links) {
  return {type: types.LOAD_LINKS_SUCCESS, links}
}

export function loadLinks() {
  return dispatch => {
    dispatch(beginAjaxCall())
    return LinkApi.getAllLinks().then(links => {
      dispatch(loadLinksSuccess(links))
    }).catch(error => {
      throw(error)
    })
  }
}
