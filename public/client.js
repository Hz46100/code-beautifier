document.addEventListener('DOMContentLoaded', () => {
  const beautifyButton = document.getElementById('beautifyButton');
  const userCodeInput = document.getElementById('userCode');
  const beautifiedCodeOutput = document.getElementById('beautifiedCode');
  const copyButton = document.getElementById('copyButton');
  const downloadButton = document.getElementById('downloadButton');

  beautifyButton.addEventListener('click', async () => {
    try {
      const response = await axios.post('/beautify', { userCode: userCodeInput.value });
      beautifiedCodeOutput.textContent = response.data.beautifiedCode;

      // 添加下载按钮的点击事件监听
      downloadButton.addEventListener('click', () => {
        // 创建 Blob 对象
        const blob = new Blob([response.data.beautifiedCode], { type: 'application/javascript' });

        // 创建下载链接
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'beautified_code.js';
        document.body.appendChild(link);

        // 触发下载
        link.click();

        // 清理资源
        setTimeout(() => {
          window.URL.revokeObjectURL(url);
          document.body.removeChild(link);
        }, 0);
      });
      
      // 复制功能
      copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(beautifiedCodeOutput.textContent);
        alert('代码已复制到剪贴板!');
      });
    } catch (error) {
      console.error('Error:', error);
    }
  });
});