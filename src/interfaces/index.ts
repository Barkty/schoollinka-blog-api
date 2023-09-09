export interface IBlog {
    title: string,
    avatar?: string[],
    content: string,
    likes?: number
}

export interface IComment {
    content: string,
    likes?: number
}