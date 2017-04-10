Polymer({

    is: 'cp-chrome',

    created: function () {
        console.log('cp-chrome created');
        this.injectHead();
    },

    ready: function () {
        console.log('cp-chrome ready');
        window.portal = this.envs[this.env];
        this.registerAPI();
    },

    properties: {
        env: {
            type: String,
            value: 'prod',
            observer: '_handleEnvChange',
        },
        envMap: {
            type: Object,
        },
        locale: {
            type: String,
            value: 'en',
            observer: '_handleLangChange',
        },
    },

    envs: {
        'prod': {
            host    : 'https://access.redhat.com',
            idp_url : 'https://idp.redhat.com',
            nrid    : '14615289',
            nrlk    : '2a497fa56f',
        },
        'stage': {
            host    : "https://access.stage.redhat.com",
            idp_url : "https://idp.stage.redhat.com",
            nrid    : "14616773",
            nrlk    : "d812f09588",
        },
        'qa': {
            host    : "https://access.qa.redhat.com",
            idp_url : "https://idp.qa.redhat.com",
            nrid    : "14616773",
            nrlk    : "d812f09588",
        },
        'dev': {
            host    : "https://access.devgssci.devlab.phx1.redhat.com",
            idp_url : "https://idp.dev2.redhat.com",
            nrid    : "14616773",
            nrlk    : "d812f09588",
        },
    },

    _handleEnvChange: function (env) {
        console.log('change env to ' + env);
        this.set('envMap', this.envs[env]);
    },

    _handleLangChange: function (lang) {
        console.log('change language to ' + lang);
    },

    registerAPI: function () {
        window.portal.setLocale = locale => this.set('locale', locale);
    },

    injectHead: function () {
        console.log('injecting cp-head elements');
        var head_elements = document.createElement('cp-head');
        while (head_elements.children.length) {
            document.head.appendChild(head_elements.children[0]);
        }
    },

});

