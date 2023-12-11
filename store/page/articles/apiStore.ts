import { get as fetchTitle } from '@/store/http/articles/api'

export const pageApiStore = () => {
  const _state = useState('qiita-article', (): { title: Array } => {
    return {
      title: []
    }
  })

  const getters = {
    articleTitle: computed(() => {
      return _state.value.title
    })
  }

  const actions = {
    async actionTitle(): Promise<void> {
      const { data } = await fetchTitle()
      console.log(data)
      _state.value.title = data.value
    }
  }

  return {
    ...getters,
    ...actions
  }
}