import LinkApi from '../api/mockHeaderApi'
import * as types from '../constants/actionTypes'
import { beginAjaxCall } from './ajaxStatusActions'

export function loadLinksSuccess(links) {
  return {type: types.LOAD_LINKS_SUCCESS, links}
}
export function showAppSubMenu() {
  return {type: types.SHOW_APP_SUB_MENU}
}
export function hideAppSubMenu() {
  return {type: types.HIDE_APP_SUB_MENU}
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
