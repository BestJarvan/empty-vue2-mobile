import { ajax } from './axios'

// 简历详情
export const SITTER_DETAIL = data => {
  ajax({ url: '/base-center/cts/sale/program/generate/resume', data, method: 'POST' })
}
