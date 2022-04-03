<template>
  <div class="edit-article">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="Activity name" required>
        <a-input v-model:value="modelRef.name" />
      </a-form-item>
      <a-form-item label="Activity zone" required>
        <a-select v-model:value="modelRef.region" placeholder="please select your zone">
          <a-select-option value="shanghai">Zone one</a-select-option>
          <a-select-option value="beijing">Zone two</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="Activity type" required>
        <a-checkbox-group v-model:value="modelRef.type">
          <a-checkbox value="1" name="type">Online</a-checkbox>
          <a-checkbox value="2" name="type">Promotion</a-checkbox>
          <a-checkbox value="3" name="type">Offline</a-checkbox>
        </a-checkbox-group>
      </a-form-item>
      <a-form-item class="error-infos" :wrapper-col="{ span: 14, offset: 4 }" v-bind="errorInfos">
        <a-button type="primary" @click.prevent="onSubmit">Create</a-button>
        <a-button style="margin-left: 10px" @click="resetFields">Reset</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
// import { getArticleList } from '@/api/article'
// import {  } from 'ant-design-vue';

interface IArticleState {
}
// const useForm = Form.useForm;

export default defineComponent({
  components: {},

  setup() {

    const articleState = reactive<IArticleState>({
    });

    const rulesRef = reactive({
      name: [
        {
          required: true,
          message: 'Please input name',
        },
      ],
      region: [
        {
          required: true,
          message: 'Please select region',
        },
      ],
      type: [
        {
          required: true,
          message: 'Please select type',
          type: 'array',
        },
      ],
    });

    // const { resetFields, validate, validateInfos, mergeValidateInfo } = useForm(articleState, rulesRef);
    // const onSubmit = () => {
    //   validate()
    //     .then(() => {
    //     })
    //     .catch((err: any) => {
    //       console.log('error', err);
    //     });
    // };

    onMounted(() => {
    });

    return {
      articleState,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      // validateInfos,
      // resetFields,
      // onSubmit,
    };
  }
});
</script>

<style scoped>
  .edit-article {
    height: 100%;
  }
</style>
