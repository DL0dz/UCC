import React from 'react'
import Converter from '../components/Converter'
import fixerHelpers from '../utils/fixerHelpers'

const Home = React.createClass({
  getInitialState () {
    return {
      amount: '1',
      currencies: {},
      selectedCurrencies: ['GBP', 'EUR'],
      isLoading: true
    }
  },
  handleUpdateAmount (e) {
    const amount = e.target.value
    const isNumericChar = /^[0-9]+$/.test(amount)

    if (amount === '' || isNumericChar) {
      this.setState({
        amount
      })
    }
  },
  handleUpdateCurrency (e) {
    const pos = e.target.dataset.position
    const newCurrency = e.target.value

    this.setState({
      selectedCurrencies: [
        pos === 'left' ? newCurrency : this.state.selectedCurrencies[0],
        pos === 'right' ? newCurrency : this.state.selectedCurrencies[1]
      ]
    })
  },
  handleInverseUCC (e) {
    e.preventDefault()
    const [left, right] = this.state.selectedCurrencies
    this.setState({
      selectedCurrencies: [right, left]
    })
  },
  componentDidMount () {
    fixerHelpers.getCurrenciesConversion()
      .then(currencies => {
        this.setState({
          isLoading: false,
          currencies
        })
      })
  },
  render () {
    return (
      <div className='App-home'>
        <Converter
          amount={this.state.amount}
          currencies={this.state.currencies}
          selectedCurrencies={this.state.selectedCurrencies}
          isLoading={this.state.isLoading}
          onUpdateAmount={this.handleUpdateAmount}
          onUpdateCurrency={this.handleUpdateCurrency}
          onInverseUCC={this.handleInverseUCC}
           />
      </div>
    )
  }
})

export default Home
