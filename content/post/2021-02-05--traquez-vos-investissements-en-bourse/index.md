---
title: Traquez vos investissements en bourse
description: Construire un tableur pour traquer vos investissements en bourse
cover: ./traquez-vos-investissements.png
---

Il est souvent pratique d'avoir accès aux résultats de vos investissements directement dans un tableur. Personnellement j'utilise Interactive Broker comme plateforme pour mes investissements et depuis l'application web, il me faut au moins 2 minutes pour y avoir accès. Cela est dû au système d'authenfication très fastidieux et pire encore au fait que les résultats détaillés ne sont accessibles qu'après avoir généré un rapport.

L'autre avantage d'un tableur c'est qu'il est ensuite très facile d'utiliser le résultat dans d'autre tableur par exemple mon tableur qui traque combien de temps il me reste avant l'indépendance financière ou celui qui calcul ma valeur nette.

#### Trouver la valeur d'une action

Pour réaliser ce tableur le plus important est de réussir à trouver la valeur d'une action. Pour cela nous avons besoin d'une source d'information et d'un moyen de lire cette information. Vous pouvez utiliser comme source d'information la plupart des sites financier. Personnellement j'utilise le Financial Times. Vus que LVMH est très "populaire" en ce moment prenons cet exemple.

Voici la page web : https://markets.ft.com/data/equities/tearsheet/summary?s=MC:PAR

Ce qui nous intéresse c'est la valeur en-dessous de Price(EUR).

#### Importer la valeur d'une action dans un tableur

Pour extraire cette valeur de façons automatique dans notre tableur nous allons utiliser une technique appelé le "web scrapping".

Commencez par faire un clic droit sur la valeur puis sélectionnez "Inspecter", cela va ouvrir les outils de développement.
Par défaut le HTML sélectionné est celui qui est responsable d'afficher la valeur sur laquelle vous avez cliquez. Ce qui nous intéresse ici c'est la valeur de l'objet *class*. Payez bien attention à cette valeur, elle sera utilisée dans la prochaine étape.

Retournons maintenant dans notre tableur, nous allons maintenant nous intéresser à la fonction *IMPORTXML* du tableur.
- Le premier argument de *IMPORTXML* est l'URL du site web depuis lequel on veut importer une valeur. Dans notre cas https://markets.ft.com/data/equities/tearsheet/summary?s=MC:PAR.
- Le deuxième argument est le sélecteur HTML de la valeur que l'on veut importer. Dans notre cas : *//span[@class='mod-ui-data-list__value']*

Cela nous donne :

*IMPORTXML("ht<span>tps://</span>markets.ft.com/data/equities/tearsheet/summary?s=MC:PAR","//span[@class='mod-ui-data-list__value']")*

Si vous essayez cette formule vous verrez qu'elle vous donne plus d'une valeur et c'est parce que ce sélecteur est utilisé plus d'une fois sur la page. Ne vous inquiétez pas, il nous suffit d'utiliser la fonction *INDEX* du tableur comme cela :

*=INDEX(IMPORTXML("ht<span>tps://</span>markets.ft.com/data/equities/tearsheet/summary?s=MC:PAR","//span[@class='mod-ui-data-list__value']"),1)*

#### Paramétrer l'import d'une valeur

Nous sommes à présent capable d'importer la valeur d'une action dans notre tableur ! La prochaine étape et de pouvoir importer n'importe quelle valeur sans avoir à changer notre formule. Pour cela il y a deux variables cacher dans la formule. Dans notre cas *MC* et *PAR*.
- *MC* est ce qu'on appelle *ticker symbol*, il identifie un titre financier.
- *PAR* lui est un symbole propre au Financial Times pour identifier dans quelle bourse ce titre est négociable, ici en l’occurrence la bourse de Paris.

Dans notre tableur on peut donc déjà imaginer 3 colonnes :
- Une colonne pour le ticker symbol (A)
- Une pour le symbole pour identifier l'emplacement de la bourse (B)
- Une colonne qui affiche la valeur d'une action

Au final voici la formule pour obtenir la valeur d'une action :

*=INDEX(IMPORTXML("ht<span>tps://</span>markets.ft.com/data/equities/tearsheet/summary?s="&A2&":"&B2,"//span[@class='mod-ui-data-list__value']"),1)*

Voici un exemple de tableur Google : http://bit.ly/3cNEETq
