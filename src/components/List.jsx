import React, {useState} from 'react'
import Item from './Item'

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
                    <div 
                        className='d-flex justify-content-around flex-wrap'   
                    >
                        <button
                            type='button'
                            className='btn btn-danger btn-sm mx-auto col-sm-3 col-5 mb-1'
                            onClick={() => deleteAll()}
                        >Delete All</button>

                    </div>
                ) : null
            }
                
                
            {customers.length>0 ? (
                    customers.reverse().map((customer) => (
                        <Item 
                            key={customer.id}
                            customer={customer}
                            deleteCustomer={deleteCustomer}
                            setCustomerE={setCustomerE}
                        />
                    ))
            ) : (
                <h3 
                    className='text-center'
                >There are no customers yet</h3>
            )
        }    
    </div>
  )
}

export default List