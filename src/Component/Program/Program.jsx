import React from 'react'
import './Program .css'
import program_1 from '../../assets/program -1.jpeg'
import program_2 from '../../assets/program- 2.jpeg'
import program_3 from '../../assets/progran 3.jpg'
import program_icon_1 from '../../assets/program -1 icon-1.jpeg'
 import program_icon_2 from '../../assets/program -2 icon- 2.jpeg' 
 import program_icon_3 from  '../../assets/program -3icon -3 .jpeg'
const Program = () => {
  return (
    <div className='programs'>
      <div className='program'>
         <img src={program_1} alt="" />
         <div className='caption'>
          <img src={program_icon_1} alt="" />
          <p>Graduation Degree</p>
         </div>
      </div>
      <div className='program'>
         <img src={program_2} alt="" />
         <div className='caption'>
          <img src={program_icon_2} alt="" />
          <p>Master Degree</p>
         </div>
         
      </div>
      <div className='program'>
         <img src={program_3} alt="" />
         <div className='caption'>
          <img src={program_icon_3} alt="" srcset="" />
          <p>PhD Degree</p>
         </div>
         
      </div>
    </div>
  )
}

export default Program
