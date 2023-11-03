const sessionid = new Map();

function setUser(id, user){
    sessionid.set(id, user);
}

function getuser(id){
    return sessionid.get(id)
}

module.export = {
    setUser, getuser
}



