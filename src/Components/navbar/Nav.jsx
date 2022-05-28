import React from 'react'
import './nav.css'
import {GiHumanTarget} from 'react-icons/gi'
import {BiHomeAlt} from 'react-icons/bi'
import {RiContactsBookLine} from 'react-icons/ri'
import {MdMiscellaneousServices} from 'react-icons/md'
import {VscVmRunning} from 'react-icons/vsc'
import { IconContext } from 'react-icons'



function nav() {
  return (
    <IconContext.Provider
    value={{size:'30px'}}
    >
  <div className='navbar'>
    <a href='' ><BiHomeAlt /></a>
    <a href='' ><GiHumanTarget/></a> 
    <a href='' ><VscVmRunning/></a>
    <a href='' ><MdMiscellaneousServices/></a>
    <a href='' ><RiContactsBookLine/></a>

  </div></IconContext.Provider>
  )
}

export default nav