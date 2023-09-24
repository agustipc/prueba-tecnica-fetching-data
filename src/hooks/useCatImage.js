import { useState, useEffect } from 'react'
import { CAT_IMAGE_PREFIX } from '../constants'

export function useCatImage ({ fact }) {
  const [image, setImage] = useState()

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImage(url)
      })
  }, [fact])

  return { image: `${CAT_IMAGE_PREFIX}${image}` }
}
