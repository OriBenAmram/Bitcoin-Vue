import axios from 'axios'

import { localStorageService } from './storage.service'

export const bitcoinService = { getRate, getTradeVolume, getAvgBlockSize, getMarketPrice }

async function getRate(value) {
    const rateFromStorage = localStorageService.loadFromLStorage('rate')
    if (rateFromStorage) return rateFromStorage
    const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${value}`)
    localStorageService.saveToLStorage('rate', res.data)
    return res.data
}

async function getTradeVolume() {
    return await _getCharts('trade-volume')
}

async function getAvgBlockSize() {
    return await _getCharts('avg-block-size')
}

async function getMarketPrice() {
    return await _getCharts('market-price')
}

async function _getCharts(chart) {
    const chartFromStorage = localStorageService.loadFromLStorage(chart)
    if (chartFromStorage) return chartFromStorage
    const res = await axios.get(`https://api.blockchain.info/charts/${chart}?timespan=5months&format=json&cors=true`)
    localStorageService.saveToLStorage(chart, res.data)
    return res.data
}
