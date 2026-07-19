import { defineConfig } from '@ggcv/auto-release'

export default defineConfig({
  // 也可以直接指定文件，默认是 package.json 等
  files: ['package.json'],
  // 仅负责本地：改版本号 + 更新 CHANGELOG + 提交
  // tag / push / GitHub Release 交给 CI（build-release.yml）完成
  // 发版流程：yarn release → git push origin release → CI 自动构建发版
  commit: true,
  tag: false,
  push: false,
  // 打印 commits
  printCommits: true,
  // GitHub Release 由 CI 创建，本地不创建
  github: false,
})
