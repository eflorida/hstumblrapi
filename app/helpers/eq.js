import Ember from 'ember';

// const eq = (params) => params[0] === params[1];
// export default Ember.Helper.helper(eq);

export function eq(params/*, hash*/) {
  return params;
}

export default Ember.Helper.helper(eq);
