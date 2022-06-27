import axios from 'axios'

import { loadFromStorage, saveToStorage } from './storage.service'

export const bitcoinService = { getRate, getTradeVolume, getAvgBlockSize, getMarketPrice }

async function getRate(value) {
    const rateFromStorage = loadFromStorage('rate')
    if (rateFromStorage) return rateFromStorage
    const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${value}`)
    saveToStorage('rate', res.data)
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
    const chartFromStorage = loadFromStorage(chart)
    if (chartFromStorage) return chartFromStorage
    const res = await axios.get(`https://api.blockchain.info/charts/${chart}?timespan=5months&format=json&cors=true`)
    saveToStorage(chart, res.data)
    return res.data
}
