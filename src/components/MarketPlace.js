import React from "react"
import MarketPlaceCards from "./MarketPlaceCards"

function MarketPlace({
  currentUser,
  availableBooks,
  claimBookFromMarketPlace,
}) {
  console.log(availableBooks)
  const createMarketPlaceCards = availableBooks.map((book) => (
    <MarketPlaceCards
      key={book.id}
      available={book.available}
      book={book}
      description={book.description}
      claimBookFromMarketPlace={claimBookFromMarketPlace}
      currentUser={currentUser}
    />
  ))
  return (
    <>
      <h1>Market Place</h1>
      {createMarketPlaceCards}
    </>
  )
}

export default MarketPlace