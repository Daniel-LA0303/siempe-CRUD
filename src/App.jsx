import { useState } from 'react';
import Alert from './components/Alert';
import Form from './components/Form';
import List from './components/List';


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
      <div className="container d-flex justify-content-around flex-wrap content-all">
        <div 
          className="col-12 col-md-5 form"
          initial='hidden'
          animate='show'
        >
          <Form 
            customers={customers}
            setCustomers={setCustomers}
            customerE={customerE}
            setCustomerE={setCustomerE}
          />
        </div>
        <div 
          className="col-12 col-md-6 box p-3"
          initial='hidden'
          animate='show'
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
        </div>
      </div>
    </div>
  )
}

export default App
