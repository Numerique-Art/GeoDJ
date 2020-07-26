# GeoDJ

Une web application créé pendant un stage au Centre d'Étude et de Recherche de Djibouti. Sa fonction première est d'afficher les données GIS stockées dans une base de donnée.

L'application web comporte deux grands modules :

-   Le module **server** qui contient le côté serveur qui s'occupe de la gestion de la base de donnée (CRUD) et de retourner et comminuquer avec le client en _JSON_ etc..
-   Le module **client** qui lui contient l'interface utilisateur ,codé en _ReactJS_, qui comminuque avec le module du serveur et travaille avec les contenus renvoyer par ce dernier.

## Server

Le module du server est une API Rest qui fait des opérations CRUD (Create, Read, Update et DELETE) sur une base de donnée _PostgreSQL_. Ce module est codé en JavaScript avec NodeJS. Les dependances exaustive de ce module sont listés dans le fichier.
