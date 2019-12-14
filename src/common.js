import { Alert, Platform } from 'react-native'

const server = Platform.OS === 'ios' ?
    'http://18.221.220.204:3000' : 'http://18.221.220.204:3000'

function showError(err){
    Alert.alert('Ops! Ocorreu um Problema!', `Mensagem: ${err}`)
}

export { server, showError }