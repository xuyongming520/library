<template>
  <div id="library">
    <header>

    </header>
    <main>
        <div v-if='!isLogin' class="tips">您还未登录，请先登陆</div>
        <el-table
          :data="borrowList"
          style="width: 100%"
          :default-sort = "{prop: 'isReturn', order: 'ascending'}"
          v-else>
          <el-table-column
            prop="pkId"
            label="编号"
            width="100">
          </el-table-column>
          <el-table-column
            prop="name"
            label="书名"
            width="250">
          </el-table-column>
          <el-table-column
            prop="gmtCreate"
            label="借阅时间"
            width="250">
          </el-table-column>
          <el-table-column
            prop="gmtReturn"
            label="到期时间"
            width="250">
          </el-table-column>
          <el-table-column
            prop="fine"
            label="罚款">
          </el-table-column>
          <el-table-column
            prop="isReturn"
            label="状态">
            <template slot-scope="scope">
              {{ isReturnState[scope.row.isReturn].display_name }}
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            >
            <template slot-scope="scope" v-if="!scope.row.isReturn">
              <el-button
              size="mini"
              type="primary"
              @click="renew(scope.row.problemId)">续借</el-button>
            </template>
          </el-table-column>
        </el-table>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as borrow from '@/api/borrow';

export default {
  name: 'library',
  data() {
    return {
      borrowList: [],
      listQuery: {
        limit: 10,
        page: 1,
        userId: null,
      },
      isReturnState: [
        { value: 0, display_name: '在借阅' },
        { value: 1, display_name: '已归还' },
        { value: 2, display_name: '续借中' },
      ],
    };
  },
  computed: {
    ...mapGetters([
      'isLogin',
      'uniqueId',
    ]),
  },
  methods: {
    getList() {
      borrow.queryList(this.listQuery)
        .then((result) => {
          console.log(result.data.data.list);
          if (result.code === 0) {
            this.borrowList = [];
          } else {
            this.borrowList = result.data.data.list;
          }
        });
    },
    renew() {

    },
  },
  created() {
    this.getList();
  },
};
</script>

<style lang='scss' scoped>
#library{
  height: 15em;
  header{
    height: 100%;
    background: url('../../assets/testimonialsbg.jpg') no-repeat center center;
    background-size: cover;
    position: relative;
  }
  main{
    width: $detailWidth;
    margin: 0 auto;
    height: 100%;
    margin-top:20px;
    padding:20px;
    .tips{
      font-size: 2em;
      color:#C0C4CC
    }
  }
}
</style>
