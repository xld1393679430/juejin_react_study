
const path = require('path')
const fs = require('fs-extra')
const reactDoc = require('react-docgen')
const prettier = require('prettier')

const filePath = path.resolve('./comonents/Person.js')
// 读取文件内容
const content = fs.readFileSync(filePath, 'utf-8');
// 提取组件信息
const componentInfo = reactDoc.parse(content)
// 打印信息
console.log(componentInfo)

fs.writeFileSync(path.resolve('./comonents/Person.md'), commentToMarkdown(componentInfo))

function commentToMarkdown(componentInfo){
    let { props } = componentInfo
    const markdownInfo = renderMarkdown(props)

     // 使用prettier美化格式
    const content = prettier.format(markdownInfo, {
        parser: 'markdown'
    })
    return content
}

function renderMarkdown(props) {
    return`## 参数 Props
  | 属性 |  类型 | 默认值 | 必填 | 描述 |
  | --- | --- | --- | --- | ---|
  ${Object.keys(props)
    .map((key) => renderProp(key, props[key]))
    .join('')}
  `
}

function renderProp(
    name,
    { type = { name: '-' }, defaultValue = { value: '-' }, required, description }
  ) {
    return`| ${name} | ${getType(type)} | ${defaultValue.value.replace(
      /\|/g,
      '<span>|</span>'
    )} | ${required ? '✓' : '✗'} |  ${description || '-'} |
    `
  }
  

  function getType(type) {
    const handler = {
      enum: (type) =>
        type.value.map((item) => item.value.replace(/'/g, '')).join(' \\| '),
      union: (type) => type.value.map((item) => item.name).join(' \\| ')
    }
    if (typeof handler[type.name] === 'function') {
      return handler[type.name](type).replace(/\|/g, '')
    } else {
      return type.name.replace(/\|/g, '')
    }
  }