/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
const isAdmin = false
const isVerifiedUser = false
const hasSpecialPermission = true
const hasTemporaryPass = false



let isAccess

// your code
// console.log(isAccess); 
isAccess = false

if (false) {
  console.log('hi');
}

const isNotAdmin = false

// const isAdmin = !isNotAdmin

if (isAdmin) {
  console.log('delete user')
}
// if (isAdmin === true) {
if (isAdmin || hasSpecialPermission) {
  if (hasSpecialPermission === true) { isAccess = true }
  if (hasTemporaryPass === true) { isAccess = true }
}

// if (isVerifiedUser === false) {
if (!isVerifiedUser) {
  if (hasSpecialPermission === true) { isAccess = true }
  if (hasTemporaryPass === true) { isAccess = true }
}