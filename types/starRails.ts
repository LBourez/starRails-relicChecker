export type player = {
  uid: string,
  nickname: string,
  level: number,
  wordl_level: number,
  friend_count: number,
  avatar: {
    id: string,
    name: string,
    icon: string
  },
  signature: string,
  is_display: boolean,
  space_info: {
    challenge_data: {
      maze_group_id: number,
      maze_group_index: number,
      pre_maze_group_index: number
    },
    pass_area_progress: number,
    light_cone_count: number,
    avatar_count: number,
    achievement_count: number
  }
}

export type character = {
  id: string,
  name: string,
  rarity: number,
  rank: number,
  level: number,
  promotion: number,
  icon: string,
  preview: string,
  portrait: string,
  rank_icons: string[],
  path: path,
  element: element,
  skills: skills[],
  skill_tree: skillTreeElement[],
  light_cone: lightcone,
  relics: relic[],
  relic_sets: relic_set[],
  attributes: attribute[],
  additions: attribute[],
  properties: attribute[]
}

type path = {
  id: string,
  name: string,
  icon: string
}

type skills = {
  id: string,
  name: string,
  level: number,
  max_level: number,
  element : element,
  type: string,
  type_text: string,
  effect_text: string,
  simple_desc: string,
  desc: string,
  icon: string,
}

type element = {
  id: string,
  name: string,
  color: string,
  icon: string
}

type skillTreeElement = {
  id: string,
  level: number,
  icon: string
}

type lightcone = {
  id: string,
  name: string,
  rarity: number,
  rank: number,
  level: number,
  promotion: number,
  icon: string,
  preview: string,
  portrait: string,
  path : path,
  attributes: lightconeAttribute[],
  properties:[]
}

type lightconeAttribute = {
  field: string,
  name: string,
  icon: string,
  value: number,
  display : string,
  percent: boolean
}

export type relic = {
  id: string,
  name: string,
  set_id: string,
  set_name: string,
  rarity: number,
  level: number,
  icon: string,
  main_affix: attribute,
  sub_affix: relicSubAffix[]
}

type attribute = {
  type : string,
  field : string,
  name : string,
  icon : string,
  value : number,
  display : string,
  percent : boolean
}

export type relicSubAffix = {
  type : string,
  field : string,
  name : string,
  icon : string,
  value : number,
  display : string,
  percent : boolean,
  count : number
  step : number
}

type relic_set = {
  id: string,
  name: string,
  icon: string,
  num: number,
  desc: string,
  properties: attribute[] | []
}