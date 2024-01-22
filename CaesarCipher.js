function rot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let newStr = []
    for(let item of str){
      let regex = /[^A-Z]/g
      let nonAlphabet = str.match(regex)
      if(nonAlphabet){
        if(nonAlphabet.includes(item)){
          newStr.push(item)
          continue
        }
      }
      if(alphabet.indexOf(item) <= 12){
        newStr.push(alphabet[alphabet.indexOf(item) + 13]);
      }else{
        let diff = 12 - (25 - alphabet.indexOf(item))
        console.log(diff)
        newStr.push(alphabet[diff]);
      }
    }
    return newStr.join('');
  }
  
  console.log(rot13("SERR PBQR PNZC"));