import { useState, useEffect } from 'react'
import { SnackbarOrigin } from '@material-ui/core/Snackbar'

interface StateSnak extends SnackbarOrigin {
  open?: boolean
}

export const useSnakAlertBar = ({ open = false }: any) => {
  const [stateSnack, setStateSnack] = useState<StateSnak>({
    open: open,
    vertical: 'top',
    horizontal: 'center',
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setStateSnack({
        ...stateSnack,
        open: false,
      })
      return () => clearTimeout(timer)
    }, 6000)
  }, [])

  return { stateSnack }
}
