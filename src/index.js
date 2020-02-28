setInterval(() => {
    document.getElementById('insertfromscript').innerHTML = 'Du fikk kjørt javascript klokka ' + new Date().toLocaleTimeString();
}, 1000);

const randomnr = Math.floor(Math.random() * 100);
fetch('https://ironhack-pokeapi.herokuapp.com/pokemon/' + randomnr)
    .then(reponse => reponse.json())
    .then(data => {
        const pokemanNameElement = document.getElementById('pokemonname');
        const pokemanImgElement = document.getElementById('pokemonimg');
        pokemanNameElement.innerHTML = data.ename + ' ' + data.cname;
        pokemanImgElement.src = data.picture;
    });


function loop() {
    var s = '',
        e = ['🤓', '😚', '😘'],
        i, m;

    for (i = 0; i < 10; i ++) {
        m = Math.floor(e.length * ((Math.sin((Date.now()/200) + i)+1)/2));
        s += e[m];
    }

    location.hash = s;

    setTimeout(loop, 50);
}

window.addEventListener('load', function () {
    loop();
});
