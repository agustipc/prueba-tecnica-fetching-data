import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact'
import './App.css'

export function App () {
  const { fact, refreshRandomFact } = useCatFact()
  const { image } = useCatImage({ fact })

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <main>
      <h1>Random Cat App</h1>
      <button onClick={handleClick}>NEW FACT</button>
      {fact && <p>{fact}</p>}
      {image && <img src={image} alt={`image extracted using the first three words for ${fact}`} />}
    </main>
  )
}
