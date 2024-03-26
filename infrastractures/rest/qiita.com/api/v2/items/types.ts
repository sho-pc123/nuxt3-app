interface Group {
  createdAt: string
  description: string
  name: string
  private: boolean
  updatedAt: string
  urlName: string
}

interface Tag {
  name: string
  version: [string]
}[]

interface User {
  description: string
  facebookId: string
  followeesCount: number
  followerCount: number
  githubLoginName: string
  id: string
  itemsCount: number
  linkedinId: string
  location: string
  name: string
  organization: string
  permanentId: number
  profileImageUrl: string
  teamOnly: string
  twitterScreenName: string
  websiteUrl: string
}

interface TeamMemberShip {
  name: string
}

export interface QiitaArticleResponse {
  rendered_body: string
  body: string
  coediting: boolean
  commentsCount: number
  createdAt: string
  group: Group
  id: string
  likeCount: number
  privata: boolean
  reactionCount: number
  tags: Tag
  title: string
  updatedAt: string
  url: string
  user: User
  pageViewsCount: number
  teamMenmbership: TeamMemberShip
  organizationUrlName: string
  slide: boolean
}

export interface QiitaArticlesState {
  articles: QiitaArticleResponse[] | null
}