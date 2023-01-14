
class CardValidation {
  
    #card_num = new RegExp(/^[\d\s]{16}$/)
    #username = new RegExp(/^[a-zA-Z\s]{5,10}$/)
    #password = new RegExp(/^[\w\d]{8,10}$/)
   
   
    constructor(card_number, username, password){
        this.card_number = card_number;
        this.username = username;
        this.password = password;

    }


    validate_cardNum(){
      const Num = this.card_number;
      const cardNoSpace = []
      Num.split(" ").forEach(num=>cardNoSpace.push(num));
      
       if(this.#card_num.test(cardNoSpace.join("")))
          console.log("your card is complete and validated")
       else 
           console.log("incorrect card number")
        
    }

    validate_username(){
        if(this.#username.test(this.username))
            console.log("username validated")
        else
           console.log("incorrect username")
           
    }
    validate_password(){
        if(this.#password.test(this.password)) 
          console.log("password validated")
        else
           console.log("incorrect password")
    }
}

const customer = new CardValidation("2364 2833 4551 3456","ebuka buki","ebuka_124" )
//please try and add more 16 number in this card  number validation or char....
 customer.validate_cardNum()
 customer.validate_username()
 customer.validate_password()
 
 //READ THE EXPLANATION BELOW

  /* 
      **************************CARDNUMBER VALIDATION EXPLANATION*********************************************************************
                               
      #card_num = /^[\d\s]{16}$/;

      1.^ xor operator means starts with digits, excluding character, $ dollar sign means end with digits as well 
      2.[] square bracket means character sets, which matches character in a single position
      3.\d is meta character which matches digits(0-9) or decimal number
      4.\s means  whitespace(space, tab)
      5.{} curly bracket show the number limit the digit set exceeds to.
      note every card number has 16 digit numbers
      6./ openinng forward and / closing forward slash respectively
      7.# in variable names means private variable 


      **************************USERNAME VALIDATION EXPLANATION*************************************************
      #username = /^[a-zA-Z\s]{5,10}$/;

      1.[] square bracket means character sets that is the username must start with uppercase (A-Z) or lower case character (a-z)
      2.{} curly bracket show the number limit the character set exceeds to, which is atleast 5 characters and will not exceed to 11 characters
      3.^ xor operator means starts with characters, excluding digits, $ dollar sign means end with character as well 
      4. \s whitespace(space, tab)
      
      ***************************PASSWORD VALIDATION EXPLANATION************************************************************
       #password = /^[\w\d]{8,10}$/; 

      1.\W is meta character which matches word(a-z, A-Z, 0-9, and _)
      2.\d is meta character which matches digits(0-9) decimal
      3.{} curly bracket show the number limit the character set exceeds to, which is atleast 8 characters and will not exceed to 10 characters
      3.'\' escape character


    */