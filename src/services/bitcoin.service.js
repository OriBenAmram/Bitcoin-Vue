import axios from 'axios';
export const bitcoinService = {
    getRate,
    getMarcketPrice,
    getTradeVolume,
    getAvgBlockSize,
    getWalletUsers,
    // getConfirmedTransactions
}



async function getRate(coin) {
    try {
        return 0.05
        const { data } = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coin}`)
        return data
    } catch {
        console.error('error with getRate')
    }
}

async function getMarcketPrice(month) {
    const { data } = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=${month}months&format=json&cors=true`)
    return data
}

async function getTradeVolume(month) {
    const { data } = await axios.get(`https://api.blockchain.info/charts/trade-volume?timespan=${month}months&format=json&cors=true`)
    return data
}

async function getAvgBlockSize(month) {
    const { data } = await axios.get(`https://api.blockchain.info/charts/avg-block-size?timespan=${month}months&format=json&cors=true`)
    return data
}

async function getWalletUsers(month) {
    const { data } = await axios.get(`https://api.blockchain.info/charts/my-wallet-n-users?timespan=${month}months&format=json&cors=true`)
    return data
}

