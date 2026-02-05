/**
 * verbs.org.ai - Type Definitions
 *
 * Defines the Verb class, connecting actions to their semantic components (act, actor, action, etc.).
 *
 * @see https://verbs.org.ai
 * @license CC-BY-SA-4.0
 */

/**
 * Base Schema type (JSON-LD compatible)
 */
export interface Schema {
  '@context'?: string
  '@type'?: string
  '@id'?: string
}

/**
 * Verb - https://verbs.org.ai/Verb
 */
export interface Verb extends Schema {
  '@context': 'https://verbs.org.ai'
  '@type': 'https://verbs.org.ai/Verb'
  '@id': string
  name: string
  description?: string
}

/**
 * Verb conjugation forms
 */
export interface VerbConjugation {
  base: string
  activity: string
  event: string
  inverse: string
  thirdPerson: string
  subjectNoun: string
  objectNoun: string
}
