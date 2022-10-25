import React from 'react';
import { delay, motion } from "framer-motion";

const animations = {
  initial: {scale: 0},
  animate: {scale: 1},
  exit: {scale: 0},
  // show:{
  //     transition: {
  //         delay: 1,
  //         duration: 1,
  //         ease: "easeInOut",
  //     }
  // }
}

const Alert = ({confirmDelete}) => {
  return (
    <motion.div 
      className="alert alert-bg" 
      role="alert"
      {...animations}
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
    </motion.div>
  )
}

export default Alert