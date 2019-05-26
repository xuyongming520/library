import request from '@/utils/request';

export function queryList() {
  return request({
    url: '/books/class/list',
    method: 'post',
    data: {
      page: 1,
      limit: 100,
      name: null,
    },
  });
}
