<template>
  <div class="article">
    <a-card class="article-header">
      <a-button type="primary" @click="onCreateArticle">创建</a-button>
    </a-card>

    <div class="article-list">
      <a-table :dataSource="articleList" :columns="columns" rowKey="id" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { getArticleList } from '@/api/article'
import { useRouter } from 'vue-router';

const getColums = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '名称',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '发布时间',
    dataIndex: 'time',
    key: 'time',
  },
]

interface IArticleState {
  articleList: any[];
}

export default defineComponent({
  components: {},

  setup() {

    const articleState = reactive<IArticleState>({
      articleList: [],
    });

    const loadTableData = async() => {
      const res = await getArticleList({});
      articleState.articleList = (res as any[]).map(item => {
        return {
          id: item.article_id,
          title: item.article_title,
          time: item.create_time,
        }
      });
      console.log(articleState.articleList);
    }

    const router = useRouter();

    const onCreateArticle = () => {
      router.push("/article/edit")
    }

    onMounted(() => {
      loadTableData()
    });

    return {
      ...toRefs(articleState),
      columns: getColums,
      onCreateArticle,
    };
  }
});
</script>

<style scoped>
  .article {
    height: 100%;
  }
  .article-header {
    margin-bottom: 10px;
    text-align: right;
  }
</style>
