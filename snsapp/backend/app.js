const express = require('express');

const app = express();

app.use ('/api/posts', (req,res,next) => {
const posts = [
{id: "23",
title : " Big Brain",
content : "This is big brain time",
},

{id: "24",
title : " Small Brain",
content : "This is small brain time",
}

];
    res.status(200).json({
        message : "Data has been Fetched",
        posts : posts
    }); 
});

module.exports= app;