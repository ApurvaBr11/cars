import React from 'react'

function Navnbar() {
  return (
    <div>
      <div className="flex justify-between items-center px-20 py-4 fixed w-screen top-0 border-b z-50 border-gray-600 bg-white">
        <p>Logo</p>
        <div className="flex justify-center items-center gap-6">
            <p>Inventary</p>
            <p>OEMs</p>
            <p>Login</p>
        </div>
      </div>
    </div>
  )
}

export default Navnbar
