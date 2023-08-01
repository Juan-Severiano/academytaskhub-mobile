import { Alert } from 'react-native'

const server = 'https://academy-task-hub.onrender.com'
const access = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkwODU1NTI5LCJpYXQiOjE2OTA4NDk2NzgsImp0aSI6ImVlZDk5Yzc3NDA1MjQyZWQ5MmUwNGEzMjgzMDU0YWM5IiwidXNlcl9pZCI6M30._16sN9vLwuclGCL9ozHH9rVNJZxrXGSjyhkiK1-TTh0'

function showError(error) {
  Alert.alert('Ops! Ocorreu um problema', `Mensagem ${error}`)
}

function showSuccess(msg) {
  Alert.alert('Sucesso!', msg)
}

export { server, showError, showSuccess, access }
