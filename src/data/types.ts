export type Accent = 'wood' | 'brass' | 'sand' | 'ink'

export interface Feature {
  id: string
  icon: string
  title: string
  desc: string
  accent: Accent
}

export interface Step {
  id: string
  num: string
  title: string
  desc: string
  accent: Accent
}

export interface Concern {
  id: string
  q: string
  a: string
}

export interface Spec {
  label: string
  value: string
}

export interface Note {
  id: string
  title: string
  body: string
  accent: Accent
}

export interface Stat {
  value: string
  label: string
  note?: string
}
