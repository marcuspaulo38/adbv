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
              {/*<i class="fa fa-cloud"></i>*/}
              <img title='Página Inicial' src='./images/icon_lanllink.png'  width='50px' height='50px'/>
            </Link>
          </h3>
        </div>
      ) : (
        <h3>
          <Link
            to="#"
            onClick={() => props.onClick({ key: '#' })}
          >
            <img title='Página Inicial' src='./images/logoMenu.png'  width='184px' height='63px'/>
          </Link>
        </h3>
      )}
    </div>
  );
};
