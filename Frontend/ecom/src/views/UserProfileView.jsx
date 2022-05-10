import React from 'react'


const UserProfileView = () => {
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
                   <button className='btn btn-edit'><i class="fa-solid fa-pen-to-square"></i></button>
                   <button className='btn btn-settings'><i class="fa-solid fa-gear"></i></button>
                   <button className='btn btn-admin'><i class="fa-solid fa-hammer"></i></button>                   
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
                    <div className='userprofile-order-status'><i class="fa-solid fa-square sent"></i> <p className='userprofile-status-text'>Skickad</p> </div>
                </li>
                
                <li className='userprofile-order'>
                    <div className='userprofile-order-date'>2022-02-18</div>
                    <div className='userprofile-order-number'>102319230</div>
                    <div className='userprofile-order-status'><i class="fa-solid fa-square pending"></i> <p>Ej Skickad</p> </div>
                </li>    
                
                <li className='userprofile-order'>
                    <div className='userprofile-order-date'>2022-02-18</div>
                    <div className='userprofile-order-number'>102319230</div>
                    <div className='userprofile-order-status'><i class="fa-solid fa-square canceled"></i> <p>Avbruten</p> </div>
                </li>
         
                           
            </ul>

        </div>
    </div>
   
  )
}

export default UserProfileView