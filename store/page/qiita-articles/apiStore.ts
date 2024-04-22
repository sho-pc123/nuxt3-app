import { get as getArticles } from '@/infrastractures/rest/qiita.com/api/v2/items'
import type {QiitaArticlesState} from '@/infrastractures/rest/qiita.com/api/v2/items'
import type { QiitaArticleResponse } from "@/infrastractures/rest/qiita.com/api/v2/items"

export const pageApiStore = () => {
  const _state = useState<QiitaArticlesState>('qiita-article', () => {
    return {
      articles: null
    }
  })

  const getters = {
    /**
     * Qiita記事一覧取得
     * @returns Qiita記事一覧取得結果
    */
    articles: computed<QiitaArticleResponse[]>(() => {
      if(_state.value.articles === null){
        throw new Error('_state.value.articles is null')
      }
      return _state.value.articles
    })
  }

  const actions = {
    /**
     * Qiita記事一覧取得
    */
    async fetchArticles(): Promise<void> {
      const { data } = await getArticles()
      if(data === null){
        throw new Error('failed to fetch qiita articles')
      }
      _state.value.articles = data.value as QiitaArticleResponse[]
    }
  }

  return {
    ...getters,
    ...actions
  }
}