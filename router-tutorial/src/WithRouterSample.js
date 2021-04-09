import React from 'react';
import { withRouter } from 'react-router-dom';

const WithRouterSample = ({ location, match, history }) => {
  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        id=""
        cols="30"
        rows="10"
        readOnly
      ></textarea>
      <h4>match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)}
        id=""
        cols="30"
        rows="10"
        readOnly
      ></textarea>
      <h4>history</h4>
      <textarea
        value={JSON.stringify(history, null, 2)}
        id=""
        cols="30"
        rows="10"
        readOnly
      ></textarea>
    </div>
  );
};

export default withRouter(WithRouterSample);
