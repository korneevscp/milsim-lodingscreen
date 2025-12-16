//       _           _    _                     _ 
//      | |         | |  | |                   | |
//   ___| | ___  ___| | _| |     ___   __ _  __| |
//  / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
//  \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
//  |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
//     version 2.16

// URL du logo du serveur
// Laissez vide pour utiliser du texte à la place
// (Placez les fichiers dans le dossier images)
// (Vous pouvez aussi utiliser une URL externe)
var l_serverImage = "";

// Centrer le logo ?
// 'true' ou 'false'
var l_centerLogo = false;

// Afficher la carte et le mode de jeu actuels ?
// 'true' ou 'false'
var l_displayMapGamemode = false;

// Configuration personnalisée du nom du serveur
// Laissez vide pour un nom automatique
var l_serverName = "OP 12 - Military RP |sérieux|";

// Utiliser une vidéo comme arrière-plan ?
// Sinon, des images seront utilisées
// 'true' ou 'false'
var l_bgVideo = true;

// Vidéos disponibles par défaut :
// "aurora.webm"
// "bluefall.webm"
// "bluetilefloor.webm"
// "bluewhitecircles.webm"
// "bokehlens.webm"
// "cleanbokeh.webm"
// "coldnight.webm"
// "colorfulburst.webm"
// "dancingstars.webm"
// "dropsflares.webm"
// "focusorangebokeh.webm"
// "glimmering.webm"
// "glowingrings.webm"
// "greencircles.webm"
// "hues.webm"
// "inthedeep.webm"
// "modernflourish.webm"
// "orangeaura.webm"
// "warminside.webm"
// "yellowgreen.webm"
//
// Vous pouvez ajouter vos propres vidéos d’arrière-plan
// Assurez-vous simplement qu’elles soient au format webm VP8
// (Placez les vidéos dans le dossier backgrounds/videos)
// (Vous pouvez aussi utiliser une URL externe)
var l_background = "Military-Motivation-.webm";

// (Arrière-plan image uniquement)
// Activer l’image d’arrière-plan basée sur la carte ?
// Si activé, l’arrière-plan sera une image correspondant à la carte actuelle du serveur
// Vous devez avoir une image avec le même nom que la carte
// L’image doit être au format .jpg
// Exemple : gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// 'true' ou 'false'
var l_bgImageMapBased = false;

// (Arrière-plan image uniquement)
// Ajouter une ou plusieurs images
// Plusieurs images défileront automatiquement
// (Placez les fichiers dans le dossier backgrounds/images)
// (Vous pouvez aussi utiliser une URL externe)
var l_bgImages = [

];

// (Arrière-plan image uniquement)
// Ordre aléatoire des images d’arrière-plan ?
// 'true' ou 'false'
var l_bgImagesRandom = false;

// (Arrière-plan image uniquement)
// Délai entre les changements d’image
// en millisecondes
var l_bgImageDuration = 5000;

// (Arrière-plan image uniquement)
// Vitesse de fondu des images d’arrière-plan
// en millisecondes
var l_bgImageFadeVelocity = 2000;

// Activer l’overlay d’arrière-plan ?
// 'true' ou 'false'
var l_bgOverlay = true;

// Niveau d’assombrissement de l’arrière-plan
// 0 pour aucun (0%), 100 pour noir complet (100%)
var l_bgDarkening = 50;

// Jouer de la musique pendant l’écran de chargement ?
// 'true' ou 'false'
var l_music = true;

// Afficher le nom de la musique en cours ?
// 'true' ou 'false'
var l_musicDisplay = true;

// Playlist musicale
// Ajoutez autant d’IDs/URLs YouTube ou de fichiers ogg que vous voulez
// (Placez les fichiers ogg dans le dossier music)
// (Vous pouvez aussi utiliser une URL externe pour les fichiers ogg)
var l_musicPlaylist = [
	{ogg: "Military.ogg", name: "Military Motivation - Devil At My Door (2020)"},
];

// Ordre aléatoire de la musique ?
// 'true' ou 'false'
var l_musicRandom = false;

// Volume de la musique
// Choisissez une valeur entre 0 (le plus faible) et 100 (le plus fort)
var l_musicVolume = 20;

// Activer les messages personnalisés ?
// 'true' ou 'false'
var l_messagesEnabled = true;

// Entrez vos messages personnalisés ci-dessous
var l_messages = [
	"OP 12 — Recrutement en cours",
	"Vous avez été appelé. OP 12 ne retient que les plus déterminés.",
	"Ordre, discipline, efficacité. Ici, chaque action a des conséquences.",
	"La mission passe avant tout. Toujours.",
	"Dans l’ombre, OP 12 opère pour maintenir l’équilibre.",
	"Sang-froid, loyauté, engagement : êtes-vous prêt à servir ?",
	"La sécurité globale dépend de nos opérateurs.",
	"Observer, intervenir, neutraliser. Sans hésitation.",
	"Face à l’inconnu, seuls les plus solides tiennent la ligne.",
	"Le savoir est une arme. L’entraînement fait la différence.",
	"Engagez-vous maintenant. OP 12 a besoin de vous.",
];


// Ordre aléatoire des messages ?
// 'true' ou 'false'
var l_messagesRandom = false;

// Délai entre les changements de message
// en millisecondes
var l_messagesDelay = 5000;

// Durée du fondu des messages
// en millisecondes
var l_messagesFade = 1000;

// Afficher les erreurs dans Garry's Mod ?
// Utile pour détecter les erreurs
// 'true' ou 'false'
var l_showErrorsIngame = true;

//==============================================================
//========================== AVERTISSEMENT ======================
//==============================================================
//========= Ne modifiez rien en dessous de cette ligne ==========
//==============================================================
var checkConfigFile = function() {
	return true;
};
