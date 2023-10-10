window.onload = function()
{
    function getRandomOrder(tomb)
    {
        let tombRandom = [];
        console.log(tomb);

        for(let i = tomb.length; i > 0 ; i--)
        {
            let random = Math.floor(Math.random() * i);

            let elem = tomb[random];
            tomb.splice(random, 1);

            tombRandom.push(elem);
        }       
        return tombRandom;
    }

    let random = Math.floor(Math.random() * 100);
    let tomb3 = [];

    for(let i = 0; i < random; i++)
    {
        tomb3.push(i);
    }

    //getRandomOrder(tomb3);
    //console.log(getRandomOrder(["h", "k", "sze", "cs", "p", "szo", "v"]));
    //console.log(getRandomOrder([1, 2, 3, 4, 5, 6, 7, 8, 9]));
}