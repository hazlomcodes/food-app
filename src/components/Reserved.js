import { useState }from 'react'
import '../styles/reserved.css'


const Reserved = () => {
  const [donations, setDonations] = useState([
    { name:'apple', quantity:'1', expiration:'01/01/0101', id: 1 },
    { name:'banna', quantity:'2', expiration:'02/02/0202', id: 2 },
    { name:'orange', quantity:'3', expiration:'03/03/03', id: 3 },
  ]);

  return( 
  <div className="reserved">

    {donations.map((donation) => (
      <div className='donation-preview' key={donation.id}>

        <h2> { donation.name } </h2>
        <p> quantity{ donation.quantity } </p>
        <p> expiry{ donation.expiration }</p>
        </div>
    ))}
  </div>
  );
}

export default Reserved
