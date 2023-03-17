import { useState }from 'react'
import '../styles/reserved.css'


const Reserved = () => {
  const [donations, setDonations] = useState([
    { name:'Apple', quantity:' 1', expiration:' 01/01/0101',donor:'Bjarne', dropOff: 'Manchester Central Library', id: 1 },
    { name:'Banana', quantity:' 2', expiration:' 02/02/0202', donor: 'Ada', dropOff: 'The Farmers Arms Salford',id: 2 },
    { name:'Orange', quantity:' 3', expiration:' 03/03/03', donor: 'Alan', dropOff: 'MediaCityUK, Salford ',id: 3 },
  ]);

  return( 
  <div className="reserved">

    <h1 className='user-reserved'> Your Reserved Items</h1>

    {donations.map((donation) => (
      <div className='donation-preview' key={donation.id}>

        <h2> { donation.name } </h2>
        <p> quantity{ donation.quantity } </p>
        <p> expiry{ donation.expiration }</p>
        <h3>donated by { donation.donor }</h3>
        <p> Available for collection at { donation.dropOff }</p>
        </div>
    ))}
  </div>
  );
}

export default Reserved
