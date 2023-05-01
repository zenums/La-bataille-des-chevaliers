
const button = document.querySelector('.play')
const peronnageNOm = document.querySelector('.nom-perso')
const peronnageClasse = document.querySelector('.classe-perso')
const peronnageSante = document.querySelector('.sante-perso')
const peronnageForce = document.querySelector('.force-perso')
const peronnageVitesse = document.querySelector('.vitesse-perso')
const ennemiNOm = document.querySelector('.nom-ennemi')
const ennemiSanté = document.querySelector('.sante-ennemi')
const ennemiDefense = document.querySelector('.defense-ennemi')
const resultat = document.querySelector('.resultat')



const personnage ={
    nom : "thibault",
    classe : "chevalier",
    santé : 100,
    force : 10,
    vitesse : 5,
    attaquer : function(ennemi){
        const degats = this.force - ennemi.defense
        if (this.santé == 0) {
            degats = 0;
        } else {
            ennemi.santé -= degats;
        }
        ennemi.attaquer(this)
        return{degats: degats }
    }
}

const ennemi ={
    nom : "sauron",
    santé : 100,
    defense : 5,
    attaquer : function(personnage){
        const degats = 20 - personnage.vitesse
        if (personnage.santé < 0) {
            personnage.santé = 0;
        } else {
            personnage.santé -= degats;
        }
        return{degats: degats }
    }
}

peronnageNOm.textContent = `nom : ${personnage.nom}`
peronnageClasse.textContent = `classe :  : ${personnage.classe}`
peronnageSante.textContent = `santé : ${personnage.santé}`
peronnageForce.textContent = `nom : ${personnage.nom}`
peronnageForce.textContent = `force : ${personnage.force}`
peronnageVitesse.textContent = `vitesse : ${personnage.vitesse}`
ennemiNOm.textContent = `nom : ${ennemi.nom}`
ennemiSanté.textContent = `santé : ${ennemi.santé}`
ennemiDefense.textContent = `defense : ${ennemi.defense}`

function attaque(){
    const degatsPerso = personnage.attaquer(ennemi).degats
    const degatsEnnemi = ennemi.attaquer(personnage).degats
    resultat.textContent =`${personnage.nom} attaque ${ennemi.nom} et inflige ${degatsPerso} points de dégâts ! et ${ennemi.nom} attaque ${personnage.nom} et inflige ${degatsEnnemi} points de dégâts ! `;
    peronnageNOm.textContent = `nom : ${personnage.nom}`
    peronnageClasse.textContent = `classe :  : ${personnage.classe}`
    peronnageSante.textContent = `santé : ${personnage.santé}`
    peronnageForce.textContent = `nom : ${personnage.nom}`
    peronnageForce.textContent = `force : ${personnage.force}`
    peronnageVitesse.textContent = `vitesse : ${personnage.vitesse}`
    ennemiNOm.textContent = `nom : ${ennemi.nom}`
    ennemiSanté.textContent = `santé : ${ennemi.santé}`
    ennemiDefense.textContent = `defense : ${ennemi.defense}`
    if(personnage.santé == 0)
    {
        
        resultat.textContent =`Perdu votre vie est passé a 0`;
    }
}



