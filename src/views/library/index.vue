<template>
  <div id="library">
    <header>

    </header>
    <main>
        <el-table
          :data="borrowList"
          style="width: 100%"
          :row-class-name="tableRowClassName"
          :default-sort = "{prop: 'isReturn', order: 'ascending'}"
          >
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
            prop="actualReturn"
            label="归还时间"
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

    tableRowClassName({ row, rowIndex }) {
      console.log({ row, rowIndex });
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
    padding:20px;
  }
}
</style>
