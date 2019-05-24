import request from '@/utils/request';

export function queryList({ limit, page, userId }) {
  console.log({ limit, page, userId });
  return request({
    url: '/books/lend/record',
    method: 'post',
    data: {
      limit,
      page,
      userId: null,
    },
  });
}
