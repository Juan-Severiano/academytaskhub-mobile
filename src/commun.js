import { Alert } from 'react-native'

const server = 'https://academy-task-hub.onrender.com'

function showError(error) {
  Alert.alert('Ops! Ocorreu um problema', `Mensagem ${error}`)
}

function showSuccess(msg) {
  Alert.alert('Sucesso!', msg)
}

export { server, showError, showSuccess }
