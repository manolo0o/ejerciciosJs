import {contrasenaValida} from './modulo/contrasenaValida.js'
import prompt from 'async-prompt'

let contraseña = await prompt ("Ingrese la contraseña: ");

console.log(contrasenaValida(contraseña))