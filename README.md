# CSP - workshop

Du trenger [node](https://nodejs.org/) og [git](https://git-scm.com/downloads) for å gjøre denne workshopen. [Klon repoet fra github](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).

## Installer avhengigheter

`npm install`

## Start server

Kjør `node server.js` for å starte server, gå til [http://localhost:1337/](http://localhost:1337/) for å se siden.

For at endringer i CSP fra `server.js` skal bli tilgjengelig må du restarte serveren hver gang du gjør endringer. 

Det kan hende at du må cleare cachen i chrome for å se endringer, dette kan du feks gjøre ved først å åpne dev tools og så holde inne reloadknappen (&#8635;) og velge `Empty cache and hard reload`.


## Oppgaver
Default CSP ligger i server.js og foreløpig blokkerer den alt av input. 
Oppgavene går ut på å tillate/forby diverseting ved å modifisere CSP'en. 

Se hva du kan gjøre med CSP feks her:
https://content-security-policy.com/

