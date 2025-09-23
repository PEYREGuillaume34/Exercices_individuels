
// //  Function qui passe de Index à Order

// function enterName() {
//     document.querySelector('#validate').addEventListener('click', (e) => {
//       e.preventDefault();

//       let prenom = document.querySelector("#inputName").value;


//       if (prenom.length === 0) {
//         document.querySelector('.error-message').style.display = 'block';
//       } else {
//         window.location.href = "pageOrder.html";

//       }
//     });
//   }

//   enterName()




//  async function fetchMenus() { 
//       try {        
//       const res = await fetch(`http://localhost:3000/menu`);        
//       const menus = await res.json();                        
//       console.log(menus)      } 
//       catch (err) {        
//       console.error("Erreur :", err);      
//       }    
//       }



// front.js

const validateBtn = document.querySelector("#validate");
const orderDiv = document.querySelector("#order");
const nameInput = document.querySelector("#inputName");



document.addEventListener("DOMContentLoaded", () => {
  if (validateBtn) {
    // On est sur index.html
    handleIndexPage();
  } else if (orderDiv) {
    // On est sur pageOrder.html
    handleOrderPage();
  }
});


function handleIndexPage() {
  validateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let prenom = nameInput.value;

    if (prenom.length === 0) {
      alert("Merci d'entrer un prénom !");
    } else {
      // On garde le prénom pour la page suivante
      localStorage.setItem("prenom", prenom);
      // Redirection vers la page de commande
      window.location.href = "pageOrder.html";
    }
  });
}

async function handleOrderPage() {
  // Affiche le prénom dans le titre
  const prenom = localStorage.getItem("prenom") || "invité";
  document.querySelector("h3").textContent = `Bonjour ${prenom}`;

  try {
    const res = await fetch("http://localhost:3000/menu");
    const menus = await res.json();
    displayMenus(menus);
    console.log("menus", menus);
  } catch (err) {
    console.error("Erreur lors du chargement du menu :", err);
    orderDiv.innerHTML += `<p style="color:red;">Impossible de charger le menu 😢</p>`;
  }
}

function displayMenus(menus) {
  // Supprime tout ancien contenu de plats
  const oldMenus = orderDiv.querySelectorAll(".menuCard");
  oldMenus.forEach((m) => m.remove());


  menus.forEach((plat) => {
    const card = document.createElement("div");
    card.classList.add("menuCard");

    card.innerHTML = `
      <div>${plat.image || "🍽️"}</div>
      <span>
        <h4>${plat.plate}</h4>
        <p>${plat.description}</p>
        <button class="command" data-id="${plat.id}">commander</button>
      </span>
    `;

    // Gestion du clic sur "commander"
    card.querySelector(".command").addEventListener("click", () => {
      commanderPlat(plat)
      window.location.href = `\pages\pagePlates.html`
   
    });

    orderDiv.appendChild(card);
  });
}

async function commanderPlat(plat) {
  try {
    let username = localStorage.getItem('prenom')

    const resp = await fetch("http://localhost:3000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: plat.id,
        plate: plat.plate,
        clientName: username,
      }),
    });

    const data = await resp.json();
    if (!data.ok) throw new Error(data.error);
    alert(`✅ ${data.message}`);
    console.log('data',data)
  }
  catch (e) {
    alert("❌ Impossible d'envoyer la commande.");
    console.error(e);
  }
}





