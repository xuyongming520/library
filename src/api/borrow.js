import request from '@/utils/request';

export function queryList({ limit, page, userId }) {
  return request({
    url: '/books/lend/record',
    method: 'post',
    data: {
      limit,
      page,
      userId,
    },
  });
}

export function borrow(id) {
  return request({
    url: '/books/lend',
    method: 'post',
    data: { booksId: id },
  });
}
