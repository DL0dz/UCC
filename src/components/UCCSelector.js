import React from 'react'

export default props =>
  <select
    data-position={props.position}
    onChange={props.onUpdateCurrency}
    value={props.selectedCurrencies[props.position === 'left' ? 0 : 1]}>
    {Object.keys(props.currencies).map(currency => <option key={currency} value={currency}>{currency}</option>)}
  </select>
