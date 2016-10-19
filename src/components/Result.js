import React from 'react'

export default props => {
  if (props.amount === '') return <p>Add an amount :)</p>

  const res = props.amount * props.currencies[props.selectedCurrencies[1]] / props.currencies[props.selectedCurrencies[0]]
  return (
    <p className='result'>
      {`${props.amount} ${props.selectedCurrencies[0]} = `}
      <b>{res.toFixed(2)}</b>
      {` ${props.selectedCurrencies[1]}`}
    </p>
  )
}
