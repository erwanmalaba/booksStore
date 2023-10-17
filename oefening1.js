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
    var x = library.pages;
    for (var i = 0; i < library.pages; i++) {
      sum += x[i].value;
    }

    return "this has " + library.pages;
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
