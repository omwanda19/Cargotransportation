function isloggedin(){
    if(req.isauthenticated())
    return next();
    res.redirect('/login')
}
