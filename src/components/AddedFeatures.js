import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/carSalesActions';

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeFeature={props.removeFeature}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car
  }
}

export default connect(
  mapStateToProps,
  {removeFeature}
  )(AddedFeatures);
