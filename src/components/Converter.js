import React, { PropTypes } from 'react'
import Result from '../components/Result'
import UCCSelector from '../components/UCCSelector'

const Converter = props => {
  return props.isLoading
    ? <p>Loading</p>
    : <div>
      <form>
        <input
          type='text'
          placeholder='amount'
          value={props.amount}
          onChange={props.onUpdateAmount}
          autoFocus />
        <UCCSelector {...props} position='left' />
        <button className='inverseUCC' onClick={props.onInverseUCC}>↔️</button>
        <UCCSelector {...props} position='right' />
      </form>
      <Result {...props} />
    </div>
}

Converter.propTypes = {
  amount: PropTypes.string.isRequired,
  currencies: PropTypes.object.isRequired,
  selectedCurrencies: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onUpdateAmount: PropTypes.func.isRequired,
  onUpdateCurrency: PropTypes.func.isRequired,
  onInverseUCC: PropTypes.func.isRequired
}

export default Converter
