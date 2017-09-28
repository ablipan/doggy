var doggyConfig = {
  theme: 'vue',
  sidebar: [
    {
      name: '快速开始',
      path: 'start/index.md'
    },
    {
      name: '指南',
      children: [
        {
          name: 'BEM',
          path: 'docs/guide/BEM.md'
        },
        {
          name: 'ESLint',
          path: 'docs/guide/ESLint.md'
        },
      ]
    },
    {
      name: '组件',
      children: [
        {
          name: 'Basic',
          children: [
            {
              name: 'Layout',
              path: 'docs/components/basic/layout.md'
            },
            {
              name: 'Button',
              path: 'docs/components/basic/button.md'
            }
          ]
        }
      ],
      // groups: [
      //   {
      //     groupName: 'Basic',
      //     list: [
      //       {
      //         name: 'Layout',
      //         path: 'docs/components/basic/layout.md'
      //       },
      //       {
      //         name: 'Button',
      //         path: 'docs/components/basic/button.md'
      //       }
      //     ]
      //   }
      // ]
    }
  ]
}
