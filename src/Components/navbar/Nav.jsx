import React from 'react'
import './nav.css'
import {FcAbout} from 'react-icons/fc'
import {BiHomeAlt} from 'react-icons/bi'
import {FcContacts} from 'react-icons/fc'
import {FcServices} from 'react-icons/fc'
import {VscVmRunning} from 'react-icons/vsc'



function nav() {
  return (
  <div className='navbar'>
    <a href='' ><FcAbout /></a>
    <a href='' ><BiHomeAlt /></a>
    <a href='' ><FcContacts/></a>
    <a href='' ><FcServices/></a>
    <a href='' ><VscVmRunning/></a>

  </div>
  )
}

export default nav