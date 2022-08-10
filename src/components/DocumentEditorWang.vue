<template>
  <div style="border: 1px solid #ccc;">
    <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editor"
        :defaultConfig="toolbarConfig"
        :mode="mode"
    />
    <Editor
        style="height: 140vh;width: 95vw"
        v-model="html"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="onCreated"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
export default Vue.extend({
  props:['docContent'],
  components: { Editor, Toolbar },
  data() {
    return {
      editor: null,
      html: '',
      toolbarConfig: { },
      editorConfig: { placeholder: '请输入内容...' },
      mode: 'default', // or 'simple'
      template:[
          '<p>随便写点东西吧~</p>',
          '<h1 style="text-align: left;"><span style="color: rgb(0, 0, 0);">工作周报</span></h1><p><br></p><p><br></p><ul><li style="text-align: left;"><span style="color: rgb(51, 51, 51);">汇报人：</span><span style="color: rgb(40, 96, 226);">@具体人名</span></li></ul><p style="text-align: left;"><span style="color: rgb(51, 51, 51);">时间：20XX年XX月XX日</span></p><p style="text-align: left;"><br></p><h2 style="text-align: left;"><span style="color: rgb(0, 0, 0);">本周主要进展</span></h2><p style="text-align: left;"><span style="color: rgb(196, 196, 196);">输入本周主要工作事项的进展情况</span></p><ol><li style="text-align: left;"><span style="color: rgb(196, 196, 196);"> </span></li><li style="text-align: left;"><span style="color: rgb(196, 196, 196);"> </span></li><li style="text-align: left;"><span style="color: rgb(196, 196, 196);"> </span></li></ol><h2 style="text-align: left;"></h2><h2 style="text-align: left;"><span style="color: rgb(0, 0, 0);">下周工作计划</span></h2><ul><li> </li><li> </li><li> </li></ul><p><br></p>',
          '<h1 style="text-align: left;"><span style="color: rgb(0, 0, 0);">会议纪要</span></h1><h1 style="text-align: left;"><span style="color: rgb(26, 26, 26);">一、会议信息</span></h1><ul><li>会议主题：简要描述会议主题和目标</li><li>会议时间：2021年11月12日（星期五） 14:30 - 15:00</li><li>会议地点：填写会议室或「插入」腾讯会议链接</li><li>参会人员：输入“@+人名”插入参会人员</li><li>相关资料：「插入」本次会议相关的「腾讯文档」或其他内容</li></ul><p style="text-align: left;"><br></p><h1 style="text-align: left;"><span style="color: rgb(26, 26, 26);">二、会议议题</span></h1><ol><li>输入要讨论的议题1</li><li>...</li><li>...</li></ol><p style="text-align: left;"><br></p><h1 style="text-align: left;"><span style="color: rgb(26, 26, 26);">三、会议结论</span></h1><ul><li>输入会议结论1</li><li>...</li><li>...</li></ul><p style="text-align: left;"><br></p><h1 style="text-align: left;"><span style="color: rgb(26, 26, 26);">四、后续跟进</span></h1><ul><li></li><li></li><li></li></ul><p style="text-align: left;"><br></p><h1 style="text-align: left;"></h1><p style="text-align: left;"><br></p>',
          '<p><br></p><h1 style="text-align: left;"></h1><h1 style="text-align: left;"><span style="color: rgb(0, 0, 0);">工作日报</span></h1><p style="text-align: left;"><br></p><h1 style="text-align: left;"><span style="color: rgb(26, 26, 26);">XX月XX日</span></h1><p style="text-align: left;"><br></p><h2 style="text-align: left;"><span style="color: rgb(0, 0, 0);">今日进展</span></h2><p style="text-align: left;"><span style="color: rgb(193, 193, 193);">记录今日主要工作任务的进展情况</span></p><ul><li></li><li></li><li></li></ul><p style="text-align: left;"><br></p><p style="text-align: left;"><br></p><h2 style="text-align: left;"><span style="color: rgb(0, 0, 0);">明日计划</span></h2><p style="text-align: left;"><span style="color: rgb(193, 193, 193);">列举明天要处理的工作任务</span></p><ul><li></li><li></li><li></li></ul><p style="text-align: left;"><br></p><p style="text-align: left;"><br></p><h2 style="text-align: left;"><span style="color: rgb(0, 0, 0);">反思与总结</span></h2><p style="text-align: left;"><span style="color: rgb(193, 193, 193);">记录遇到的工作问题、难点以及工作感悟。</span></p><ul><li>... ...</li><li>... ...</li><li>... ...</li></ul><h1 style="text-align: left;"></h1><h1 style="text-align: left;"><span style="color: rgb(26, 26, 26);">XX月XX日</span></h1><p style="text-align: left;"><br></p><h2 style="text-align: left;"><span style="color: rgb(0, 0, 0);">今日进展</span></h2><p style="text-align: left;"><span style="color: rgb(193, 193, 193);">记录今日主要工作任务的进展情况</span></p><ul><li></li><li></li><li></li></ul><p style="text-align: left;"><br></p><p style="text-align: left;"><br></p><h2 style="text-align: left;"><span style="color: rgb(0, 0, 0);">明日计划</span></h2><p style="text-align: left;"><span style="color: rgb(193, 193, 193);">列举明天要处理的工作任务</span></p><ul><li></li><li></li><li></li></ul><p style="text-align: left;"><br></p><p style="text-align: left;"><br></p><h2 style="text-align: left;"><span style="color: rgb(0, 0, 0);">反思与总结</span></h2><p style="text-align: left;"><span style="color: rgb(193, 193, 193);">记录遇到的工作问题、难点以及工作感悟。</span></p><ul><li>... ...</li><li>... ...</li><li>... ...</li></ul><p style="text-align: left;"><br></p><p style="text-align: justify;"><br></p><p style="text-align: left;"><br></p>',
          '<h1 style="text-align: left;"><span style="color: rgb(26, 26, 26);">项目总结</span></h1><p style="text-align: left;"><br></p><p style="text-align: left;"><span style="color: rgb(17, 17, 17);">1、项目周期：1.12 - 3.21</span></p><p style="text-align: left;"><span style="color: rgb(17, 17, 17);">2、项目负责人：</span><span style="color: rgb(30, 111, 255);">@负责人 1</span><span style="color: rgb(17, 17, 17);">，</span><span style="color: rgb(30, 111, 255);">@负责人 2</span><span style="color: rgb(17, 17, 17);">，...</span></p><p style="text-align: left;"><br></p><h2 style="text-align: left;"><span style="color: rgb(17, 17, 17);">一、项目概览</span></h2><p style="text-align: left;"><span style="color: rgb(17, 17, 17);">该项目历时约3月，项目内容主要为……</span></p><p style="text-align: left;"><br></p><p style="text-align: left;"><br></p><h2 style="text-align: left;"><span style="color: rgb(17, 17, 17);">二、项目时间轴</span></h2><p><br></p><table style="width: auto;"><tbody><tr><td colSpan="1" rowSpan="1" width="150">阶段</td><td colSpan="1" rowSpan="1" width="150">计划日期</td><td colSpan="1" rowSpan="1" width="150">进度</td><td colSpan="1" rowSpan="1" width="150">备注</td></tr><tr><td colSpan="1" rowSpan="1" width="150">产品设计评审</td><td colSpan="1" rowSpan="1" width="150">1月22日</td><td colSpan="1" rowSpan="1" width="150">已完成</td><td colSpan="1" rowSpan="1" width="150"></td></tr><tr><td colSpan="1" rowSpan="1" width="150">研发评估</td><td colSpan="1" rowSpan="1" width="150">1月23日</td><td colSpan="1" rowSpan="1" width="150">已完成</td><td colSpan="1" rowSpan="1" width="150"></td></tr><tr><td colSpan="1" rowSpan="1" width="150">研发交付测试</td><td colSpan="1" rowSpan="1" width="150">2月12日</td><td colSpan="1" rowSpan="1" width="150">已完成</td><td colSpan="1" rowSpan="1" width="150"></td></tr><tr><td colSpan="1" rowSpan="1" width="150">集成测试</td><td colSpan="1" rowSpan="1" width="150">2月14日</td><td colSpan="1" rowSpan="1" width="150">已完成</td><td colSpan="1" rowSpan="1" width="150">存在部分漏洞</td></tr><tr><td colSpan="1" rowSpan="1" width="150">对内发布</td><td colSpan="1" rowSpan="1" width="150">2月24日</td><td colSpan="1" rowSpan="1" width="150">已完成</td><td colSpan="1" rowSpan="1" width="150"></td></tr></tbody></table><p style="text-align: left;"><br></p><p style="text-align: left;"><br></p><h2 style="text-align: left;"><span style="color: rgb(17, 17, 17);">三、项目成果</span></h2><ol><li>填写项目中的成果，以数据形式呈现。</li><li>成果2</li><li>成果3</li></ol><p style="text-align: left;"><br></p><p style="text-align: left;"><br></p><h2 style="text-align: left;"><span style="color: rgb(17, 17, 17);">四、项目不足</span></h2><ol><li>复盘项目，指出项目中有待改进的地方。</li><li>改进点2</li><li>改进点3</li></ol><p style="text-align: left;"><br></p><p style="text-align: left;"><br></p><h2 style="text-align: left;"><span style="color: rgb(17, 17, 17);">五、后续跟进</span></h2><p style="text-align: left;"><span style="color: rgb(193, 193, 193);">针对成果与不足，提出改进措施。</span></p><ul><li></li><li></li><li></li></ul><p style="text-align: left;"><br></p><p style="text-align: left;"><br></p><p style="text-align: left;"><br></p><p><br></p>',
      ]
    }
  },
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
    },
    showMe() {
      console.log(this.html)
      this.$emit('getEditorContent',this.html);
    }
  },
  created() {
    this.$nextTick(()=>{
      if(this.docContent!=='') {
        this.html = this.docContent;
      }
    })
  },
  mounted() {
    if(this.$route.params.isCreate) {
      setTimeout(() => {
        this.html = this.template[this.$route.params.templateType];
      }, 1)
    }
  },
  beforeDestroy() {
    const editor = this.editor
    if (editor == null) return
    editor.destroy() // 组件销毁时，及时销毁编辑器
  }
})
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>
