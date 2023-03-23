import React from 'react'
import cv from '../../Assets/resume.pdf'

function CVT() {
  return (
    <div className="cta">
   <a href={cv} target="_blank" rel="noopener noreferrer" className="btn">Resume</a>
    <a className="btn btn-primary" href="#Contact">Let's Talk</a>
    </div>
  )
    
}

export default CVT