const sampleData = [
  {
    id: 1,
    type: 'title',
    value: '',
    titleKey: 'sidebar.defaultHeader',
    links: [
      {
        id: 1,
        type: 'link',
        value: 'Home',
        titleKey: 'sidebar.home',
        path: '/',
        icon: require('../components/sidebarNavMenu/images/sidebar/home.png')
      }
    ]
  },
  {
    id: 2,
    type: 'title',
    value: 'FIND',
    titleKey: 'sidebar.findHeader',
    links: [
      {
        id: 1,
        type: 'link',
        value: 'Auctions',
        titleKey: 'sidebar.auctions',
        path: '/auctions',
        icon: require('../components/sidebarNavMenu/images/sidebar/auctions@2x.png'),
        showBadge: true
      }
    ]
  },
  {
    id: 3,
    type: 'title',
    value: 'MY COPART',
    titleKey: 'sidebar.myCopartHeader',
    links: [
      {
        id: 1,
        type: 'link',
        value: 'WatchList',
        titleKey: 'sidebar.watchlist',
        path: '/watchlist',
        icon: require('../components/sidebarNavMenu/images/sidebar/watchlist@2x.png'),
        showBadge: true
      },
      {
        id: 2,
        type: 'link',
        value: 'My Bids',
        titleKey: 'sidebar.myBids',
        path: '/mybids',
        icon: require('../components/sidebarNavMenu/images/sidebar/my-bids_iPhone@2x.png'),
        showBadge: true
      },
      {
        id: 3,
        type: 'link',
        value: 'My Lots Won',
        titleKey: 'sidebar.myLotsWon',
        path: '/lotswon',
        icon: require('../components/sidebarNavMenu/images/sidebar/lots-won@2x.png'),
        showBadge: true
      },
      {
        id: 4,
        type: 'link',
        value: 'My Lots Lost',
        titleKey: 'sidebar.myLotsLost',
        path: '/lotslost',
        icon: require('../components/sidebarNavMenu/images/sidebar/lots-lost@2x.png'),
        showBadge: true
      }
    ],
    isAuthRequired: true
  },
  {
    id: 4,
    type: 'title',
    value: 'HELP',
    titleKey: 'sidebar.helpHeader',
    links: [
      {
        id: 1,
        type: 'link',
        value: 'Tutorials',
        titleKey: 'sidebar.tutorials',
        path: '/tutorials',
        icon: require('../components/sidebarNavMenu/images/sidebar/tutorials@2x.png')
      },
      {
        id: 2,
        type: 'link',
        value: 'About Us',
        titleKey: 'sidebar.aboutUs',
        path: '/aboutus',
        icon: require('../components/sidebarNavMenu/images/sidebar/about@2x.png')
      },
      {
        id: 3,
        type: 'link',
        value: 'Contact Us',
        titleKey: 'sidebar.contactUs',
        path: '/contact',
        icon: require('../components/sidebarNavMenu/images/sidebar/contact_us_icon@2x.png')
      }
    ]
  },
  {
    id: 5,
    type: 'title',
    value: 'SETTINGS',
    titleKey: 'sidebar.settingsHeader',
    links: [
      {
        id: 1,
        type: 'link',
        value: 'Register',
        titleKey: 'sidebar.register',
        path: '/member/register',
        icon: require('../components/sidebarNavMenu/images/sidebar/register@2x.png'),
        visibleOnSignedIn: false
      },
      {
        id: 2,
        type: 'link',
        value: 'Sign In',
        titleKey: 'sidebar.signIn',
        path: '/member/signin',
        icon: require('../components/sidebarNavMenu/images/sidebar/sign-in@2x.png'),
        visibleOnSignedIn: false
      },
      {
        id: 3,
        type: 'link',
        value: 'Sign Out',
        titleKey: 'sidebar.signOut',
        path: null,
        icon: require('../components/sidebarNavMenu/images/sidebar/sign-in@2x.png'),
        visibleOnSignedIn: true,
        isSignOut: true
      },
      {
        id: 4,
        type: 'link',
        value: 'App Settings',
        titleKey: 'sidebar.appSettings',
        path: '/settings',
        icon: require('../components/sidebarNavMenu/images/sidebar/settings@2x.png')
      }
    ]
  }
]

module.exports = sampleData
