import React from 'react'

const Alert = () => {
  return (
    <div 
      className="alert alert-bg" 
      role="alert"
    >
      <h5 className="alert-heading text-center">Are you sure?</h5>
      <hr />
      <p className="alert-text">If you delete this information, it cannot be recovered.</p>
      <div className="col-12 d-flex justify-content-around">
        <button
            type="button"
            className="btn btn-success col-5"
            onClick={() => confirmDelete(true)}
          >Confirm</button>
        <button
          type="button"
          className="btn btn-danger col-5"
          onClick={() => confirmDelete(false)}
        >Cancel</button>
      </div>
    </div>
  )
}

export default Alert