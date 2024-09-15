let preco = 60;
let aVista = 10; //54
let totalAvista = 0;

totalAvista = (preco - (aVista / 100) * preco);

console.log(`Preço: R$${preco},00`);
console.log(`Preço á vista: R$${totalAvista},00`);
console.log(`3X de: R$${preco/3},00`);
