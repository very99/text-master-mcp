# Text Master MCP Server

[English](#english) | [中文](#中文)

---

## English

A comprehensive MCP (Model Context Protocol) server for text processing, formatting, and analysis. The ultimate text manipulation toolkit for developers, writers, and data analysts!

### ✨ Core Features

- **🔄 Case Conversion**: Transform between camelCase, snake_case, kebab-case, PascalCase, CONSTANT_CASE
- **🧹 Text Cleaning**: Remove extra spaces, trim lines, normalize line breaks, clean HTML tags
- **🔍 Content Extraction**: Extract emails, URLs, numbers, IP addresses from text
- **📊 Text Analysis**: Comprehensive statistics, readability scores, keyword frequency analysis
- **🔐 Encoding Conversion**: Base64, URL encoding, HTML entities, Unicode escaping
- **📋 Data Format Conversion**: JSON formatting/minification, CSV ↔ JSON conversion
- **🔐 Hash Generation**: MD5, SHA1, SHA256, SHA512 hash generation
- **✨ Text Generation**: Lorem Ipsum, passwords, UUIDs, fake data, random quotes
- **📝 Markdown Processing**: Convert between Markdown, HTML, and plain text
- **📋 Table Generation**: Create Markdown tables with custom alignment

### 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/very99/text-master-mcp.git
   cd text-master-mcp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

4. **Configure your MCP client**
   
   **For Amazon Q CLI** (`~/.aws/amazonq/mcp.json`):
   ```json
   {
     "mcpServers": {
       "text-master": {
         "command": "node",
         "args": ["/path/to/text-master-mcp/dist/index.js"],
         "timeout": 30000
       }
     }
   }
   ```

### 🛠️ Available Tools

- **convert_case**: Convert text between different case formats
- **clean_text**: Clean and format text with various operations
- **analyze_text**: Comprehensive text analysis and statistics
- **convert_encoding**: Convert between different text encodings
- **generate_text**: Generate various types of text content

### 📖 Usage Examples

```
# Case Conversion
"hello world" → camelCase → "helloWorld"
"hello world" → snake_case → "hello_world"

# Text Analysis
Input: "Sample text for analysis..."
Output: Characters: 25, Words: 4, Reading time: 1 min

# Password Generation
Generate secure 16-character password with symbols
```

### 🔧 Requirements

- Node.js (version 14 or higher)
- MCP-compatible client (Amazon Q CLI, Claude Desktop, etc.)

### 🌟 Key Features

- **🚀 High Performance**: Local processing, no network dependencies
- **🔒 Privacy First**: All processing happens locally
- **🌍 Multi-language Support**: Handles English, Chinese, and mixed content
- **🛡️ Error Handling**: Comprehensive error handling and validation

---

## 中文

一个用于文本处理、格式化和分析的综合性 MCP 服务器。为开发者、写作者和数据分析师提供的终极文本处理工具包！

### ✨ 核心功能

- **🔄 大小写转换**: 支持驼峰命名、蛇形命名、短横线命名等格式转换
- **🧹 文本清理**: 移除多余空格、清理HTML标签、统一换行符
- **🔍 内容提取**: 从文本中提取邮箱、网址、数字、IP地址
- **📊 文本分析**: 全面的统计信息、可读性评分、关键词频率分析
- **🔐 编码转换**: Base64、URL编码、HTML实体、Unicode转义
- **✨ 文本生成**: Lorem Ipsum、密码、UUID、假数据生成
- **📝 Markdown处理**: Markdown、HTML、纯文本之间的转换

### 🚀 快速开始

1. **克隆仓库**
   ```bash
   git clone https://github.com/very99/text-master-mcp.git
   cd text-master-mcp
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **构建项目**
   ```bash
   npm run build
   ```

### 📖 使用示例

```
# 大小写转换
"hello world" → 驼峰命名 → "helloWorld"
"hello world" → 蛇形命名 → "hello_world"

# 文本分析
输入: "用于分析的示例文本..."
输出: 字符数: 25, 单词数: 4, 阅读时间: 1分钟
```

### 🔧 系统要求

- Node.js (版本 14 或更高)
- 兼容 MCP 的客户端

### 📄 许可证

MIT License

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT License - see [LICENSE](LICENSE) file for details.