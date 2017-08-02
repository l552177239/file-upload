# 上传文件

初始化项目 upload-test

### 选择文件

利用`input`的 file 类型进行文件的选择

```js
handleChange = () => {
  console.log(1)
}

<input type='file' className='file-input' onChange={this.handleChange} />
```

如果选择成功，控制台输出`1`

### 拿到文件路径

利用`event.target.files[0]`拿到文件的路径，文件名等数据

```js
handleChange = (e) => {
  const file = e.target.files[0]
  console.log(file)
}
```



### 拿到文件数据

利用 HTML5 定义的读取文件 API 的`FileReader`方法

```js
handleChange = (e) => {
  const file = e.target.files[0]
  let reader = new FileReader()
  reader.onload = (event) => {
    console.log(event.target.result)
    }
  reader.readAsDataURL(file)
}
```
