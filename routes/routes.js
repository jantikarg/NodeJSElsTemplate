

//Route handler for Home path
function homeFn(req, resp){
    resp.render('home.ejs', {title:'I Love my City',
                            headline:'Every city has its own beauty'});
}

//Route handler for city path
function cityFn(req, resp){
    var cityname = req.params.city;
    var titlevalue;
    var headlinevalue;

    if(cityname === 'newyork'){
        titlevalue = "New York";
        headlinevalue = "Bussiness capital of world!!";
    }else if(cityname === 'london'){
        titlevalue = "London";
        headlinevalue = "City of Thames!!";
    }else if(cityname === 'florida'){
        titlevalue = "Florida";
        headlinevalue = "The hottest state of USA!!";
    }else if(cityname === 'California'){
        titlevalue = "California";
        headlinevalue = "The beautiful state of USA!!";
    }

    resp.render('city.ejs', {title:titlevalue,
                            headline:headlinevalue});
}

module.exports.cityFn = cityFn;
module.exports.homeFn = homeFn;