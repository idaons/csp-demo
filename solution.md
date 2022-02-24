# Eksempel på løsning

### Utgangspunkt:
    defaultSrc: ["'none'"],
### oppgave 1:
    imgSrc: ["'self'"],
### oppgave 2:
    styleSrc: ["'self'"],
### oppgave 3:
    scriptSrc: ["'self'"],
### oppgave 4:
    connectSrc: ['ironhack-pokeapi.herokuapp.com'],
    imgSrc: ["'self'", 'ironhack-pokeapi.herokuapp.com'],
### oppgave 5:
    fontSrc: ['fonts.gstatic.com'],
    styleSrc: ["'self'", 'fonts.googleapis.com'],
### oppgave 6:
    frameSrc: ['www.youtube.com'],

### oppgave 7:
    Se i console.log hvilken sha som mangler for stylingen. Legg til 
    integrity='sha256-6axPH/eNyW13+6neJL9taX+yeK6nyrq5SKcOdk+n7es=' på <style>-tagen og legg til 
    styleSrc: ["'self'",'fonts.googleapis.com', "'sha256-1AEBufVZt2FioEw++D/tRmJhuJ1S/f9eBmgaVZR52Dg='"]i CSP.


  


