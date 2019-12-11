import {ADD_ADDITIONAL_FEATURES, REMOVE_ADDITIONAL_FEATURES} from '../reducers/carSalesReducer';

export const removeFeature = item => {
    // dispatch an action here to remove an item
    return {type: REMOVE_ADDITIONAL_FEATURES, payload: item}
  };

  export const addFeature = item => {
    // dipsatch an action here to add an item
    return {type: ADD_ADDITIONAL_FEATURES, payload: item}
  };