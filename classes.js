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
    this.totalBooks = [];
  }
}

class library {
  constructor(owner) {
    this.owner = owner;
    this.books = [];
  }

  add() {
    const random = Math.ceil(Math.random() * 100);
    const added = this.books.length + 1;

    if (random == true) {
      const fly = {
        title: "title-" + added.toString().padStart(0, "0"),
        author: "kjngajn",
        pages: 1,
      };
      this.books.push(fly);
    } else {
      const fly = {
        title: "title-" + added.toString().padStart(0, "0"),
        author: "kjngajn",
        pages: 2,
      };
      this.books.push(fly);
    }
  }

  remove() {
    const random = Math.ceil(Math.random() * 100);
    const removed = this.books.length - 1;
    // Kans 1/3 not killed
    if (random == true) {
      const fly = {
        title: "title-" + removed.toString().padStart(0, "0"),
        author: "kjngajn",
        pages: 1,
      };
      this.books.push(fly);
    } else {
      const fly = {
        title: "title-" + removed.toString().padStart(0, "0"),
        author: "kjngajn",
        pages: 2,
      };
      this.books.pop(fly);
    }
  }

  howManyBooks() {
    return (
      "There are " +
      this.books.length +
      " books in the library of " +
      this.owner
    );
  }
  averagePages() {
    var sum = 0;
    this.books.forEach(function (num) {
      sum += num;
    });

    return "The average pages in the libaray are " + "" + "pages";
  }
}

const Jorne = new library("Jorne", 36);

Jorne.add();
Jorne.add();
Jorne.add();
Jorne.add();
Jorne.add();
Jorne.add();
Jorne.add();
Jorne.add();
Jorne.add();
Jorne.add();
Jorne.remove();
Jorne.remove();

console.log(Jorne);

console.log(Jorne.howManyBooks());

console.log(Jorne.averagePages());
