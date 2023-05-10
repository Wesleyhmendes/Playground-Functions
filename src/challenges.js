// Desafio 1 - Crie a função compareTrue
let compareTrue = (bool, bool2) => bool === true && bool2 === true ? true : false;
// Desafio 2 - Crie a função splitSentence
let splitSentence = String => String.split(' ');
// Desafio 3 - Crie a função concatName
let concatName = array => `${array[array.length - 1]}, ${array[0]}`;
// Desafio 4 - Crie a função footballPoints
let footballPoints = (wins, ties) => (wins * 3) + (ties * 1);
// Desafio 5 - Crie a função highestCount


// let array = [9, 1, 2, 3, 9, 5, 7];
// let contador = 0;

// let highestCount = (array) => {
//   for (i = 0; i < array.length; i += 1) {
//     for (j = 0; j < i; j += 1)
//     if(array[i] === j[i]) {
//       let  =+ array[i];
//     } 
//   }
// }


// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
let calcTriangleArea = (base, height) => (base * height) / 2;
let calcRectangleArea = (base, height) => base * height;

let calcAllAreas = (base, height, form) => {
  if (form === "triângulo") {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } else if (form === "retângulo") {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  } else {
    return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
}
// Desafio 7 - Crie a função catAndMouse
let catAndMouse = (mouse, cat1, cat2) => {
  let diferença1 = 0;
  let diferença2 = 0;

  if (cat1 < mouse) {
    diferença1 = mouse - cat1;
  } else if (cat1 > mouse) {
    diferença1 = cat1 - mouse;
  } else if (cat1 === mouse) {
    diferença1 = 0;
  } else {
    return 'ERRO'
  }

  if (cat2 < mouse) {
    diferença2 = mouse - cat2;
  } else if (cat2 > mouse) {
    diferença2 = cat2 - mouse;
  } else if (cat2 === mouse) {
    diferença2 = 0;
  } else {
    return 'ERRO'
  }

  if (diferença1 > diferença2) {
    return 'cat2';
  } else if (diferença1 < diferença2) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8 - Crie a função fizzBuzz
let fizzBuzz = (array) => {
  let resultado = [];
  for (i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      resultado.push("fizz");
    } else if (array[i] % 3 !== 0 && array[i] % 5 === 0) {
      resultado.push("buzz");
    } else if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      resultado.push("fizzBuzz");
    } else if (array[i] % 3 !== 0 && array[i] % 5 !== 0) {
      resultado.push("bug!");
    } else {
      resultado = 'indefinido';
    }
  }
  return resultado
}
// Desafio 9 - Crie a função encode e a função decode


let encode = (frase) => {
  let frase2 = '';
  for (let letra of frase) {

    if (letra === 'a') {

      frase2 += '1';

    } else if (letra === 'e') {
      frase2 += '2';

    } else if (letra === 'i') {
      frase2 += '3';

    } else if (letra === 'o') {
      frase2 += '4';

    } else if (letra === 'u') {
      frase2 += '5';

    } else {
      frase2 += letra;
    }
  }
  return frase2;
}

console.log(encode('go Trybe! '));

let decode = fraseCodificada => {
  let fraseDecodificada = '';

  for (let index in fraseCodificada) {
    let letra = fraseCodificada[index];
    if (letra === '1') {
      fraseDecodificada += 'a';
    } else if (letra === '2') {
      fraseDecodificada += 'e';
    } else if (letra === '3') {
      fraseDecodificada += 'i';
    } else if (letra === '4') {
      fraseDecodificada += 'o';
    } else if (letra === '5') {
      fraseDecodificada += 'u';
    } else {
      fraseDecodificada += letra;
    }
  }
  return fraseDecodificada;
}






























// Desafio 10 - Crie a função techList

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => { }),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => { }),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => { }),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => { }),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => { }),
  concatName: typeof concatName === 'function' ? concatName : (() => { }),
  decode: typeof decode === 'function' ? decode : (() => { }),
  encode: typeof encode === 'function' ? encode : (() => { }),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => { }),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => { }),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => { }),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => { }),
  techList: typeof techList === 'function' ? techList : (() => { }),
};
