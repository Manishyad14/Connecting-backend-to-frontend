import express from 'express';

const app = express(); //

// app.get('/' ,(req, res) => {
//     res.send('Welcome');
// })

const port = process.env.PORT || 3000 ;


app.get('/api/jokes' ,(req, res) => {
     const jokes = [
        { id:1,
            name: 'Joke1',
            content:'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg'
        },
        { id:2,
            name: 'Joke2',
            content:'this is our first joke'
        },
        { id:3,
            name: 'Joke3',
            content:'this is our first joke'
        },
        { id:4,
            name: 'Joke4',
            content:'this is our first joke'
        },
        { id:5,
            name: 'Joke5',
            content:'this is our first joke'
        },
        { id:6,
            name: 'Joke6',
            content:'this is our first joke'
        }






     ];
     res.send(jokes);
})

app.listen(port,()=>{


    console.log(`Serve at http://localhost:${port}`);
})
 

