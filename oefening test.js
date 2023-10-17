/*
Schrijf een Class Flycatcher

elke Flycatcher heeft een naam en een leeftijd en een lijst met gevangen vliegen

elke Flycatcher moet de mogelijkheid hebben om een vlieg te vangen. De vlieg die hij vangt 

heeft een naam met het volgende patroon "vlieg-001"

zorg ervoor dat je kan opvragen hoeveel doden hij op zijn geweten heeft

Breid de code uit zodat elke gevangen vlieg ook de mogelijk heeft om te ontsnappen.

De kans dat hij ontsnapt is 1/3 

Maar!!! de vliegen moeten wel mee gelogd worden. Ze krijgen dus naast hun naam ook of ze ontsnapt zijn of niet

Voeg tevens een functie toe zodat je zijn accuraatheid/doeltreffendheid kan opvragen in 

*/

class books {
  constructor(title, author, pages, totalBooks) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.Books = [];
    this.totalbooks = [];
  }
};

  addbook() {
    function randomTitle(length) {
    
      let result = "";
      const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;

      let counter = 0;
      while (counter < length) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
      }
      return result;
    }
    this.totalBooks + 1;
  };
    
  deleteBook(){
    this.catchList.pop(this.books);
    this.totalBooks - 1;

    
  };
  

   
  howManyKills() {
    return this.name + " has " + this.catchList.length + " kills";
  }



/* 
Jorne.catch();
Jorne.catch();
Jorne.catch();
Jorne.catch();
Jorne.catch();
Jorne.catch();
Jorne.catch();
Jorne.catch();
Jorne.catch();
Jorne.catch();
Jorne.catch();
Jorne.catch();

Pascal.catch();
Pascal.catch();
Pascal.catch();
Pascal.catch();
Pascal.catch();
Pascal.catch();

console.log(Jorne.howManyKills());

console.log(Jorne.name + ":", Jorne.catchList);
*/
