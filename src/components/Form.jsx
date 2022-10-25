import React, {useState, useEffect} from 'react';



const Form = ({
    customers,
    setCustomers,
    customerE,
    setCustomerE
}) => {

    //state
    const [data, setData] = useState({
        name: '',
        lastName: ''
    });
    const {name, lastName} = data;

    useEffect(() => {
        if(Object.keys(customerE).length > 0){
            //
            setData({
                name: customerE.name,
                lastName: customerE.lastName,
            })
        }
    }, [customerE]);

    //functions
    const generatedID = () =>{
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);
        return random + fecha;
    }
    const getData = (e) => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        });
    }

    const sendData = (e) => {
        e.preventDefault();
        if([name, lastName].includes('')){
            alert('All fields are required');
            return;
        }
        if(customerE.id){
            data.id = customerE.id
            const customersUpdate = customers.map(customerState => customerState.id === customerE.id ? data : customerState);
            setCustomers(customersUpdate);
            setCustomerE({});
            setData({
                name: '',
                lastName: '',
            }); 
            return;
        }else{
            data.id = generatedID();

            setCustomers([
                ...customers, data
            ]);
            setData({
                name: '',
                lastName: '',
            })
        }

        
    }
  return (
    <div className='p-2'>
        <form
            onSubmit={sendData}
            className="d-flex flex-column"
        >
        <h2 className='text-center '>CRUD</h2>
        <div className='campo'>
            <label htmlFor="name">Name</label>
            <input 
                type="text" 
                name='name'
                onChange={getData}
                value={name}
                className="form-control"
                id='name'
            />
        </div>
        <div className='campo'>
            <label htmlFor="lastname">Last Name</label>
            <input 
                type="text" 
                name='lastName'
                onChange={getData}
                value={lastName}
                className="form-control"
                id='lastname'
            />
        </div>
        <input 
            type="submit" 
            value={customerE.id ? "Save Changes" : "Add"}
            className="form-control btn btn-success btn-add"
        />
        </form>
    </div>
  )
}

export default Form