//require the redis library in Node.js
var redis = require("redis");

//creating the redis client object
var redisClient = redis.createClient();

//when a user connects to our sever
wss.on('connection', function(connection) {
   console.log("user connected");

   //when server gets a message from a connected user
   connection.on('message', function(message) {

      var data;
      //accepting only JSON messages
      try {
         data = JSON.parse(message);
      } catch (e) {
         console.log("Invalid JSON");
         data = {};
      }

      //check whether a user is authenticated
      if(data.type != "login") {

         //if user is not authenticated
         if(!connection.isAuth) {
            sendTo(connection, {
               type: "error",
               message: "You are not authenticated"
            });
            return;
         }
      }

      //switching type of the user message
      switch (data.type) {
         //when a user tries to login
         case "login":
            console.log("User logged:", data.name);
            //get password for this username from redis database

            redisClient.get(data.name, function(err, reply) {
               //check if password matches with the one stored in redis
               var loginSuccess = reply === data.password;

               //if anyone is logged in with this username or incorrect password
                  then refuse
               if(users[data.name] || !loginSuccess) {
                  sendTo(connection, {
                     type: "login",
                     success: false
                  });
               } else {
                  //save user connection on the server
                  users[data.name] = connection;
                  connection.name = data.name;
                  connection.isAuth = true;

                  sendTo(connection, {
                     type: "login",
                     success: true
                  });
               }
            });

            break;
      }
   });

}

//...
//*****other handlers*******


//check whether a user is authenticated
if(data.type != "login") {

   //if user is not authenticated
   if(!connection.isAuth) {
      sendTo(connection, {
         type: "error",
         message: "You are not authenticated"
      });

      return;
   }
}