import React from 'react'
import CV from '../../assets/CV.pdf'

function CTA() {
  return (
    <div className="CTA">
        <a href={CV} className='btn btn-primary' download>Download CV</a>
        <a href="#contact" className='btn'>Let's Talk</a>
    </div>
  )
}

export default CTA