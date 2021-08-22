import React from 'react'
import NumberFormat from 'react-number-format'

export const formatValue = (value: any) => {
  return (
    <NumberFormat
      value={value}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'$'}
    />
  )
}
