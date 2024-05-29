import { Deal, Deals } from '../model/deals';
import {FETCH_DEALS, FETCH_SINGLE_DEAL, SET_DEALS_DATA, SET_SINGLE_DEAL_DATA} from '../utils/constants';

// Action creator function for initiating the fetch quotes action
export function fetchDeals() {
  return {
    type: FETCH_DEALS,
  };
}

export function fetchSingleDeal() {
  return {
    type: FETCH_SINGLE_DEAL,
  };
}

// Action creator function for setting quotes data in the Redux store
export function setDeals(data: Deals) {
  return {
    type: SET_DEALS_DATA,
    data,
  };
}

export function setSingleDeal(data: Deal) {
  return {
    type: SET_SINGLE_DEAL_DATA,
    data,
  };
}