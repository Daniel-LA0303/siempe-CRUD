import React, {useState} from 'react'
import Item from './Item'
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

const animationsH3 = {
    initial: {scale: 0},
    animate: {scale: 1},
    exit: {scale: 0}
}
 
const List = ({
    customers, 
    deleteCustomer, 
    setCustomerE, 
    deleteAll,
}) => {
  return (
    <div>
            {
                customers.length > 0 ? (
                    <motion.div 
                        className='d-flex justify-content-around flex-wrap'   
                        {...animationsH3}   
                    >
                        <button
                            type='button'
                            className='btn btn-danger btn-sm mx-auto col-sm-3 col-5 mb-1'
                            onClick={() => deleteAll()}
                        >Delete All</button>
                    </motion.div>
                ) : null
            }
                
                
            {customers.length>0 ? (
                <AnimatePresence>
                    {[...customers].reverse().map((customer) => (
                        <Item 
                            key={customer.id}
                            customer={customer}
                            deleteCustomer={deleteCustomer}
                            setCustomerE={setCustomerE}
                        />
                    ))}
                </AnimatePresence>
            ) : (
                <motion.h3 
                    className='text-center'
                    {...animationsH3}
                >There are no customers yet</motion.h3>
            )
        }    
    </div>
  )
}

export default List