import BaseApi from '../api'

export const sendMessage = (data) =>
  BaseApi.request('/websdk', {
    data,
    method: 'post'
  })

export const getTheme = () =>
  BaseApi.request('/websdk', {
    method: 'get'
  })
