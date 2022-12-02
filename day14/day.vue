<template>
  <div class="box">
    <el-button type="text" @click="dialogFormVisible = true">添加事件</el-button>
    <el-dialog title="添加事件" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-width="120px">
        <el-form-item label="事件名称">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="待完成时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.date2"></el-time-picker>
          </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 日历 -->
    <el-calendar>
      <template slot="dateCell" slot-scope="{date, data}">
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split('-').slice(2).join() }}
        </p>
      </template>
    </el-calendar>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      value: new Date(),
      dialogFormVisible: false,
      form: {
        name: '',
        date1: '',
        date2: ''
      },
    }
  },
  methods: {
    add(e) {
      console.log(e);
    }
  },
  created() {

  },
}
</script>

<style lang="scss" scoped>
.box {
  width: 70%;
  height: 600px;
  margin: 20px auto;
}

.el-dialog {
  width: 40px;
}
</style>