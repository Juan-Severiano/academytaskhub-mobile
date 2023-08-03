import { Alert } from 'react-native'

const server = 'https://academy-task-hub.onrender.com'
const access = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkwOTMzOTg0LCJpYXQiOjE2OTA5MzAzODQsImp0aSI6IjVmNzMyYjdjNjIzMTRmOWRiMDk1Y2UxODE5NDlkN2MyIiwidXNlcl9pZCI6M30.DnoNC4-g-njKgBIrATtk3_yyKnvPyYu5V7rWMSZvj9k'

function setAccess(access) {
  return `Bearer ${access}`
}

function showError(error) {
  Alert.alert('Ops! Ocorreu um problema', `Mensagem ${error}`)
}

function showSuccess(msg) {
  Alert.alert('Sucesso!', msg)
}

const connectRefresh = async () => {
  console.clear();
  const headers = {
    'Content-Type': 'application/json',
  };
  const body = JSON.stringify({
    "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5MDkzNjA3OCwiaWF0IjoxNjkwODQ5Njc4LCJqdGkiOiI2OTNmNmEwMmNkYTc0YzEzYmY1YjM1MWJhODZhMzBjMCIsInVzZXJfaWQiOjN9.Yu6Tt2C4xc9INgL1zPBYlJ5MNoWAhPs13p6tah-67pw"
  });
  const config = {
    method: 'post',
    headers: headers,
    body: body
  };
  const response = await fetch(
    'https://academy-task-hub.onrender.com/auth/api/token/refresh/',
    config
  );

  const json = await response.json();

  console.log('STATUS', response.status);
  console.log(json);
}

async function firstConnection(username, password) {
  console.clear();
  const headers = {
    'Content-Type': 'application/json',
  };
  const body = JSON.stringify({
    "username": username,
    "password": password
  });
  const config = {
    method: 'POST',
    headers: headers,
    body: body
  };
  const response = await fetch(
    'https://academy-task-hub.onrender.com/auth/api/token/',
    config
  );

  const json = await response.json();

  console.log('STATUS', response.status);
  console.log(json.access);
}

export { server, showError, showSuccess, access, connectRefresh, firstConnection, setAccess }
