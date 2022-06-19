export interface PlayersData {
    players: Player[];
}

export interface MatchesData {
    matches: Match[];
}

export type Player = {
    id: string
    firstname: string
    lastname: string
    shortname: string
    sex: Sex
    picture: Picture
    country: Country
    stats: Stats
}


export enum Sex {
    MAN,
    WOMAN
}

export type Picture = {
    url: string
}

export type Match = {
    id: string
    players: [Player]
    winner: Player
    startTime: string
    endTime: string
}

export type Country = {
    picture: Picture
    code: string
}

export type Stats = {
    rank: number
    points: number
    weight: number
    height: number
    age: number
}