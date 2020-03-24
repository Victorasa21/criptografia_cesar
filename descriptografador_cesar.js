


const descriptografador = (stringCifrada, numCasas)=>{

    const divideStringEmArray = (string) =>{
        return string.toLowerCase().split('')
    }
    
    const arrayString = divideStringEmArray(stringCifrada)
    
    const retornaChar = (array) =>{
        return array.map((item)=> item.match(/^[a-z]*$/) ? item.charCodeAt(0) : item)
    }
    
    const arrayChar = retornaChar(arrayString)
    
    const arrayCharDeslocado = (array)=>{
        return array.map(item=> typeof(item) == "number"  ? calcula(item) : item)
    }
    
    const calcula = (item) => {
        return (item - numCasas < 97) ? item +(26-numCasas) : item - numCasas
    }
    
    const arrayCharDesloc = arrayCharDeslocado(arrayChar)
    
    const arrayCharToString = (array) =>{
        return array.map(item => typeof(item) == "number" ? String.fromCharCode(item) : item)
    }
    
    const arrayStringCod = arrayCharToString(arrayCharDesloc);
    
    const joinChar = (array) => {
        return array.join('')
    }
    
    const stringCodif = joinChar(arrayStringCod)
    
    console.log("STRING ==>", stringCifrada);
    console.log("String FILTRADA =>",arrayString);
    console.log("ARRAY DE CHAR ==>", arrayChar);
    console.log("ARRAY NORMALIZADO DE CHAR ==>", arrayCharDesloc)
    console.log("ARRAY DE STRING JA DESLOCADA ==>", arrayStringCod )
    console.log("String UNIDA E CODIFICADA ==>", stringCodif)

}

descriptografador("sr xli mrxivrix, rsfshc orsaw csy evi e hsk. tixiv wximriv", 4)