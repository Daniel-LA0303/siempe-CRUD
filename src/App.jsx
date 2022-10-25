import { useState } from 'react';
import Alert from './components/Alert';
import Form from './components/Form';
import List from './components/List';

import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

const animationsForm = {
  hidden: {
    opacity: 0,
    x: "-50px"
  },
  show: {
    opacity: 1,
    x: "0px",
    transition: {
      delay: 0.5,
      duration: 1,
      ease: "easeInOut",
  }
  }
}
const animationsList = {
  hidden: {
    opacity: 0,
    x: "50px"
  },
  show: {
    opacity: 1,
    x: "0px",
    transition: {
      delay: 1,
      duration: 1,
      ease: "easeInOut",
  }
  }
}

function App() {
  
  //state
  const [customers, setCustomers] = useState([]);
  const [customerE, setCustomerE] = useState({});
  const [deleteAllC, setDeleteAllC] = useState(false);

  //functions
  const deleteCustomer = (id) => {
    const newCustomers= customers.filter(customer => customer.id !== id);
    setCustomers(newCustomers);
  }
  const deleteAll = () => {
    setDeleteAllC(true);
  }
  const confirmDelete = (value) => {
    if(value){
      setCustomers([]);
    }
    setDeleteAllC(false)
    
  }

  return (
<div className='content'>
      <h1 className='text-center text-white mt-3'>Code-LA</h1>
      <div className="container d-flex justify-content-around flex-wrap content-all my-3">
        <motion.div 
          className="col-12 col-md-5 form"
          initial='hidden'
          animate='show'
          variants={animationsForm}
        >
          <Form 
            customers={customers}
            setCustomers={setCustomers}
            customerE={customerE}
            setCustomerE={setCustomerE}
          />
        </motion.div>
        <AnimatePresence>
          <motion.div 
            className="col-12 col-md-6 box p-3"
            initial='hidden'
            animate='show'
            variants={animationsList}
          >
            {deleteAllC &&     
              <Alert 
                confirmDelete={confirmDelete}
              />
            }
            <List 
              customers={customers}
              deleteCustomer={deleteCustomer}
              setCustomerE={setCustomerE}
              deleteAll={deleteAll}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
