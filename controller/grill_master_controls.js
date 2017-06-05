var express = require('express');
var router = express.Router();
var query = require('../models');


router.get('/', function(req, resp) {
    query.burgers_list.findAll({}).then(function(result) {
        resp.render('index', { eaten: result })
        return result;
    });
});


router.put('/:id', function(req, resp) {
    var id = req.params.id;
    query.burgers_list.update({
        burger_eaten: false},
        {where: {'id': id}
    });
    resp.redirect('/');
});


router.post('/:burger?', function(req, resp) {
    var popularBurger = req.params.burger;
    var burger = req.body.burger_type
    if (popularBurger) {
        query.burgers_list.create({
            ordered_burger: popularBurger,
            burger_eaten: true
        });
        resp.redirect('/');
    } else if (burger) {
        query.burgers_list.create({
            ordered_burger: burger,
            burger_eaten: true
        });
        resp.redirect('/');
    } else {
        resp.redirect('/');
    }
});

router.delete('/:id', function(req, resp) {
    var id = req.params.id;
    query.burgers_list.destroy({
        where: {'id': id}
    });
    resp.redirect('/');
})


module.exports = router;
