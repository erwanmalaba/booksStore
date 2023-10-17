/* 
maak een class van boeken waar je een titel, auteur en aantal pagina's in kan zetten.
maak een class van bibliotheek die een owner heeft en waar je de totale aantal pagina's kan opvragen, de totale aantal boeken en de gemiddelde aantal pagina's per boek.
je kan ook een boek toevoegen, en een boek verwijderen op basis van de titel.
De title is benoemd zoals hieronder, de author is een random string en de pages is een random nummer tussen 50 en 1000.

Voorbeeld:
Library {
  owner: 'Jorne',
  books: [
    Book { title: 'title-1', author: 'szh7i6vh3fp', pages: 836 },
    Book { title: 'title-2', author: '7yl4xwhk35j', pages: 170 },
    Book { title: 'title-4', author: 'romaywrg3w', pages: 756 },
    Book { title: 'title-5', author: 'wfa463vcheb', pages: 439 },
    Book { title: 'title-6', author: 'nz5ycbi7ifb', pages: 954 },
    Book { title: 'title-7', author: 'v6m7v5fx9k', pages: 417 },
    Book { title: 'title-8', author: 'ibdz3dynf8j', pages: 748 },
    Book { title: 'title-9', author: 'wzcicfyefaq', pages: 618 },
    Book { title: 'title-10', author: '5t4h5j96vda', pages: 655 }
  ]
}
There are 10 books in the library of Jorne
The average pages in the libaray are 577.7 pages
The total of pages are 4861

*/

// maak een class van boeken waar je een titel, auteur en aantal pagina's in kan zetten.
// maak een class van bibliotheek die een owner heeft en waar je de totale aantal pagina's kan opvragen, de totale aantal boeken en de gemiddelde aantal pagina's per boek.

class books {
  constructor(title, author, pages, totalBooks) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.totalBooks = [];
  }
}

class Library {
  constructor(owner, totalPages, totalBooks, averagePages, books) {
    this.owner = owner;
  }
}

function addbook(title) {
  const added = this.book + 1;
}

const fruits = new Map([
  [(this.title = "Harry")],
  [(this.author = "Porter")],
  [(this.pages = 34)],
]);

let book1 = new books("Harry", "Potter", 321);
let book2 = new books("Barry", "Potter", 3251);
let Erwan = new Library("Erwan", +books);

console.log(Erwan.owner + "," + this.title + book2);
console.log(book1);
console.log(book2);

console.log(books.length);

/*
addBook(title){
  let bookAdded = this.title +1
  return this.animalList.filter(function (shot) {
    return shot.name.includes(animal);
  });
}

const shot = {
  //name: kind + "-" + name,
  name: `${kind}-${name}`,
  killed: this.chanceToKill(kind),
};
this.animalList.push(shot);
}
*/
