import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { createStructuredSelector } from 'reselect';

const Directory = ({ sections }) => {
  const menuItems = sections.map(({ id, ...otherSectionProps }) => <MenuItem key={id} {...otherSectionProps} />);
  return <div className='directory-menu'>{menuItems}</div>;
};

const mapStateToProps = createStructuredSelector({ sections: selectDirectorySections });

export default connect(mapStateToProps)(Directory);
