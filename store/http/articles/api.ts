// export const get = () => {
//   const { data } = useFetch('https://qiita.com/api/v2/items?page=1&per_page=1', {
//     method: "GET",
//     headers: {
//       'Authorization': 'Bearer 2950aff10aaded5955af11c26017529143baff77'
//     }
//   })
// }

export const get = () => {
  return useFetch('https://qiita.com/api/v2/items?page=1&per_page=10', {
    method: "GET",
    headers: {
      'Authorization': 'Bearer 2950aff10aaded5955af11c26017529143baff77'
    }
  })
}

// export const get = () => {
//   const { $restClientApi } = useNuxtApp()
//   return $restClientApi('https://qiita.com/api/v2/items?page=1&per_page=1', {
//     method: "GET",
//     headers: {
//       'Authorization': 'Bearer 2950aff10aaded5955af11c26017529143baff77'
//     }
//   })
// }