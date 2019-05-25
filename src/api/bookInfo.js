import request from '@/utils/request';

export function queryList({
  limit, page, name, author, publishers,
}) {
  return request({
    url: '/books/information/list',
    method: 'post',
    data: {
      limit, page, name, author, publishers,
    },
  });
}

export function query(id) {
  return request({
    url: '/books/information/detail',
    method: 'get',
    params: { id },
  });
}
