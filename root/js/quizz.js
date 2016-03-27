(function(){
//------------------------------------------------------------
// Création du tableau 'textes'
    var    reponse1V =  "<p> Et bien oui ! La part des individus en France se déclarant <em>non-religieux</em> et ayant déjà eu un rapport sexuel avec quelqu'un du même sexe est de <span class='chiffre'>16%</span>. Il en est de même pour les individus appartenant à <span class='emph'>une religion autre que le catholicisme</span>.<p> Les catholiques quant à eux sont moins tentés par les expériences homosexuelles, mais la différence n'est pas bien significative... <span class='chiffre'>12%</span> des catholiques ont déjà eu une expérience avec quelqu'un du même sexe. C'est à dire seulement <span class='chiffre'>4 points</span> de pourcentage de moins que le reste de la population !</p>",
        reponse1F = "<p> Pas du tout ! On est loin de l'époque où la foi et l'homosexualité sont incompatibles ! La part des individus en France se déclarant <em>non-religieux</em> et ayant déjà eu un rapport sexuel avec quelqu'un du même sexe est de <span class='chiffre'>16%</span>. Il en est de même pour les individus appartenant à <span class='emph'>une religion autre que le catholicisme</span>.<p> Les catholiques quant à eux sont moins tentés par les expériences homosexuelles, mais la différence n'est pas bien significative... <span class='chiffre''>12%</span> des catholiques ont déjà eu une expérience avec quelqu'un du même sexe. C'est à dire seulement <span class='chiffre'>4 points</span> de pourcentage de moins que le reste de la population !</p>",
        reponse2V = "<p> Effectivement ! Il paraît que les femmes vont plus souvent dans les détails que les hommes lors de leurs conversations entre amis... On entend rarement un homme aller dans le détail à propos de ce qu'il a fait ou pas à sa partenaire la nuit dernière. On entend d'ailleurs encore trop rarement un homme parler de sexe en laissant entendre qu'il était là pour le plaisir de l'autre...</p><p>Mais dans les faits, on constate qu'<span class='emph'>une proportion plus grande d'hommes (49%) que de femmes (36%) <em>suce ou lèche souvent le sexe de son/sa partenaire</em></span>. Inversement, <span class='chiffre'>15%</span> des femmes déclarent ne jamais le faire, contre <em>seulement</em> <span class='chiffre'>11%</span> des hommes. Au fond, c'est plutôt clair, quel que soit le sexe de votre partenaire, les gâteries, c'est bien, mangez-en.</p>",
        reponse2F = "<p> Ah, l'imaginaire collectif et les faits... deux choses radicalement différentes ! Il est vrai que dans une société androcentrée, une conséquence <em>attendue</em> de la domination masculine serait que les gâteries soient plutôt données par les femmes et reçues par les hommes... et bien non, et tant mieux !</p><p>On constate qu'<span class='emph'>une proportion plus grande d'hommes (49%) que de femmes (36%) <em>suce ou lèche souvent le sexe de son/sa partenaire</em></span>. Inversement, <span class='chiffre'>15%</span> des femmes déclarent ne jamais le faire, contre <em>seulement</em> <span class='chiffre'>11%</span> des hommes. Au fond, c'est plutôt clair, quel que soit le sexe de votre partenaire, les gâteries, c'est bien, mangez-en.</p>",
        reponse3F = "<p>Bien tenté, mais non ! Parmi les hommes disposant d'un diplôme supérieur au baccalauréat, <span class='chiffre'>48%</span> déclarent sucer ou lécher souvent le sexe de leur partenaire. Parmi ceux ayant un diplôme inférieur au baccalauréat, ils sont <span class='chiffre'>50%</span> ! Inversement, <span class='chiffre'>13%</span> des premiers déclarent ne jamais le faire, contre <span class='chiffre'>13%</span> pour les seconds. La différence n'est de fait pas énorme, et elle est plus grande chez les femmes.</p><p> Chez les femmes, l'effet du diplôme est inversé. Les diplômées sont plus nombreuses à utiliser leur bouche <span class='emph'>souvent</span> et moins nombreuses à ne le faire <span class='emph'>jamais</span>. Que traduit cet effet opposé entre les hommes et les femmes ? L'éducation contribue à réduire les différences de pratiques sexuelles entre hommes et femmes, comme ça tout le monde profite des talents lingaux de l'autre sexe ! Sur l'infographie ci-dessus, on vous résume toutes ces informations.</p><p class='hidden'> Pour les attentifs qui ont remarqué que la longueur des barres ne correspond pas au pourcentage donné : elle correspond à la proportion relative des répondants entre les deux modalités <em>souvent</em> et <em>jamais</em>, afin de mieux comparer les différentes séries. La somme des pourcentages ne fait pas 100, et c'est normal !</p>",
        reponse3V="<p>C'est bien ça ! Parmi les femmes disposant d'un diplôme supérieur au baccalauréat, <span class='chiffre'>36%</span> déclarent sucer ou lécher souvent le sexe de leur partenaire. Parmi celles ayant un diplôme inférieur au baccalauréat, elles sont <span class='chiffre'>29%</span>. Inversement, <span class='chiffre'>14%</span> des premières déclarent ne jamais le faire, contre <span class='chiffre'>18%</span> pour les secondes. Ces écarts sont plus grands que chez les hommes, environ deux fois plus grands.</p><p> Chez les hommes, l'effet du diplôme est inversé. Les diplômés sont moins nombreux à utiliser leur bouche <span class='emph'>souvent</span> et plus nombreux à ne le faire <span class='emph'>jamais</span>. Que traduit cet effet opposé entre les hommes et les femmes ? L'éducation contribue à réduire les différences de pratiques sexuelles entre hommes et femmes, comme ça tout le monde profite des talents lingaux de l'autre sexe ! Sur l'infographie ci-dessus, on vous résume toutes ces informations.</p><p class='hidden'> Pour les  attentifs qui ont remarqué que la longueur des barres ne correspond pas au pourcentage donné : elle correspond à la proportion relative des répondants entre les deux modalités <em>souvent</em> et <em>jamais</em>, afin de mieux comparer les différentes séries. La somme des pourcentages ne fait pas 100, et c'est normal !</p>",
        reponse4V="<p> Oui... et Non! Il est vrai que la pratique de la sodomie est un peu plus courante chez les gauchos que chez les droitistes: <span class='chiffre'>53%</span> <span class='emph'>des électeurs PS </span> et <span class='chiffre'>51%</span> <span class='emph'>des écologistes ont déclaré avoir déjà pratiqué la pénétration anale </span> contre<span class='chiffre'> 50% </span> <span class='emph'> des électeurs UMP </span> et <span class='chiffre'> 49% </span> <span class='emph'> des électeurs du Modem-UDI  </span>. Ces derniers sont également les plus frileux en matière d'homosexualité. Ainsi,<span class='chiffre'> 10% </span> <span class='emph'> des électeurs UMP ont déclarés avoir eu une relation homosexuelle <\span>, contre <span class='chiffre'>15%<\span> des électeurs PS. <\p> Mais c'est en fait aux extrêmes que la fête est plus folle. <span class='emph'> Front de Gauche et Front national </span> gagnent ainsi le prix des plus décoincés avec respectivement <span class='chiffre'> 59% </span> et <span class='chiffre'>57%</span> des électeurs ayant déjà pratiqué la sodomie. C'est à dire en moyenne <span class='chiffre'> 8 points </span> <span class='emph'> de pourcentage de plus que les électeurs plus modérés! </span> On retrouve d'ailleurs le même schéma en U conçernant <span class='emph'>les expériences sexuelles avec plus de deux personnes en même temps</span>. FN et Front de Gauche sont en tête, avec respectivement <span class='chiffre'>22% et 21%</span> de leurs électeurs ayant déjà donné de l'amour à plusieurs personnes en même temps. En voilà une valeur commune!</p>",
        reponse4F="<p> Oui... et Non! Il est vrai que la pratique de la sodomie est un peu plus courante chez les gauchos que chez les droitistes: <span class='chiffre'>53%</span> <span class='emph'>des électeurs PS </span> et <span class='chiffre'>51%</span> <span class='emph'>des écologistes ont déclaré avoir déjà pratiqué la pénétration anale </span> contre<span class='chiffre'> 50% </span> <span class='emph'> des électeurs UMP </span> et <span class='chiffre'> 49% </span> <span class='emph'> des électeurs du Modem-UDI  </span>. Ces derniers sont également les plus frileux en matière d'homosexualité. Ainsi,<span class='chiffre'> 10% </span> <span class='emph'> des électeurs UMP ont déclarés avoir eu une relation homosexuelle <\span>, contre <span class='chiffre'>15%<\span> des électeurs PS. <\p> Mais c'est en fait aux extrêmes que la fête est plus folle. <span class='emph'> Front de Gauche et Front national </span> gagnent ainsi le prix des plus décoincés avec respectivement <span class='chiffre'> 59% </span> et <span class='chiffre'>57%</span> des électeurs ayant déjà pratiqué la sodomie. C'est à dire en moyenne <span class='chiffre'> 8 points </span> <span class='emph'> de pourcentage de plus que les électeurs plus modérés! </span> On retrouve d'ailleurs le même schéma en U conçernant <span class='emph'>les expériences sexuelles avec plus de deux personnes en même temps</span>. FN et Front de Gauche sont en tête, avec respectivement <span class='chiffre'>22% et 21%</span> de leurs électeurs ayant déjà donné de l'amour à plusieurs personnes en même temps. En voilà une valeur commune!</p>",
        reponse5V="<p> Vive la constance ! En effet, parmi les individus <span class='emph'>peu ou pas satisfaits</span> de leur vie sexuelle, les moins insatisfaits sont les individus déclarant n'avoir eu qu'<span class='emph'>un seul partenaire</span>. Parmi ces amants uniques, <span class='chiffre'>1 sur 4</span> est peu satisfait voire pas satisfait du tout, contre <span class='chiffre'>1 sur 3</span> pour les petits lapins ayant eu entre quatre et cinq partenaires différents !</p><p>On constate de fait qu'à partir de deux partenaires, <span class='emph'>les taux d'insatisfaction sont globalement les mêmes</span>, qu'il y ait eu deux partenaires ou dix-huit ! Comment l'expliquer ? Valeur particulière de la première conquête et complicité extrême de l'unique ? Niveau d'exigence qui augmente avec la diversité ? La réponse est entre vos mains ! <span class='hidden'>vos mains, pas vos jambes...</span></p>",
        reponse5F="<p> Tant pis pour Barney ! Car oui, parmi les individus <span class='emph'>peu ou pas satisfaits</span> de leur vie sexuelle, les moins insatisfaits sont les individus déclarant n'avoir eu qu'<span class='emph'>un seul partenaire</span>. Parmi ces amants uniques, <span class='chiffre'>1 sur 4</span> est peu satisfait voire pas satisfait du tout, contre <span class='chiffre'>1 sur 3</span> pour les petits lapins ayant eu entre quatre et cinq partenaires différents !</p><p>On constate de fait qu'à partir de deux partenaires, <span class='emph'>les taux d'insatisfaction sont globalement les mêmes</span>, qu'il y ait eu deux partenaires ou dix-huit ! Comment l'expliquer ? Valeur particulière de la première conquête et complicité extrême de l'unique ? Niveau d'exigence qui augmente avec la diversité ? La réponse est entre vos mains ! <span class='hidden'>oui vos mains, pas vos jambes</span></p>",
        reponse6F="bla bla",
        reponse6V="bla bla vrai",
    textes = {
        vrai : [
            reponse1V ,
            reponse2V ,
            reponse3V ,
            reponse4V ,
            reponse5V ,
            reponse6V ,
        ],
        faux : [
            reponse1F ,
            reponse2F ,
            reponse3F , 
            reponse4F ,
            reponse5F ,
            reponse6F ,
    ]},
        scroller = function(){};
    
    
    document.querySelector("#quizz1 .commentaire").innerHTML = reponse1V ;
    document.querySelector("#quizz2 .commentaire").innerHTML = reponse2V ;
     document.querySelector("#quizz3 .commentaire").innerHTML = reponse3V ;
     document.querySelector("#quizz4 .commentaire").innerHTML = reponse4V ;
    document.querySelector("#quizz5 .commentaire").innerHTML = reponse5V ;

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
            
            question.style.filter = 'opacity(0%)' ;     // On désaffiche la fenêtre question
            infogra.style.filter = 'none' ;            // On enlève le flous sur les infographies
            comm.style.filter = 'none' ;
            
            question.style.zIndex = '-1' ;  // On passe la fenêtre question derrière pour pas pouvoir cliquer dessus
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
                setTimeout(action,200) ;
                
                switch (noQuestion+1) { // On scrolle la page sur le quizz 3 pour avoir une explication pleine page
                    case 2 :
                        window.scrollBy(0,190) ;
                        break ;
                    case 3 :
                        window.scrollBy(0,175) ;
                        break ;
                    case 4 :
                        window.scrollBy(0,270) ;
                        break ;
                    case 5 :
                        window.scrollBy(0,340) ;
                }
            }
        });
    }
})();


