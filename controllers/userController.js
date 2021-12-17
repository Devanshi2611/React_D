//data we want to pass to frontendd

exports.userController = (req,res) =>{
    res.json({
        userList: ["user1", "user2"]
    })
}