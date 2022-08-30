import Vue from 'vue';
import {
    Button,
    Backtop,
    Tabs,
    TabPane,
    CarouselItem,
    Carousel,
    Form,
    FormItem,
    Input,
    RadioButton,
    RadioGroup,
    Checkbox,
    Menu,
    MenuItem,
    Avatar,
    Popover,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Dialog,
    Breadcrumb,
    BreadcrumbItem,
    Drawer,
    Message,
    MessageBox,
    Collapse,
    CollapseItem,
    Tag,
    Upload,
    Pagination,
    Select, Option,
} from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueScroll from "vuescroll";
import "vuescroll/dist/vuescroll.css";
import Router from "vue-router";
import router from "@/router";

Vue.config.productionTip = false;
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm

Vue.use(Router);
Vue.use(Button, Backtop);
Vue.use(Backtop);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(RadioButton);
Vue.use(RadioGroup);
Vue.use(Checkbox);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Avatar);
Vue.use(Popover);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Dialog);
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Drawer)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Tag)
Vue.use(Upload)
Vue.use(Pagination)
Vue.use(Select)
Vue.use(Option)
Vue.use(VueScroll);

new Vue({
    render: h => h(App), router: router,
}).$mount('#app');
