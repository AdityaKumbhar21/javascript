// Filter 
// used to filter data based on some conditions on array

let myArr = [1,2,3,4]

let greaterNum = myArr.filter((num)=>{
    return num>2
})

console.log(greaterNum);


// Practicing filter
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// list me books whose genre is history

  let filteredBooks = books.filter((bk)=>{
    return bk.genre === 'History' // returns the book object whose genre is History
  })

  // return book which are published after 2000
filteredBooks = books.filter((bk)=>{
    return bk.publish >= 2000
})

// return book which published after 1995 and genre is History
filteredBooks = books.filter((bk)=>{return bk.publish>=1995 && bk.genre === "History"})

  console.log(filteredBooks);