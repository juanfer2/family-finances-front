import React from 'react'
import { NavLink } from 'react-router-dom'

interface List {
  children: React.ReactNode
}

function List({ children }: List) {
  return <div className="list">{children}</div>
}

export default List
