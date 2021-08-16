import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getProject } from '../../../../flux/actions/projects/getProject.action'

export const useDetailProject = () => {
  const dispatch = useDispatch()
  const state: any = useSelector((state: any) => state)
  const { getProjectReducer } = state
  const { id }: any = useParams()

  useEffect(() => {
    const startGetProject = (id: number) => dispatch(getProject(id))
    startGetProject(parseInt(id))
  }, [])

  return { getProjectReducer }
}
