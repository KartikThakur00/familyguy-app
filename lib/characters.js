export async function getAllCharacters() {
    const data = await fetch(`/api/characters`)
  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}

export async function getCharacterBySlug(slug) {
  const data = await fetch(`/api/characters/${slug}`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()

}
