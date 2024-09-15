function staircase(n) {
   let symbol = '#';
   let inputLine = '';
   let inputPosition = n - 1; // Define a posição inicial do caractere '#' em cada linha


   // Loop externo: percorre cada linha da escada
   for(let lineIndex = 0; lineIndex < n; lineIndex += 1){
      // Loop interno: percorre cada coluna da linha atual
         for( let columnIndex = 0; columnIndex < n; columnIndex +=1){
            // Verifica se a coluna atual é anterior à posição do caractere '#'
            if(columnIndex < inputPosition){
               inputLine += ' '; // Adiciona um espaço em branco à linha
            } else {
               inputLine += symbol; // Adiciona o caractere '#' à linha
            }
         }
         console.log(inputLine); // Imprime a linha atual da escada
         inputLine = '';  // Limpa a string para a próxima linha
         inputPosition -= 1; // Atualiza a posição do caractere '#' para a próxima linha
   }
}

staircase(3); // Chama a função 'staircase' passando 3 como argumento