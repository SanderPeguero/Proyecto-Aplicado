// import StellarSdk from 'stellar-sdk'

const server = window.StellarSdk.Server('https://horizon-testnet.stellar.org/')

// const window = window
const LoadAccount = async publicKey => {
 
    //Cargamos la cuenta a traves del sdk de Stellar
    const account = await server.loadAccount(publicKey)

    return account

}

export { LoadAccount }