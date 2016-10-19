import axios from 'axios'

export default {

/**
 * Get the latest foreign exchange reference rates in JSON format. - See http://fixer.io/
 *
 * @return {Object} An object containing currencies as properties and their amount equal to 1 EUR as a value.
 */
  getCurrenciesConversion () {
    return axios.get('https://api.fixer.io/latest')
      .then(currencies => {
        currencies.data.rates['EUR'] = 1
        return currencies.data.rates
      })
      .catch(err => console.warn('Error in getCurrenciesConversion', err))
  }
}
