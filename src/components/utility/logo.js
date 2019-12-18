import React from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

export default props => {
  return (
    <div className="isoLogoWrapper">
      {props.collapsed ? (
        <div>
          <h3>
            <Link to="#" onClick={() => props.onClick('#')}>
              <i class="fa fa-cloud"></i>
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link
            to="#"
            onClick={() => props.onClick({ key: '#' })}
          >
             <img src='./images/logoMenu.png'  width='184px' height='63px'/>
          </Link>
        </h3>
      )}
    </div>
  );
};
