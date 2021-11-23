import React, { useEffect } from 'react';

function Alert({ msg, type, showAlert, list }) {
  useEffect(() => {
    let timeOut = setInterval(() => {
      showAlert();
    }, 3000);
    return () => clearInterval(timeOut);
  }, [list]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
}

export default Alert;
