

/*
 import Login from '../views/Login.vue';
 import MainIndex from '../views/MainIndex.vue';
 import MainResource from '../views/MainResource.vue';
 import MainTesting from '../views/MainTesting.vue';
 import MainUser from '../views/MainUser.vue';

 import SubAtten from '../views/SubAtten.vue';
 import SubAttenDetail from '../views/SubAttenDetail.vue';
 */

const Login = r => require.ensure([], () => r(require('@/views/Login.vue')), 'Login');
const MainIndex = r => require.ensure([], () => r(require('@/views/MainIndex.vue')), 'MainIndex');
const MainResource = r => require.ensure([], () => r(require('@/views/MainResource.vue')), 'MainResource');
const MainTesting = r => require.ensure([], () => r(require('@/views/MainTesting.vue')), 'MainTesting');
const MainUser = r => require.ensure([], () => r(require('@/views/MainUser.vue')), 'MainUser');
// 考勤
const SubAtten = r => require.ensure([], () => r(require('@/views/SubAtten.vue')), 'SubAtten');
const SubAttenDetail = r => require.ensure([], () => r(require('@/views/SubAttenDetail.vue')), 'SubAttenDetail');
// 课纪
const SubManager = r => require.ensure([], () => r(require('@/views/SubManager.vue')), 'SubManager');
const SubDiscipline = r => require.ensure([], () => r(require('@/views/SubDiscipline.vue')), 'SubDiscipline');
const SubDisciplineEditLabel = r => require.ensure([], () => r(require('@/views/SubDisciplineEditLabel.vue')), 'SubDisciplineEditLabel');
const SubDisciplineEdit = r => require.ensure([], () => r(require('@/views/SubDisciplineEdit.vue')), 'SubDisciplineEdit');
const SubDisciplineReport = r => require.ensure([], () => r(require('@/views/SubDisciplineReport.vue')), 'SubDisciplineReport');
const SubWorkrestEdit = r => require.ensure([], () => r(require('@/views/SubWorkrestEdit.vue')), 'SubWorkrestEdit');
const SubTimetableEdit = r => require.ensure([], () => r(require('@/views/SubTimetableEdit.vue')), 'SubTimetableEdit');
const SubTimetableEditWeekend = r => require.ensure([], () => r(require('@/views/SubTimetableEditWeekend.vue')), 'SubTimetableEditWeekend');
// 作业
const SubTask = r => require.ensure([], () => r(require('@/views/SubTask.vue')), 'SubTask');
const SubTaskEdit = r => require.ensure([], () => r(require('@/views/SubTaskEdit.vue')), 'SubTaskEdit');
const SubTaskReport = r => require.ensure([], () => r(require('@/views/SubTaskReport.vue')), 'SubTaskReport');
// 绑定 - 信息完善
const SubInfoTeacher = r => require.ensure([], () => r(require('@/views/SubInfoTeacher.vue')), 'SubInfoTeacher');
const SubInfoStudent = r => require.ensure([], () => r(require('@/views/SubInfoStudent.vue')), 'SubInfoStudent');
const SubInfoClass = r => require.ensure([], () => r(require('@/views/SubInfoClass.vue')), 'SubInfoClass');
const SubInfoSingle = r => require.ensure([], () => r(require('@/views/SubInfoSingle.vue')), 'SubInfoSingle');
// 成绩 - 考试
const SubScore = r => require.ensure([], () => r(require('@/views/SubScore.vue')), 'SubScore');
const SubScoreDetail = r => require.ensure([], () => r(require('@/views/SubScoreDetail.vue')), 'SubScoreDetail');
const SubScoreEdit = r => require.ensure([], () => r(require('@/views/SubScoreEdit.vue')), 'SubScoreEdit');
const SubTest = r => require.ensure([], () => r(require('@/views/SubTest.vue')), 'SubTest');


export default  [
  { path: '*', redirect: '/MainIndex'},
  { path: '/', redirect: '/MainIndex'},
  { path: '/Login', name: 'Login', component:Login   ,meta:{ keepAlive:false,title:"登录",isLogin:false }},
  { path: '/MainIndex', name: 'MainIndex', component:MainIndex   ,meta:{keepAlive:true, title:"爱微班",isLogin:true }},
  { path: '/MainResource', name: 'MainResource', component:MainResource   ,meta:{ keepAlive:true,title:"优家",isLogin:true }},
  { path: '/MainTesting', name: 'MainTesting', component:MainTesting   ,meta:{ keepAlive:true,title:"模测",isLogin:true }},
  { path: '/MainUser', name: 'MainUser', component:MainUser   ,meta:{keepAlive:true, title:"个人中心",isLogin:true }},

  { path: '/SubAtten', name: 'SubAtten', component:SubAtten   ,meta:{keepAlive:true, title:"考勤",isLogin:true ,keepAliveRoutes:['SubAttenDetail' ],noLoading:true  }},
  { path: '/SubAttenDetail', name: 'SubAttenDetail', component:SubAttenDetail   ,meta:{keepAlive:true, title:"考勤月报",isLogin:true }},
  { path: '/SubManager', name: 'SubManager', component:SubManager   ,meta:{keepAlive:true, title:"课纪",isLogin:true }},
  { path: '/SubTimetableEdit', name: 'SubTimetableEdit', component:SubTimetableEdit   ,meta:{keepAlive:true, title:"编辑课表",isLogin:true }},
  { path: '/SubTimetableEditWeekend', name: 'SubTimetableEditWeekend', component:SubTimetableEditWeekend   ,meta:{keepAlive:true, title:"自定义周末",isLogin:true }},
  { path: '/SubWorkrestEdit', name: 'SubWorkrestEdit', component:SubWorkrestEdit   ,meta:{keepAlive:false, title:"创建作息任务",isLogin:true }},
  { path: '/SubDisciplineEdit', name: 'SubDisciplineEdit', component:SubDisciplineEdit   ,meta:{keepAlive:true, title:"表扬",isLogin:true }},
  { path: '/SubDisciplineReport', name: 'SubDisciplineReport', component:SubDisciplineReport   ,meta:{keepAlive:true, title:"纪律报表",isLogin:true }},
  { path: '/SubDisciplineEditLabel', name: 'SubDisciplineEditLabel', component:SubDisciplineEditLabel   ,meta:{keepAlive:false, title:"标签管理",isLogin:true }},
  { path: '/SubTask', name: 'SubTask', component:SubTask   ,meta:{keepAlive:true, title:"作业",isLogin:true ,keepAliveRoutes:['SubTaskReport' ],noLoading:true }},
  { path: '/SubTaskEdit', name: 'SubTaskEdit', component:SubTaskEdit   ,meta:{ keepAlive:false, title:"创建作业",isLogin:true }},
  { path: '/SubTaskReport', name: 'SubTaskReport', component:SubTaskReport   ,meta:{keepAlive:true, title:"作业报表",isLogin:true }},
  { path: '/SubInfoTeacher', name: 'SubInfoTeacher', component:SubInfoTeacher   ,meta:{keepAlive:true, title:"完善老师信息",isLogin:true }},
  { path: '/SubInfoStudent', name: 'SubInfoStudent', component:SubInfoStudent   ,meta:{keepAlive:true, title:"完善家长信息",isLogin:true }},
  { path: '/SubInfoClass', name: 'SubInfoClass', component:SubInfoClass   ,meta:{keepAlive:true, title:"完善班级信息",isLogin:true }},
  { path: '/SubInfoSingle', name: 'SubInfoSingle', component:SubInfoSingle   ,meta:{keepAlive:false, title:"完善信息",isLogin:true }},

  { path: '/SubScore', name: 'SubScore', component:SubScore   ,meta:{keepAlive:true, title:"班级成绩",isLogin:true }},
  { path: '/SubScoreDetail', name: 'SubScoreDetail', component:SubScoreDetail   ,meta:{ keepAlive:false, title:"成绩详情",isLogin:true }},
  { path: '/SubScoreEdit', name: 'SubScoreEdit', component:SubScoreEdit   ,meta:{ keepAlive:false, title:"完善成绩",isLogin:true }},
  { path: '/SubTest', name: 'SubTest', component:SubTest   ,meta:{ keepAlive:false, title:"添加考试",isLogin:true }},

]
