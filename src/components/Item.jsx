import React from 'react'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const animations = {
    initial: {scale: 0},
    animate: {scale: 1},
    exit: {scale: 0}
}

const Item = ({
    customer, 
    deleteCustomer, 
    setCustomerE
}) => {
    const {name, lastName, id} = customer;
  return (
    <motion.div 
        className='item p-2'
        {...animations}  
        layoutId={id}  
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
        </motion.div>
  )
}

export default Item