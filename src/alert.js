import React, { useEffect } from 'react';

function Alert({ msg, type, showAlert }) {
  useEffect(() => {
    let timeOut = setInterval(() => {
      showAlert();
    }, 3000);
    return () => clearInterval(timeOut);
  }, []);

  return <p className={`alert alert-${type}`}>{msg}</p>;
}

export default Alert;
