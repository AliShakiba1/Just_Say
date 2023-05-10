import React from 'react'
import userlogo from '../../..//assets/user.svg'
import './Header.css'

import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'

const Header = () => {
  return (
    <Menu
      menuButton={({ open }) => (
        <MenuButton>
          {open ? (
            <img
              src={userlogo}
              alt="user"
              className="img2"
              style={{
                width: '50px',
                height: '50px',
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
      transition
      arrow={'arrow'}
      position={'initial'}
      align={'end'}
      viewScroll={'auto'}
    >
      <MenuItem>
        <a className="link" href="t.me/prance0">
          Telegram
        </a>
      </MenuItem>
      <MenuItem>
        <a className="link" href="https://github.com/AliShakiba1">
          GitHub
        </a>
      </MenuItem>
    </Menu>
  )
}

export default Header

//  <div>

//     </div>