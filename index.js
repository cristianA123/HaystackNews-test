ordenarNumeros = (numeros = []) => {
    let i = 0; 
    let j = numeros.length - 1; 
  
    while (i < j) {
      if (numeros[i] % 2 === 0) {
        i++; 
      } else if (numeros[j] % 2 === 1) {
        j--; 
      } else {
        
        const temp = numeros[i];
        numeros[i] = numeros[j];
        numeros[j] = temp;
        i++; 
        j--; 
      }
    }
  
    return numeros;
  }
  
  console.log(ordenarNumeros([3, 5, 2, 1, 6, 4]));
  