import {request} from '@/utils/request';

// 查询商品列表
export function getGoodsList(currentPage, pageSize) {
  return request({
    url: '/api/forward/querygoods',
    method: 'get',
    params: {
      currentPage,
      pageSize
    }
  })
}
