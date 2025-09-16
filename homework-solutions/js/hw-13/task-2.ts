// Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
// если пароль соответствует следующим правилам:
//   - Пароль должен содержать хотя бы одну заглавную букву.
//   - Пароль должен содержать хотя бы одну букву в нижнем регистре.
//   - Пароль должен содержать хотя бы одну цифру.
//   - Пароль должен быть не менее 8 символов.
//   - Пароль не должен состоять из одних пробелов
// Функция должна возвращать false, если хотя бы одно из условий не выполнено.
function validatePassword(password: string): boolean {
const hasUpperCase = /[A-ZA-ЯЁ]/.test(password);
const hasLowerCase = /[a-zа-яё]/.test(password);
const hasDigit = /\d/.test(password);
const passwordLength = password.length >= 8;
const isNotIncludeSpaces = password.trim().length > 0; 

return hasUpperCase && hasLowerCase && hasDigit && passwordLength && isNotIncludeSpaces
}
