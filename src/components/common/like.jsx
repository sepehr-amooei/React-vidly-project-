import React from 'react';

const Like = ({liked, onClick}) => {
 let classes = "fa fa-heart"
 if (!liked) classes += "-o";
 return (<i className={classes} onClick={onClick} style={ {cursor : 'pointer'} } aria-hidden="true"></i> );
}
 
export default Like;
