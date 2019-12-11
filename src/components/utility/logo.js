import React from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

export default props => {
  return (
    <div className="isoLogoWrapper">
      {props.collapsed ? (
        <div>
          <h3>
            <Link to="/overview" onClick={() => props.onClick('overview')}>
              <i class="fa fa-cloud"></i>
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link
            to="/overview"
            onClick={() => props.onClick({ key: 'overview' })}
          >
            CloudWeDo
          </Link>
        </h3>
      )}
    </div>
  );
};
