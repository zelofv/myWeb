export const mixin = {
    methods: {
        toLogin() {
            this.toAnother('login');
        },
        toRegister() {
            this.toAnother('register');
        },
        toMain() {
            this.toAnother('main');
        },
        toHomePage() {
            this.toAnother('homePage');
        },
        toAnother(anotherPageName) {
            if (this.$route.name === anotherPageName) return;
            this.$router.push({
                name:anotherPageName,
            }).catch(alert);
        },
    }
}