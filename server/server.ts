import e from "express";

const app = e();

app.use(e.json())

const posts: any[] = [];

app.get("/posts", (req, res) => {
  res.send({ posts });
})

app.post("/posts", (req, res) => {
  const post = req.body;
  res.sendStatus(200);
})

app.listen(3000);