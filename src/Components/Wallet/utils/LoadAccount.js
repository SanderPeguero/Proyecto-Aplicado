// import StellarSdk from 'stellar-sdk'

const server = StellarSdk.Server('https://horizon-testnet.stellar.org/')

// const window = window
const LoadAccount = async publicKey => {
 
    //Cargamos la cuenta a traves del sdk de Stellar
    // const account = await  
    console.log(server)

    // return account

}

export { LoadAccount }