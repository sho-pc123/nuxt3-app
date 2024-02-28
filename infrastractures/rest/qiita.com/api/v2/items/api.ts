/**
 * Qiita記事一覧取得API
 * @returns Qiita記事一覧取得結果
 */
export const get = () => {
  return useFetch('https://qiita.com/api/v2/items?page=1&per_page=10', {
    method: "GET",
    headers: {
      'Authorization': 'Bearer 2950aff10aaded5955af11c26017529143baff77'
    }
  })
}