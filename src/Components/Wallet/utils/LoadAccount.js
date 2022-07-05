// import StellarSdk from 'stellar-sdk'

const server = new StellarSdk.Server('https://horizon-testnet.stellar.org/')

const loadAccount = publicKey => {
 
    //Cargamos la cuenta a traves del sdk de Stellar
    const account = server.loadAccount(publicKey)

    return account

}

export default loadAccount