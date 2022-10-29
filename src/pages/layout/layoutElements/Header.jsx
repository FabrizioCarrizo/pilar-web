import Drawer from './Drawer'
import React from 'react';
import PopMenu from './PopMenu';

const Header = () => {
  return (
    <div className='header'>
        <Drawer></Drawer>
        <h1 className='title'>PilarWeb</h1>
        <PopMenu></PopMenu>

    </div>
  )
}

export default Header