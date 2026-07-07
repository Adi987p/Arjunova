import React from 'react'
import { Link } from 'react-router-dom'
import NovaMark from '../components/NovaMark.jsx'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] grid place-items-center text-center px-6">
      <div>
        <NovaMark className="w-12 h-12 mx-auto" animate />
        <h1 className="mt-6 font-display font-extrabold text-3xl">Off target.</h1>
        <p className="mt-3 text-mist">That page doesn't exist — let's get you back on course.</p>
        <Link to="/" className="mt-6 inline-flex items-center rounded-full bg-nova text-[#1B2130] font-semibold px-6 py-3">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
