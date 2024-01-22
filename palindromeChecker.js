function palindrome(str) {
    let regex = /\W|_/g
    let newStr = str.replace(regex, '').toLowerCase()
    console.log(newStr)
    let reversedStr = newStr.split('').reverse().join("")
    if(newStr === reversedStr){
      return true;
    }else{
      return false
    }
   
  }
  
  palindrome("A man, a plan, a canal. Panama");