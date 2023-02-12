// Pour utiliser un atom il faut importer la fonction atom
import { atom } from 'nanostores'

// On créer un "état" globale à toute notre application
// contenant une adresse email
export const animateActif = atom(false)

