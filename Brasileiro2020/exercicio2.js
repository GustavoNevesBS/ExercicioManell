const tabelaBrasileirao = [
{
time: "Flamengo",
pontos: 71
},
{
time: "Internacional",
pontos: 70
},
{
time: "Atlético-MG",
pontos: 68
},
{
time: "São Paulo",
pontos: 66
},
{
time: "Fluminense",
pontos: 64
},
{
time: "Grêmio",
pontos: 59
},
{
time: "Palmeiras",
pontos: 58
},
{
time: "Santos",
pontos: 54
},
{
time: "Athletico-PR",
pontos: 53
},
{
time: "Bragantino",
pontos: 53
},
{
time: "Ceará",
pontos: 52
},
{
time: "Corinthians",
pontos: 51
},
{
time: "Atlético-GO",
pontos: 50
},
{
time: "Bahia",
pontos: 44
},
{
time: "Sport",
pontos: 42
},
{
time: "Fortaleza",
pontos: 41
},
{
time: "Vasco",
pontos: 41
},
{
time: "Goiás",
pontos: 37
},
{
time: "Coritiba",
pontos: 31
},
{
time: "Botafogo",
pontos: 27
},
];

console.log(tabelaBrasileirao.slice(0, 7));

console.log(tabelaBrasileirao.slice(-4));

// sort
tabelaBrasileirao.sort(function (a, b) {
    if(a.time < b.time) {
        return -1;
    } else true;
});

console.log(tabelaBrasileirao);