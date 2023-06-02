module.exports = {
  packagerConfig: {
    // 设置自定义的应用程序图标icon，Windows and macOS，
    icon: '/path/to/icon'
  },
  rebuildConfig: {},
  makers: [
    {
      // windows系统代码签名
      name: '@electron-forge/maker-squirrel',
      config: {
        // certificateFile: './cert.pfx',
        // certificatePassword: process.env.CERTIFICATE_PASSWORD
      },
    },
    {
      // 为不同的操作系统创建特定格式的可分发文件，生成.zip文件
      name: '@electron-forge/maker-zip',
      platforms: ['darwin', 'linux'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        // linux平台应用icon配置
        // options: {
        //   icon: '/path/to/icon.png'
        // }
      },
    },
    {
      // standard package format for Red Hat-based Linux 
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  publishers: [
    {
      // 使用github发布应用
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'HLHAOGH', // github用户名
          name: 'electron-vue-app' // github仓库名
        },
        prerelease: true,
        draft: true,
      }
    }
  ]
};
