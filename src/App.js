import './App.css';
import { useState } from "react";

const bookData = {
  Action: [
    { 
      name: "Life of Pi", 
      rating: "4/5",
      link: "https://www.amazon.com/dp/0156027321?ots=1&linkCode=ogi&tag=oprah-auto-20&ascsubtag=[artid|10072.a.29576863[src|[ch|[lt|sale" 
    },
    { 
      name: "The Three Musketeers", 
      rating: "3.5/5",
      link: "https://www.amazon.com/dp/1505234727?ots=1&linkCode=ogi&tag=oprah-auto-20&ascsubtag=[artid|10072.a.29576863[src|[ch|[lt|"
    },
    { 
      name: "The Call of the Wild", 
      rating: "3.5/5",
      link: "https://www.amazon.com/dp/151239582X?ots=1&linkCode=ogi&tag=oprah-auto-20&ascsubtag=[artid|10072.a.29576863[src|[ch|[lt|"
    }
  ],

  Mystery: [
    {
      name: "The Night Fire",
      rating: "5/5",
      link: "https://www.amazon.com/dp/0316485616?ots=1&linkCode=ogi&tag=oprah-auto-20&ascsubtag=[artid|10072.a.29576863[src|[ch|[lt|sale"
    },
    {
      name: "The Adventures of Sherlock Holmes",
      rating: "4.5/5",
      link: "https://www.amazon.com/dp/1508475318?ots=1&linkCode=ogi&tag=oprah-auto-20&ascsubtag=[artid|10072.a.29576863[src|[ch|[lt|"
    }
  ],
  Historical: [
    {
      name: "The Help",
      rating: "3.5/5",
      link: "https://www.amazon.com/dp/0399155341?ots=1&linkCode=ogi&tag=oprah-auto-20&ascsubtag=[artid|10072.a.29576863[src|[ch|[lt|sale"
    },
    {
      name: "One Hundred Years of Solitude",
      rating: "5/5",
      link: "https://www.amazon.com/dp/0060883286?ots=1&linkCode=ogi&tag=oprah-auto-20&ascsubtag=[artid|10072.a.29576863[src|[ch|[lt|sale"
    }
  ],
  Suspense: [
    {
      name: "The 19th Christmas",
      rating: "3/5",
      link: "https://www.amazon.com/dp/B07P1SSF9S?ots=1&linkCode=ogi&tag=oprah-auto-20&ascsubtag=[artid|10072.a.29576863[src|[ch|[lt|"
    },
    {
      name: "The Guardians",
      rating: "4.5/5",
      link: "https://www.amazon.com/dp/0385544189?ots=1&linkCode=ogi&tag=oprah-auto-20&ascsubtag=[artid|10072.a.29576863[src|[ch|[lt|sale"
    }
  ]
};

function App() {
  const [selectedGenre, setGenre] = useState("Historical");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      
      <div className="heading">My Book Recommendations</div>
      
      <div>
        {Object.keys(bookData).map((genre) => (

          <button onClick={() => genreClickHandler(genre)} className="GenreTabs" key={genre}>
            {genre}
          </button>

        ))}
      </div>

      <div className="booksContainer">
        <ul style={{ paddingInlineStart: "0" }}>
          {bookData[selectedGenre].map((book) => (

            <li key={book.name} className="books">
              <div className="bookName"> {book.name} </div>
              <div className="bookRating"> {book.rating} </div>
              <div className="btnContainer"> <a href={book.link} className="buynowBtn">Buy Now</a> </div>
            </li>
            
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
