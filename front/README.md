# jajiga frontend
the new jajiga frontend project start with commit b84c39cf636c6d3c8714e6c38c72773c493ef7e9

## ShowCase
* [last deploy on devwww](https://devwww.jajiga.com)
* [last commit on now](https://frontend.jajiga.now.sh/)
* [last deploy storybook](https://devwww.jajiga.com/storybook)
* [wiki](https://gitlab.com/jajiga/frontend/wikis/home)


# changelog
### v0.0.9
2020/1/11
* TEST: add test for Atoms
* CONFIG: move all costume setting to config dir
* CONFIG: create custom docker file for the storybook
* CONFIG: use separate config for local and server in env,docker-compose and etc
* CONFIG: deploy the project on Arvancloud and use SSL
* CONFIG: update sentry
* CONFIG: update storybook
* CONFIG: add google tag manager
* CONFIG: auto-create font icon from SVG
* CONFIG: auto-convert SVG file to react components
* UPDATE: remove load more button from search
* UPDATE: fix search filters bug
* UPDATE: reduce search logic to one dispatch
* UPDATE: show the only current page content on the map in search 
* UPDATE: infinite scroll URL in the search
* UPDATE: map item hover in search
* UPDATE: styled room components
* UPDATE: merge and use one ScrollPosition hook 

### v0.0.8
2019/11/26
* ADD: list, radio, select, seperator, badge, form lable, slide, button, alert, Breadcrumbs, checkbox, notificationBadge, tag, hide, inputGroup, modal, drawer, grid, slider, ListChoice and etc
* ADD: Room CardSkeleton 
* ADD: Placepicker #ba545ad1854305cebaf1789a7d9fabb6fdfd1076
* ADD: desktopNav and MobileNav
* FIX: search load more #ff656291052f50ab337fa104d9459a27830082a6
* UPDATE: header and nav menu updated 
* UPDATE: input range select #932289d312d1a99e5feb92939d5388e89402adde
* UPDATE: refactor structures!!!!! #f9a8e5062078556926b733941786bd6c9b9d70ee
* UPDATE: Calendar #bf3cf7b322adedafc0de4eb956972914f758d42a
* UPDATE: search filters #70b5ffa9b8f1a2528f4add4efcfb1db9ec4cb597
* UPDATE: roomSlider #74d4df3b2dcc73fe38c55f48143f01b95df68617
* UPDATE: roomCard #f63028e6e9275cb237a288cc66587ddd4d5668b3
* UPDATE: refactor context #78bd8c17c20dfcd05695e52558347853cfa66037
* UPDATE: popover #c8e4b2cccdabcb8e8a05cc5b9762563724962498
* UPDATE: AutoComplete #ea4bd7f1ecfcdb4df1342ae4700f575d8c65be0f
* INSTALL: styled-normalize installed #0eb7a3c47a70638b49208da9743677faab2bc696
* DEV: migrate to yarn
* DEV: update all dependency #e47758cc03dfd94ba2f1233e3d556ad34f2f7412
* DEV: add surge and now to gitlab

### v0.0.7
2019/8/24
* detect url after nginx #30
* show progressbar when routing #23
* show content-placeholder #24
* create a context for save all search form field #25
* set a pass for fa.tyto.ir #31
* use url in search as slug #32
* read search context data in search component and create api call #33
* add search context to search header box and send data to search when click search #34
* home search auto complet #35

### v0.0.6
2019/8/13
* config tsx and eslint for tsx
* config removed some role from eslint
* config serve storybook with express in dev
* config storybook work with tsx
* config add Storybook some Addon
* config load font in storybook
* create calendar component
* create home citySlider
* create home Advantage
* create grid framework
* create FormGroup component
* create FormControl component
* create InputControl component
* create GuestControl component
* create head component
* create svg logo component
* create scrollposition hook
* create grid.css based on bootstrap
* convert some component from jsx to tsx
* modify citycontext store in local storage
* modify disable dragable <a> in citycard
* modify search header box
* add package classnames
* add loader style
* and modify very files

### v0.0.5
2019/7/9
* [add utils/constant.js | define domain for set cookies](9e3846ea879305dd303b6f0fab24eaf5107737b9)
* [change lang with subdomain](4aed4574a8ac774a36de4f90fd5c19fd9595db01)
* [enable nextoffline](2ebaa0c045546f094a6da3dc3e02722c1e108fe4)
* improve seo ...add title in head..add image alt and etc
* [add run.sh for update docker on abravan server](ea523631fd798a3478c11875eb8bac9ea3df4bb3)
* [add ssl](6ca783d343f3aac67d513f85d248249e91bca4d3)
* [add support http/2](9f3c91a1665633e1df9986a5659715e09f979083)
* add favicon.ico to head
* update to next 9
* update to react 16.8.6
* use typescript
* update room component to .tsx
* fix roomCard link

### v0.0.4
2019/6/30
- seprate translate json file
- add and config `storybook`
- logout from `header`
- auth cookie check at `_app`
- add `room` page
- create `room` components
- [add `api` folder](815dadb7ee9c3c688bf4185cbc519a8dfd34db30)
- [config resolve import from `./` and `./src`](093dfd65f0c924218fafc14d18e0f3c2dda36edf)
- add hook for `window size` [commit](fcbf3aecbed9ee0af68475c805c9a36a07cb7f32)
- [room map fix](2aaddc33d10ef330c1640ba9e610dce32e608c4b)
- add `next-offline` for service worker
- add `sentry` for error tracking
- [add hook for `window scroll`](a0b0129dfb7e4e61f1b731b2a616bd39454d23a0)
- improve header
- [support `css` and `scss` with `style jsx`](989e5390a0954b27b2deb205a6731762fe4f67e8)
- npm clean script modified
- import `app.scss`
- add `scss` variable to utils
- normalize & fonts stylesheets imported
- headerNavDesktop splited by user auth status
- [cors proxy with fandogh](ea4644b75b9910835226b5975347ac0692402370)
- [translate `roomcard`](1934bf4ccfb60684b11fc0d57ca8966965fb32ea)
- [add support ltr/rtl to roomcard](900984244b59b973f361f9e090bfa29f7d74db5a)

### v0.0.3
2019/6/1
- add `react-intl` for translate
- create `help page` with support persian url
- improve header

### v0.0.2
2019/5/2
- add `nginx` as web server
- use `docker-compose` for manage containers
- now we have master server at `http://193.176.241.132`
- now we have develop server at `http://193.176.241.132:2000`
- improve `home` page
- improve `slider`
- improve `slider arrow`
- add `icon font`
- add `wishlist function`

### v0.0.1
2019/4/23
- create `react` app with npm
- add `nextjs` for ssr
- add `express` as a node server
- add `axios` for api call
- add `eslint` for lint project
- add `react-leaflet` and `leaflet` for map
- add `universal-cookie` for use cookie in servrside and clientside
- use `react context api` for state managment
- dockerized project with `dockerfile` and `gitlab-config`
- create `ci/cd` and auto deploy project to `fandogh cloud servise` at `http:/bit.tyto.ir` 
