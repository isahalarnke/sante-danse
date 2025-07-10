import { dummyPainData } from '../data/dummyPainData'

export function getPainEntries() {
  try {
    return JSON.parse(localStorage.getItem('painEntries') || '[]')
  } catch {
    return []
  }
}

export function addPainEntry(entry) {
  const prev = getPainEntries()
  localStorage.setItem('painEntries', JSON.stringify([...prev, entry]))
}

export function clearPainEntries() {
  localStorage.removeItem('painEntries')
}

export function loadDummyData() {
  const currentEntries = getPainEntries()
  const updatedEntries = [...currentEntries, ...dummyPainData]
  localStorage.setItem('painEntries', JSON.stringify(updatedEntries))
  return updatedEntries
}
