import React, { useState } from 'react'
import {
  Icon,
  useMediaQuery,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Flex
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import './style.scss';
import { navLinks } from '../../utils';
import { BiMenuAltLeft } from 'react-icons/bi';
import UserCard from '../userCard';
import userCardImg from '../../assets/userCard.png';
import CreditCard from '../creditCard';

const SideNav = () => {

  const location = useLocation();
  const [isMobile] = useMediaQuery("(max-width: 900px)");
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const renderDesktopSideNavItems = () => {
    return (
      <nav className="side-nav">
        <div>
          <UserCard name={'Nishyan'} img={userCardImg} />
          <ul>
            {navLinks.map((item) => (
              <li
                key={item.id}
              >
                <a href={item.href}
                  className={location.pathname === item.href ? 'active-link' : 'link'}>
                  <Icon as={item.icon} mr='12px' boxSize='20px' />
                  {item.name}
                </a>
              </li>
            ))}

          </ul>
        </div>
        <CreditCard credits={'222.10'} />
      </nav>
    )
  }

  const renderMobileNavItems = () => {
    return (
      <Box
        as='nav'
        position='fixed'
        cursor="pointer"
        width="100%"
        flexDirection='row'
        display='flex'
        padding="15px"
        justifyContent="space-between"
        alignItems="center"
        boxShadow='0 2px 4px rgba(0, 0, 0, 0.2)'
        backgroundColor="#f2f2f2"
        backdropFilter="8px"
        zIndex={9999}
      >
        <Icon as={BiMenuAltLeft} boxSize={8} onClick={toggleDrawer} />

      </Box>
    )
  }

  return (
    <>
      {!isMobile && renderDesktopSideNavItems()}
      {isMobile && renderMobileNavItems()}

      <Drawer placement='left' onClose={toggleDrawer} isOpen={isDrawerOpen}>
        <DrawerOverlay />
        <DrawerContent className='mobile-side-nav'>
          {/* <DrawerCloseButton /> */}
          <DrawerHeader>
            <UserCard name={'Nishyan'} img={userCardImg} />
          </DrawerHeader>
          <DrawerBody p='0'>
            <Flex h="full" direction="column" justifyContent="space-between" gap={'50px'}>
              <ul>
                {navLinks.map((item) => (
                  <li
                    key={item.id}
                  >
                    <a href={item.href}
                      className={location.pathname === item.href ? 'active-link' : 'link'}>
                      <Icon as={item.icon} mr='15px' boxSize='30px' />
                      {item.name}
                    </a>
                  </li>
                ))}

              </ul>

                <CreditCard credits={'222.10'} />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default SideNav


