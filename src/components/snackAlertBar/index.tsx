import React, { useState, useEffect } from 'react'
import { useSnakAlertBar } from './useSnakAlertBar'

import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  snackbarStyleViaContentProps: {
    backgroundColor: '#ffffff',
    color: '#353739',
  },
}

function SnackAlerBar({ classes, message }: any) {
  const { stateSnack } = useSnakAlertBar()
  const { vertical, horizontal, open } = stateSnack

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        ContentProps={{
          'aria-describedby': 'message-id',
          className: classes.snackbarStyleViaContentProps,
        }}
        resumeHideDuration={2000}
        message={message}
        key={vertical + horizontal}
      />
    </div>
  )
}

export default withStyles(styles)(SnackAlerBar)
