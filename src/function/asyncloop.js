function loadUsers(userIds, load, done) {
    var users = []
    var complete = 0;
    userIds.forEach(function(id, index){
        load(id, function(user){
            complete++;
            users[index] = user;
            if (complete == userids.length) {
                done(users);
            }
        })
    })
}

module.exports = loadUsers;