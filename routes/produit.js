var express = require('express');
var produit = require('../model/produit');
var CategoryProduct = require('../model/categorieProduit');
var router = express.Router();

const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        const newFileName = Date.now() + "_" + file.originalname;
        cb(null, newFileName);
    }
});

const upload = multer({ storage });

/* GET product listing. */
router.get('/', function(req, res) {
  //res.send('from produit ');
  produit.find((err, data)=> {
      res.json(data);
  })
});

router.get('/get/:id', async(req, res) =>{
    const { id } = req.params;
    res.json( await produit.findById(id));
});

//verifyCategoryIdentity: async (req, res, next) => {
//    const { id } = req.headers;
//    if (!id) {
//        return res.status(401).json();
//    }

//    const categoryProduct = await CategoryProduct.findById(id);
//    if (!categoryProduct) {
//        return res.status(404).json();
//    }

//    req.categoryProduct = categoryProduct;
//    next();
//}
/* POST  product . */
router.post('/addProduct',async(req,res)=>
{   
    //const { id } = req.params;
    var id = req.headers['id']; 
    console.log("host>>>>>>", id)
    //categoryProduct=await CategoryProduct.findById(id);
    //console.log(">>>>>>>>> categoryProduct",await CategoryProduct.findById(id));

    //const { id } = req.headers;
    console.log(">>>>>> id : "+id);
    const categoryProduct = await CategoryProduct.findById(id);
    console.log("category>>><"+categoryProduct);
    var f= new produit({
        nomProd: req.body.nomProd,			
        //image : req.file.filename,
        prix: req.body.prix,		
        description: req.body.description,	
        quantiteProd: req.body.quantiteProd,
        categorieProduit : categoryProduct,
        isActive: req.body.isActive
      });
      //f.categorieProduit=categoryProduct;
      f.save();
     // res.send("Ajout effectué avec succes")
      res.send(f);
      console.log("produit ajouté avec succes ");
      console.log("<<<<<<<<<<<<<<<<>>>>>>>>>>>");
      console.log(f);

});
/* POST  product . */
router.post('/add/:id',async(req,res)=>
{   console.log(">>>>>>>>>");
    console.log(req.body);
    upload.single('image');
    //verifyCategoryIdentity;
    //const categoryProduct = req.categorieProduit; 
    const { id } = req.params;
    console.log(">>>>>>>>>");
    categoryProduct=await CategoryProduct.findById(id);
    console.log(">>>>>>>>>"+categoryProduct);
    var f= new produit({
    //  dateRecp : req.body.dateRecp
    //dateAjout: {type:Date,default:Date.now},	
    nomProd: req.body.nomProd,			
    image : req.file.filename,
    prix: req.body.prix,		
    description: req.body.description,	
    quantiteProd: req.body.quantiteProd,
    categorieProduit : categoryProduct,
	isActive: req.body.isActive
  });
  console.log("avant");

  f.save();
  res.send("Ajout effectué avec succes")
  console.log("produit ajouté avec succes ");
  console.log(f);
});

router.delete('/delete/:id', async(req, res) =>{
    const { id } = req.params;
    await produit.findByIdAndDelete(id);
    console.log({ id });
    //res.redirect("/produit")
    res.send("Suppression effectué avec succes")
});

  
module.exports = router;