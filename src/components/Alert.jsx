import React from 'react'

const Alert = () => {
  return (
    <div className="alert alert-danger alert-dismissible fade show position-absolute w-100" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
</div>

  )
}

export default Alert