import React from 'react';
import PropTypes from 'prop-types';

const Like = ({liked, onClick}) => {
 let classes = "fa fa-heart"
 if (!liked) classes += "-o";
 return (<i className={classes} onClick={onClick} style={ {cursor : 'pointer'} } aria-hidden="true"></i> );
}
 Like.propTypes= {
 onClick: PropTypes.func.isRequired
} 
export default Like;
