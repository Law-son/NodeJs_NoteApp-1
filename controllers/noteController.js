var bodyParser = require('body-parser');

var data = [{title: 'pray today', body: 'spend time to pray'}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){

    app.get('/note', function(req, res){
        res.render('note', {notes: data});
    });

    app.post('/note', urlencodedParser, function(req, res){
        data.push(req.body);
        res.json(data);
    });

    // app.delete('/note/:title/:body', function(req, res){
    //     console.log('Note Deleted');
    //     data = data.filter(function(note){
    //         return note.title.replace(/ /g, '-') !== req.params.title
    //          && note.body.replace(/ /g, '-') !== req.params.body;
    //     });
    //     res.json(data);
    // });

}