import React from "react";
import { APP_NAME } from '../constants.js';

const Copyright = () => {
  return (
    <>
      Copyright © {new Date().getFullYear()}
      <a href="/"> {APP_NAME}</a>. Powered by
      <a href="https://bestwebdesign.sg" target="_blank" rel="noopener noreferrer">
        {' '}
        Sretna Tombola
      </a>
      {'. '}
      All rights reserved.
      <br />
      
      
      
    </>
  );
};

export default Copyright;