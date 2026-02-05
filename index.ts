/**
 * verbs.org.ai
 *
 * Defines the Verb class, connecting actions to their semantic components (act, actor, action, etc.).
 *
 * @example
 * ```typescript
 * import { Verb, things } from 'verbs.org.ai'
 * ```
 *
 * @see https://verbs.org.ai
 * @license CC-BY-SA-4.0
 */

// Re-export types
export type { Verb } from './types'

// Re-export conjugation functions
export {
  toAction,
  toActivity,
  toEvent,
  toInverse,
  toThirdPerson,
  toSubjectNoun,
  toObjectNoun,
  isPastTense,
  conjugate,
  IRREGULAR_PAST_TENSE,
  IRREGULAR_THIRD_PERSON,
  IRREGULAR_SUBJECT_NOUNS,
  IRREGULAR_OBJECT_NOUNS,
} from './conjugation'

// Import types for runtime use
import type { Verb } from './types'

/**
 * Collection of all verbs instances
 * Fetched from https://verbs.org.ai
 */
export const things: Promise<(Verb)[]> = fetch('https://verbs.org.ai/things.json')
  .then(res => res.json())
  .catch(() => [])

/**
 * Get a specific Verb by ID
 */
export async function get(id: string): Promise<Verb | undefined> {
  const items = await things
  return items.find(item => item['@id'] === id || item['@id'] === `https://verbs.org.ai/${id}`)
}

/**
 * Search verbs by name or description
 */
export async function search(query: string): Promise<(Verb)[]> {
  const items = await things
  const q = query.toLowerCase()
  return items.filter(item =>
    item.name?.toLowerCase().includes(q) ||
    item.description?.toLowerCase().includes(q)
  )
}

/**
 * Domain metadata
 */
export const domain = {
  '@context': 'https://verbs.org.ai',
  '@id': 'https://verbs.org.ai',
  name: 'verbs.org.ai',
  parent: 'schema.org.ai',
  types: ['Verb']
} as const
