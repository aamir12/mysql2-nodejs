const enableCORS = (req, res, next) => {
    var originReq = req.get('origin'); 
    //console.log(originReq); //frontend url
    //console.log(req.originalUrl) //api endpoint
    let allowedUrl = ['http://localhost:4200'] //all allowed origin
    if(allowedUrl.indexOf(originReq) !==-1 || process.env.NODE_ENV ==='development'){
        //var host = req.get('host'); 
        //console.log(host) //backend url localhost:5000
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader(
          'Access-Control-Allow-Methods',
          'OPTIONS, GET, POST, PUT, PATCH, DELETE'
        );
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();
    }else{
        const error = new Error(`Not Found - ${req.originalUrl}`)
        next(error)
    }
    
}

module.exports = enableCORS;