import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getProjects } from '../../../flux/actions/projects/getProjects.action'

export const useProjects = () => {
  const dispatch = useDispatch()
  const state: any = useSelector((state: any) => state)
  const { getProjectsReducer } = state

  useEffect(() => {
    const startGetProjects = () => dispatch(getProjects())
    startGetProjects()
  }, [])

  return { getProjectsReducer }
}
