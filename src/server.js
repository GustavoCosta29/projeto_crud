
const { resolve4 } = require('dns')
const express = require('express')
const path = require('path')

const app = express()


// aplicando template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


//informando diretorio views
app.use(express.static(path.join(__dirname, 'public')))


// permitindo receber arquivo post de formulário
app.use(express.urlencoded({ extended: true}))


// criando rota
app.get('/', (req, res) => {
    res.render('index' , {
        title: 'titulo teste'
    })
})


// 404 error
app.use((req, res) =>{
    res.send('Página nao encontrada!')
})


// criando servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`server listening on the port ${port}`))