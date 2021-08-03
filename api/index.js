const express = require('express')
const servidor = express()

servidor.get(
    '/', (req, res, next) => {
        return res.send(
            {
                'mensagem': 'API em execução'
            }
        )
    }
)

servidor.listen(3000, () => {
    console.log('Servidor funcionando')
})

