<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item class="title">
        <span class="space"></span>添加客户
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="8">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="130px"
          class="demo-ruleForm">
          <el-form-item label="客户电话：" prop="telephone">
            <el-input v-model="ruleForm.telephone"></el-input>
          </el-form-item>
          <el-form-item label="常用水品种" prop="variety">
            <el-select v-model="ruleForm.variety" placeholder="请选择">
              <el-option label="A品牌" value="a"></el-option>
              <el-option label="B品牌" value="b"></el-option>
            </el-select>
          </el-form-item>
           <el-form-item label="单价" prop="price">
            <el-input v-model="ruleForm.price"></el-input>
          </el-form-item>
          <el-form-item label="水票（张/百元）" prop="number">
            <el-input v-model="ruleForm.number"></el-input>
          </el-form-item>
          <el-form-item label="地址" prop="address">
            <el-input v-model="ruleForm.address"></el-input>
          </el-form-item>
          <el-form-item label="区域位置" prop="area">
            <el-select v-model="ruleForm.area" placeholder="请选择">
              <el-option label="北京市" value="bj"></el-option>
              <el-option label="石家庄市" value="sjz"></el-option>
              <el-option label="承德市" value="cd"></el-option>
            </el-select>
          </el-form-item>
         <el-form-item label="客户类型" prop="type">
            <el-radio-group v-model="ruleForm.type">
            <el-radio label="小区"></el-radio>
            <el-radio label="底商"></el-radio>
            </el-radio-group>
        </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
    data() {
      return {
        ruleForm: {
          telephone: '',
          variety: '',
          price: '',
          number: '',
          address: '',
          area: '',
          type: ''
        },
        rules: {
          telephone: [
            { required: true, message: '请输入客户电话', trigger: 'blur' }
          ],
          variety: [
            { required: true, message: '请选择常用水品种', trigger: 'change' }
          ],
          price: [
            { required: true, message: '请输入单价', trigger: 'change' }
          ],
          number: [
            { required: true, message: '请输入水票（张/百元）', trigger: 'change' }
          ],
          address: [
            { required: true, message: '请输入地址', trigger: 'change' }
          ],
          area: [
            { required: true, message: '请选择区域位置', trigger: 'change' }
          ],
          type: [
            { required: true, message: '请选择客户类型', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
