


function index (req, res) {
    res.render('index' , {
        title: 'Home',
        titlepag: 'Pagina Inicial'
    })  
}


module.exports = {
    index,
}