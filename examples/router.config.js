// element-ui

// const routeRegister = () => {
//   let route = []
//
//   function addRoute(page, lang, index) {
//     const component = page.path === '/changelog'
//       ? load(lang, 'changelog')
//       : loadDocs(lang, page.path)
//     let child = {
//       path: page.path.slice(1),
//       meta: {
//         title: page.title || page.name,
//         description: page.description,
//         lang
//       },
//       name: 'component-' + lang + (page.title || page.name),
//       component: component.default || component
//     }
//
//     route[index].children.push(child)
//   }
//   return route
// }
//
// const route = routeRegister()
// export default route

const routes = [
  {
    path: '/',
    name: 'ncuosUI',
    component: r => require.ensure([], () => r(require('./pages/Index')))
  },
  {
    path: '/test',
    name: 'test',
    component: r => require.ensure([], () => r(require('./docs/test.md')))
  }
]

export default routes
