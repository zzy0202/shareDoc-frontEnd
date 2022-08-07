import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeMain from "@/views/HomeMain";
import ManageTeam from "@/views/ManageTeam";
import ManageOnlineDocument from "@/views/ManageOnlineDocument";
import ManageDesignPrototype from "@/views/ManageDesignPrototype";
import ManageDrawPicture from "@/views/ManageDrawPicture";
import LoginPage from "@/views/LoginPage";
import DocumentEditor from "@/views/DocumentEditorPage";
import TeamDetails from "@/views/TeamDetails";
import store from "@/store";

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
		redirect: {
			name: 'homeMain',
		},
		children: [
			{path: '/main', name: 'homeMain', component: HomeMain},
			{path: '/manageTeam', name: 'manageTeam', component: ManageTeam},
			{path: '/manageDocument', name: 'manageDocument', component: ManageOnlineDocument},
			{path: '/manageDesignPrototype', name: 'manageDesignPrototype', component: ManageDesignPrototype},
			{path: '/teamDetails',name: 'teamDetails', component: TeamDetails},
		]
	},
	{
		path: '/login',
		name: 'login',
		component: LoginPage,
		meta: {
			requiredLogin: true,
		}
	},
	{
		path: '/documentEdit',
		name: 'documentEdit',
		component: DocumentEditor,
	}
]

const router = new VueRouter({
	routes
})

router.beforeEach((to, from, next) => {
	if (to.path === '/login') {
		next();
	} else {
		if (!store.state.isLogin) {
			next({
				path: '/login',
			})
		} else {
			next();
		}
	}
})

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {

	return originalPush.call(this, location).catch(err => err)
}
export default router
