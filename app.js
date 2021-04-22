const exprs = require("express");
const app = exprs();
const path = require("path")
const hbs = require("hbs")
 
const { log } = require("console");
const port = process.env.PORT ||600

app.use(exprs.static("css")) 
 
const templat = path.join(__dirname, "./templates/templat")
const partials = path.join(__dirname, "./templates/partials")
 
 
 
app.set("view engine", "hbs");
app.set("views", templat)
hbs.registerPartials(partials)
 

app.get ("/", (req, res) => {
  res.render("index")
})
app.get("/weather", (req, res) => {
  res.render("weather")
})
app.get ("/about", (req, res) => {
  res.render("about")
});
app.get("/about/", (req,res) => {
  res.send("erro page")
})
app.get("/contact", (req, res) => {
  res.render("contact")
})


app.listen(port, () => {
  console.log(`${port} run`);
})