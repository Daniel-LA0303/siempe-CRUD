import React from 'react'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Item = ({
    customer, 
    deleteCustomer, 
    setCustomerE
}) => {
    const {name, lastName, id} = customer;
  return (
    <div 
        className='item p-2'
    >
        <p className=''>Name: {name}</p>
        <hr />
        <p className=''>Lastname: {lastName}</p>
        <hr />
            <div className='btns'>
                <button 
                    onClick={()  => deleteCustomer(id)}
                    className='delete btn btn-danger' 
                ><FontAwesomeIcon icon={faTrash}/></button>
                            <button 
                    onClick={()  => setCustomerE(customer)}
                    className='delete btn btn-primary' 
                ><FontAwesomeIcon icon={faPen}/></button>
            </div>
        </div>
  )
}

export default Item