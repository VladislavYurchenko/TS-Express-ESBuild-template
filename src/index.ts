import express from "express";

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  console.log("welcome");
  res.send('Hello World!')
})

// start app

function start() {
  try {
    app.listen(8000, ()=>{
     console.log('server ready');
    });
  } catch (error) {
    console.error(error);
  }
}

start();
