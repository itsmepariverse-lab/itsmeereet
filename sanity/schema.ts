import { type SchemaTypeDefinition } from 'sanity'

import experience from './schemas/experience'
import education from './schemas/education'
import skill from './schemas/skill'
import hobby from './schemas/hobby'
import profile from './schemas/profile'
import declaration from './schemas/declaration'
import project from './schemas/project'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [experience, education, skill, hobby, profile, declaration, project],
}
