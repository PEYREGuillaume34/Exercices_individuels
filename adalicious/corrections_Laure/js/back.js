import express from "express";
import menuList from "./menuList.json" with { type: "json" };
import cors from "cors";



const app = express();

app.use(express.json());
app.use(cors({ origin: "http://127.0.0.1:5500"}));


app.get("/", (req, res) => {  
res.send("Accueil");
});

app.get("/menu", (req, res) => {    
res.json(menuList);
});

app.get("/menu/:id", (req, res) => {  
const id = Number(req.params.id);  
const plat = menuList.find(p => p.id === id);  
if (!plat) return res.status(404).json({ error: `Plat id=${id} non trouvé` });  
res.json(plat);
});

app.post("/orders", (req, res) => {  
console.log("[POST /orders] body reçu:", req.body);  
const { id, plate, clientName } = req.body;    
if (!id || !plate || !clientName) {    
return res.status(400).json({ error: "Champs manquants ou invalides" });  
}  
console.log(`[COMMANDE REÇUE] id=${id} | plat="${plate}" | client="${clientName}"`);  
return res.status(201).json({ ok: true, message: `Commande reçue ${plate} pour ${clientName}`}); 
 });

app.listen(3000, () => {  console.log("Serveur lancé sur http://localhost:3000");});
