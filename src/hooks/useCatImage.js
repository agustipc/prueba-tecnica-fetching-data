import { useState, useEffect } from 'react'
import { CAT_IMAGE_PREFIX } from '../constants'
import { getRandomImage } from '../services/images'

export function useCatImage ({ fact }) {
  const [image, setImage] = useState()

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    getRandomImage(threeFirstWords).then(setImage)
  }, [fact])

  return { image: `${CAT_IMAGE_PREFIX}${image}` }
}
