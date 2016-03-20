(function(){
//------------------------------------------------------------
// Création du tableau 'textes'
    var    reponse1V =  "<p> Et bien oui ! La part des individus en France se déclarant <em>non-religieux</em> et ayant déjà eu un rapport sexuel avec quelqu'un du même sexe est de <span class='chiffre'>16%</span>. Il en est de même pour les individus appartenant à <span class='emph'>une religion autre que le catholicisme</span>.<p> Les catholiques quant à eux sont moins tentés par les expériences homosexuelles, mais la différence n'est pas bien significative... <span class='chiffre''>12%</span> des catholiques ont déjà eu une expérience avec quelqu'un du même sexe. C'est à dire seulement <span class='chiffre'>4 points</span> de pourcentage de moins que le reste de la population !</p>",
        reponse1F = "<p> Pas du tout ! On est loin de l'époque où la foi et l'homosexualité sont incompatibles ! La part des individus en France se déclarant <em>non-religieux</em> et ayant déjà eu un rapport sexuel avec quelqu'un du même sexe est de <span class='chiffre'>16%</span>. Il en est de même pour les individus appartenant à <span class='emph'>une religion autre que le catholicisme</span>.<p> Les catholiques quant à eux sont moins tentés par les expériences homosexuelles, mais la différence n'est pas bien significative... <span class='chiffre''>12%</span> des catholiques ont déjà eu une expérience avec quelqu'un du même sexe. C'est à dire seulement <span class='chiffre'>4 points</span> de pourcentage de moins que le reste de la population !</p>",
        reponse2V = "<p> Effectivement ! Il paraît que les femmes vont plus souvent dans les détails que les hommes lors de leurs conversations entre amis... On entend rarement un homme aller dans le détail à propos de ce qu'il a fait ou pas à sa partenaire la nuit dernière. On entend d'ailleurs encore trop rarement un homme parler d'un sexe en laissant entendre qu'il était là pour le plaisir de l'autre...</p><p>Mais dans les faits, on constate qu'<span class='emph'>une proportion plus grande d'hommes (49%) que de femmes (36%) <em>suce ou lèche souvent le sexe de son/sa partenaire</em></span>. Inversement, <span class='chiffre'>15%</span> des femmes déclarent ne jamais le faire, contre <em>seulement</em> <span class='chiffre'>11%</span> des hommes. Au fond, c'est plutôt clair, quel que soit le sexe de votre partenaire, les gâteries, c'est bien, mangez-en.</p>",
        reponse2F = "<p> Ah, l'imaginaire collectif et les faits... deux choses radicalement différentes ! Il est vrai que dans une société androcentrée, une conséquence <em>attendue</em> de la domination masculine serait que les gâteries soient plutôt données par les femmes et reçues par les hommes... et bien non, et tant mieux !</p><p>On constate qu'<span class='emph'>une proportion plus grande d'hommes (49%) que de femmes (36%) <em>suce ou lèche souvent le sexe de son/sa partenaire</em></span>. Inversement, <span class='chiffre'>15%</span> des femmes déclarent ne jamais le faire, contre <em>seulement</em> <span class='chiffre'>11%</span> des hommes. Au fond, c'est plutôt clair, quel que soit le sexe de votre partenaire, les gâteries, c'est bien, mangez-en.</p>",
    textes = {
        vrai : [
            reponse1V ,
            reponse2V ,
            "Tout à fait"
        ],
        faux : [
            reponse1F ,
            reponse2F ,
            "T'es nul." 
    ]} ;
    
    
    document.querySelector("#quizz1 .commentaire").innerHTML = reponse1V ;
    document.querySelector("#quizz2 .commentaire").innerHTML = reponse2V ;

//-------------------------------------------------------------
// Début du script        
    var clics = document.querySelectorAll('.fenetreQuestion'),  // Récupération de toutes les fenêtres de question
        Reponse = {                                               // Création d'un prototype contenant la fenêtre mère parente et le clic
        init:function(bloc,result){
            this.fenetre = bloc ;
            this.result = result ;
        }
        },
        reponse = Object.create(Reponse),                       // Création de l'objet réponse
        infogra, comm, question,                               // Création des variables utilisées dans la boucle
        action = function(){
            question.style.WebkitFilter = 'opacity(0%)' ;     // On désaffiche la fenêtre question
            infogra.style.WebkitFilter = 'none' ;            // On enlève le flous sur les infographies
            comm.style.WebkitFilter = 'none' ;
            question.style.zIndex = '-1' ;                  // On passe la fenêtre question derrière pour pas pouvoir cliquer dessus
        };

    for (i=0, n=clics.length; i<n; i++) {                       // On 'prépare à l'écoute' toutes les fenêtres de la page
        clics[i].addEventListener('click',function(e){

            if (e.target.className === 'reponseV') {                    // On récupère true si cliqué sur V, false si cliqué sur F
                reponse.init(e.target.parentNode.parentNode,true);      // et un caractère vide si cliqué ailleurs dans la fenêtre
            } else if (e.target.className === 'reponseF') {
                reponse.init(e.target.parentNode.parentNode,false);
            } else {
                reponse.init(e.target.parentNode.parentNode,'erreur');
            }
        
            idFenetre = reponse.fenetre.id ;
        
            if (reponse.result != 'erreur') {                                  // On ne modifie le CSS que si l'utilisateur a répondu
                infogra = document.querySelector("#" + idFenetre + " .infographie") ;   // On enregistre les trois enfants de la fenêtre mère
                question = document.querySelector("#" + idFenetre + " .fenetreQuestion") ;      // On récupère l'élément question
                comm = document.querySelector("#"+ idFenetre + " .commentaire") ;       // On récupère le commentaire de réponse
                noQuestion = idFenetre.charAt(5) - 1;
                (reponse.result) ? comm.innerHTML = textes.vrai[noQuestion]: comm.innerHTML = textes.faux[noQuestion] ; 
                setTimeout(action,100) ;
            // On remplit la fenêtre commentaire
            // comm.style.fontWeight = 'bold' ;
            }
        });
    }
})();


