import React from 'react'
import { useState } from 'react'


const UserProfileView = () => {
    
    const [open, setOpen] = useState(false)
 
    return (
  
    <div className="container">
        <div className="userprofile-card">
           <div className="userprofile-info-header">
               <div className='userprofile-info'>
               <p>Evert Starkman</p>
               <p>Kanonkulegatan 666</p>
               <p>Västerås</p>
               <p>Sweden</p>
               </div>
               <div className="userprofile-header-buttons">
                   <button className='btn btn-edit'><i className="fa-solid fa-pen-to-square"></i></button>
                   <button className='btn btn-settings'><i className="fa-solid fa-gear"></i></button>
                   <button className='btn btn-admin'><i className="fa-solid fa-hammer"></i></button>                   
               </div>
           </div>          
           <ul className='userprofile-orderlist'>
               <li className='userprofile-header'>
                   <div className="userprofile-column date">Datum</div>
                   <div className="userprofile-column order-number">Ordernummer</div>
                   <div className="userprofile-column status">Orderstatus</div>
               </li>
                <li className='userprofile-order'>
                    <div className='userprofile-order-date'>2022-02-18</div>
                    <div className='userprofile-order-number'>102319230</div>
                    <div className='userprofile-order-status'>
                        <p className='userprofile-status-text'>Skickad</p>
                        <div>
                        <i className="fa-solid fa-square sent"></i>
                        </div>
                        <button className='userprofile-chevron' onClick={() => setOpen(!open)}><i className="fa-solid fa-chevron-down"></i></button>
                        {open && UPdropdownMenu()}
                    </div>
                </li>
                
                <li className='userprofile-order'>
                    <div className='userprofile-order-date'>2022-02-18</div>
                    <div className='userprofile-order-number'>102319230</div>
                    <div className='userprofile-order-status'>
                         <p className='userprofile-status-text'>Ej Skickad</p> 
                         <div>
                         <i className="fa-solid fa-square pending"></i>
                         </div>
                         <button className='userprofile-chevron' onClick={() => setOpen(!open)}><i className="fa-solid fa-chevron-down"></i></button>
                        {open && UPdropdownMenu()}
                    </div>
                </li>    
                
                <li className='userprofile-order'>
                    <div className='userprofile-order-date'>2022-02-18</div>
                    <div className='userprofile-order-number'>102319230</div>
                    <div className='userprofile-order-status'>
                        <p className='userprofile-status-text'>Avbruten</p>
                        <div>
                        <i className="fa-solid fa-square canceled"></i> 
                        </div>
                    <button className='userprofile-chevron' onClick={() => setOpen(!open)}><i className="fa-solid fa-chevron-down"></i></button>
                        {open && UPdropdownMenu()}
                     </div>
                </li>
         
                           
            </ul>

        </div>
    </div>
   
  )

  function UPdropdownMenu(props) {
 
    return (
    <div className='userprofile-dropdown'>
        <ul>
            <li className='userprofile-dropdown-item'></li>
        </ul>

    </div>
  )
}


}




export default UserProfileView