function countNumber(soz) {
  let son = 0;
  for(let index = 0; index < soz.length; index++) {
    const harf = soz[index];
    if (harf >= '0' && harf <= '9') {
      son++; 
    }
  }
  return son;  
}

const result = countNumber('ag1aw5g6');
console.log(result);