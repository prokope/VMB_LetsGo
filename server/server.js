const express = require("express")
const app = express()
app.use(express.json())

const cors = require("cors")
app.use(cors())

const user = {
  email: "teste@email.com",
  password: "1234567"
};

app.get("/", (req, res) => {
  res.send("Servidor funcionando")
})

app.post("/login", (req,res) => {
  const { email, password } = req.body;

  console.log(req.body)
  
  if (email == user.email && password == user.password)
  {
    return res.send("Login bem sucedido");
  }

  return res.status(401).send("Credenciais inválidas");

})

app.listen(3000, () => {
  console.log("Servidor rodando. Vambora!")
})
