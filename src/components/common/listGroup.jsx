// import React from 'react';

// const ListGroup = (props) => {
//  const { items, onItemSelect,selectedItem ,textProperty,
//           valueProperty} = props;
// //  let allGenres = ['All Genres'];

// //  for (let i = 0; i < items.length; i++){
// //   allGenres.push(items[i].name);
// //  }
//  return (
//   <div className="list-group">
//    {
//      items.map(item => <button type="button" key={item[valueProperty]} onClick = {() => onItemSelect(item)} className={item === selectedItem? "list-group-item list-group-item-action btn-sm active": "list-group-item list-group-item-action btn-sm"}>{item[textProperty]}</button> )
//    }
//   </div>
//   );
// }
// ListGroup.defaultProps = {
//   textProperty: "name",
//   valueProperty: "_id"
// };
// export default ListGroup;

import React from 'react';
import PropTypes from 'prop-types';

const ListGroup = ({items, textProperty, valueProperty, selectedItem, onItemSelect})=> {
 return ( 
  <div className="list-group">
      {items.map(item => <button key={item[textProperty]} type="button"
        className={item === selectedItem? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action"}
        onClick={() => onItemSelect(item)}>{item[textProperty]}</button>)}
  </div>
  );
}

ListGroup.defaultProps = {
 textProperty: 'name',
 valueProperty: '_id'
};

ListGroup.propTypes= {
  items: PropTypes.array.isRequired,
  textProperty: PropTypes.string.isRequired,
  valueProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func.isRequired
}


export default  ListGroup ;