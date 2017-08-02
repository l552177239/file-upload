# 上传文件

初始化项目 upload-test

### 选择文件

利用`input`的 file 类型进行文件的选择

```
handleChange = () => {
  console.log(1)
}

<input type='file' className='file-input' onChange={this.handleChange} />
```

如果选择成功，控制台输出`1`
