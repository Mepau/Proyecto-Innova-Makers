var express = require("express");
var router = express.Router();
var path = require('path')
const multer = require("multer")

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './client/public/')
  },
  filename: function (req, file, cb) {
    cb(null, "archivolocal" + path.extname(file.originalname)) //Appending extension
  }
})

var upload = multer({ storage: storage });

const data = [
  {
    description: "Protesis de mano mecanica",
    img: "https://biotechmagazineandnews.com/wp-content/uploads/2019/09/protesis-mano.jpg",
    business: "Interbionic",
    rating: 4,
    amputationTags: ["mano", "mano izquierda"],
    functionalityTags: ["Funcionalidad limitada"],
  },
  {
    description: "Protesis dental",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGJ9g_1Lhnd191fMr32QzIZWIsaFJVvALiA&usqp=CAU",
    rating: 2.5,
    business: "Hospital Dontologico",
    amputationTags: ["Dientes", "Removivle parcialmente"],
    functionalityTags: ["Completa funcionalidad"],
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(req.query);
  const { query="", option="Todos" } = req.query;

  resArray = data
    .filter((device, index) => {
      if (option === "Todos") {
        if (query === "") return device;
        if (
          device.description.toLowerCase().includes(query.toLowerCase()) ||
          device.functionalityTags.find((element) => {
            if (element.includes(query.toLowerCase())) return true;
          }) ||
          device.amputationTags.find((element) => {
            if (element.includes(query.toLowerCase())) return true;
          })
        )
          return device;
      } else if (option === "Funcionalidad") {
        if (query === "") return device;
        else if (
          device.description.toLowerCase().includes(query.toLowerCase()) ||
          device.functionalityTags.find((element) => {
            if (element.includes(query.toLowerCase())) return true;
          })
        )
          return device;
      } else if (option === "Amputacion") {
        if (query === "") return device;
        else if (
          device.description.toLowerCase().includes(query.toLowerCase()) ||
          device.amputationTags.find((element) => {
            if (element.includes(query.toLowerCase())) return true;
          })
        )
          return device;
      }
    });
  console.log(resArray)
  res.json(JSON.stringify(resArray));
  return res.status(200).end();
});

router.post("/devices/new" , upload.single("file") ,(req, res, next) =>  {

  newIdea = {
    description: req.body.description,
    img: req.file.path,
    business: req.body.business,
    rating: 0,
    amputationTags: req.body.amputationTags.split(" "),
    functionalityTags: req.body.functionalTags.split(" ")
  }

  data.push(newIdea)
  
  res.json(JSON.stringify(data));
  return res.status(200).end();
})

module.exports = router;
