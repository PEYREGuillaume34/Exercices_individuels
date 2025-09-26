import express from "express";
// import menuList from "./menuList.json" with { type: "json" };
import cors from "cors";

import 'dotenv/config';
import postgres from "postgres";


const sql = postgres(process.env.DATABASE_URL, {
    ssl: 'require',
});

// async function getMenus(){
//     try {
//     const menu = await sql `SELECT plate_name, description, image FROM menus`;
//     console.log(menu);
//     }
//     catch (err){
//         console.error('connexion échouée', err);
//     }
// }

// getMenus();

const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send("Accueil");
});



// retourne id + champs utiles
app.get("/menu", async (req, res) => {
    try {
        const menu = await sql`SELECT * FROM menus`;
        console.log(' JE SUIS DANS MENU',menu);
        res.json(menu);
    }
    catch (err) {
        console.error('connexion échouée', err);
    }

});

// liste des commandes (simple)
app.get("/orders", async (req, res) => {
    try {
        const orders = await sql`SELECT * FROM orders ORDER BY id DESC`;
        console.log('je veux voir',orders);
        res.json(orders);
    }
    catch (err) {
        console.error('connexion échouée', err);
        res.status(500).json({ error: "Erreur serveur" });
    }
});

// création d'une commande : accepte plate_id OU plate_name
app.post("/orders", async (req, res) => {
    console.log("[POST /orders] body reçu:", req.body);
    const { id, plate_name, clientName } = req.body;
    if (!id || !plate_name || !clientName) {
        console.log('Champs manquants ou invalides', !id, !plate_name, !clientName)
        return res.status(400).json({ error: "Champs manquants ou invalides" });
    }
    console.log(`[COMMANDE REÇUE] id=${id} | plat="${plate_name}" | client="${clientName}"`);
    return res.status(201).json({ ok: true, message: `Commande reçue ${plate_name} pour ${clientName}` });
});


// GET ET POST USERS
app.get("/users", async (req, res) => {
    try {
        const user = await sql`SELECT * FROM users`;
        console.log(user);
        res.json(user);
    }
    catch (err) {
        console.error('connexion échouée', err);
    }

});

app.post("/users", async (req, res) => {
    try {
        const { firstname } = req.body;
        console.log(firstname)
        console.log(req.body)
        if (!firstname) {
            return res.status(400).json({ error: "Champs manquants ou invalides" })
        }

        const rows = await sql`insert into users (firstname) VALUES ('${firstname}')`;

        res.json(rows);
    } catch (error) {
        console.log("erreur", error)
    }
})



app.listen(3000, () => { console.log("Serveur lancé sur http://localhost:3000"); });
