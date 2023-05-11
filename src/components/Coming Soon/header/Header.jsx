import React from 'react'
import userlogo from '../../..//assets/user.svg'

import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/core.css'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'
import './Header.css'

const Header = () => {
  return (
    <Menu
      menuButton={({ open }) => (
        <MenuButton>
          {open ? (
            <img
              src={userlogo}
              alt="user"
              className="img2 blue"
              style={{
                width: '50px',
                height: '50px',
                color: 'black',
                colorAdjust: 'black',
              }}
            />
          ) : (
            <img
              src={userlogo}
              alt="user"
              style={{
                width: '50px',
                height: '50px',
              }}
            />
          )}
        </MenuButton>
      )}
      menuClassName="my-menu"
      transition
      arrow={'arrow'}
      position={'initial'}
      align={'end'}
      viewScroll={'auto'}
    >
      <div>
        <MenuItem>
          <a className="link" href="https://t.me/justsayalpha">
            Telegram
          </a>
        </MenuItem>
        <MenuItem>
          <a className="link" href="mailto:Info@artovan.ir">
            Email
          </a>
        </MenuItem>
        <MenuItem>
          <a className="link" href="http://Github.com/artovan">
            GitHub
          </a>
        </MenuItem>
      </div>
    </Menu>
  )
}

export default Header
