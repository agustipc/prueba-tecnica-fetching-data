import { CAT_ENDPOINT_RANDOM_FACT } from '../constants'

export const getRandomFact = () => {
  return fetch(CAT_ENDPOINT_RANDOM_FACT)
    .then(res => {
      if (!res.ok) {
        return
      }
      return res.json()
    })
    .then(data => {
      const { fact } = data
      return fact
    })
}
