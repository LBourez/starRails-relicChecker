import { player, character } from "./starRails"

export type mihomoRequest = {
  player: player,
  characters: character[]
}

export type frontResponse = {
  success: boolean,
  player: player,
  characters: character[]
}