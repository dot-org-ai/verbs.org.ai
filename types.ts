/**
 * verbs.org.ai - Type Definitions
 *
 * Defines the Verb class, connecting actions to their semantic components (act, actor, action, etc.).
 *
 * @see https://verbs.org.ai
 * @license CC-BY-SA-4.0
 */

import type { Thing } from 'schema.org.ai'

import type { Schema } from 'schema.org.ai'

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

