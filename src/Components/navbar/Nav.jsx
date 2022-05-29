import React from 'react'
import './nav.css'
import {GiHumanTarget} from 'react-icons/gi'
import {BiHomeAlt} from 'react-icons/bi'
import {RiContactsBookLine} from 'react-icons/ri'
import {MdMiscellaneousServices} from 'react-icons/md'
import {VscVmRunning} from 'react-icons/vsc'
import { IconContext } from 'react-icons'
import {useState} from 'react'


function nav() {
  const[activeNav, setActiveNav ] =useState('#')
  return (
    <IconContext.Provider
    value={{size:'30px'}}
    >
  <div className='navbar'>
    <a href='#' className={activeNav === '#' ? 'active':''}><BiHomeAlt /></a>
    <a href='#about' onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><GiHumanTarget/></a> 
    <a href='#experience' ><VscVmRunning/></a>
    <a href='#services' ><MdMiscellaneousServices/></a>
    <a href='#contact' ><RiContactsBookLine/></a>

  </div></IconContext.Provider>
  )
}

export default nav