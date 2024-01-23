import React from 'react';
import './content.css';

const footer = ({totalMember}) => {
  return (
    <footer>
      <h1>Footer</h1>
      <h2>{totalMember} Member</h2>
    </footer>
  )
}

export default footer
