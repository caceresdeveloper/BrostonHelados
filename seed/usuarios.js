import bcrypt from 'bcrypt'

const usuarios = [
    {
        nombre: 'sergio',
        email: 'sergio.ballen@uptc.edu.co',
        confirmado: 1,
        password: bcrypt.hashSync('ser12345', 10)
    },
    {
        nombre: 'diego',
        email: 'diego.caceres02@uptc.edu.co',
        confirmado: 1,
        password: bcrypt.hashSync('12345678', 10)
    },
    {
        nombre: 'fandiño',
        email: 'fandiño@uptc.edu.co',
        confirmado: 1,
        password: bcrypt.hashSync('fandiño10', 10)
    }
]

export default usuarios