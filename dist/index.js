#!/usr/bin/env node

/**
 * Text Master MCP Server
 * 文本处理大师 MCP 服务器
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

// 导入工具类
import { CaseConverter } from "./tools/case-converter.js";
import { TextCleaner } from "./tools/text-cleaner.js";
import { TextAnalyzer } from "./tools/text-analyzer.js";
import { EncodingConverter } from "./tools/encoding-converter.js";
import { TextGenerator } from "./tools/text-generator.js";

// 创建服务器实例
const server = new Server({
  name: "text-master-mcp",
  version: "1.0.0",
});

// 定义所有可用工具
const tools = [
  {
    name: "convert_case",
    description: "Convert text between different case formats",
    inputSchema: {
      type: "object",
      properties: {
        text: { type: "string", description: "Text to convert" },
        target_case: {
          type: "string",
          enum: ["upper", "lower", "title", "camel", "pascal", "snake", "kebab", "constant"],
          description: "Target case format"
        }
      },
      required: ["text", "target_case"]
    }
  },
  {
    name: "clean_text",
    description: "Clean and format text",
    inputSchema: {
      type: "object",
      properties: {
        text: { type: "string", description: "Text to clean" },
        operation: {
          type: "string",
          enum: ["remove_extra_spaces", "trim_lines", "remove_empty_lines", "smart_clean"],
          description: "Cleaning operation"
        }
      },
      required: ["text", "operation"]
    }
  },
  {
    name: "analyze_text",
    description: "Analyze text statistics and readability",
    inputSchema: {
      type: "object",
      properties: {
        text: { type: "string", description: "Text to analyze" },
        analysis_type: {
          type: "string",
          enum: ["basic_stats", "full_report"],
          description: "Type of analysis"
        }
      },
      required: ["text", "analysis_type"]
    }
  },
  {
    name: "convert_encoding",
    description: "Convert text between different encodings",
    inputSchema: {
      type: "object",
      properties: {
        text: { type: "string", description: "Text to convert" },
        conversion_type: {
          type: "string",
          enum: ["base64_encode", "base64_decode", "url_encode", "url_decode"],
          description: "Encoding conversion type"
        }
      },
      required: ["text", "conversion_type"]
    }
  },
  {
    name: "generate_text",
    description: "Generate various types of text",
    inputSchema: {
      type: "object",
      properties: {
        generation_type: {
          type: "string",
          enum: ["lorem_ipsum", "password", "uuid"],
          description: "Type of text to generate"
        },
        options: {
          type: "object",
          description: "Generation options",
          properties: {
            length: { type: "number", description: "Password length" },
            paragraphs: { type: "number", description: "Number of paragraphs" }
          }
        }
      },
      required: ["generation_type"]
    }
  }
];

// 处理工具列表请求
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return { tools };
});

// 处理工具调用请求
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case "convert_case": {
        const text = args.text;
        const targetCase = args.target_case;
        let result;

        switch (targetCase) {
          case "upper":
            result = CaseConverter.toUpperCase(text);
            break;
          case "lower":
            result = CaseConverter.toLowerCase(text);
            break;
          case "title":
            result = CaseConverter.toTitleCase(text);
            break;
          case "camel":
            result = CaseConverter.toCamelCase(text);
            break;
          case "pascal":
            result = CaseConverter.toPascalCase(text);
            break;
          case "snake":
            result = CaseConverter.toSnakeCase(text);
            break;
          case "kebab":
            result = CaseConverter.toKebabCase(text);
            break;
          case "constant":
            result = CaseConverter.toConstantCase(text);
            break;
          default:
            throw new Error(`Unknown case type: ${targetCase}`);
        }

        return {
          content: [{
            type: "text",
            text: `🔄 Case Conversion Result

Original: "${result.original}"
Converted: "${result.converted}"
Type: ${result.type}
Description: ${result.description}`
          }]
        };
      }

      case "clean_text": {
        const text = args.text;
        const operation = args.operation;
        let result;

        switch (operation) {
          case "remove_extra_spaces":
            result = TextCleaner.removeExtraSpaces(text);
            break;
          case "trim_lines":
            result = TextCleaner.trimLines(text);
            break;
          case "remove_empty_lines":
            result = TextCleaner.removeEmptyLines(text);
            break;
          case "smart_clean":
            result = TextCleaner.smartClean(text);
            break;
          default:
            throw new Error(`Unknown cleaning operation: ${operation}`);
        }

        return {
          content: [{
            type: "text",
            text: `🧹 Text Cleaning Result

Operation: ${result.operation}
Changes: ${result.changes}
Description: ${result.description}

Cleaned text:
${result.cleaned}`
          }]
        };
      }

      case "analyze_text": {
        const text = args.text;
        const analysisType = args.analysis_type;

        switch (analysisType) {
          case "basic_stats": {
            const stats = TextAnalyzer.getBasicStats(text);
            return {
              content: [{
                type: "text",
                text: `📊 Basic Text Statistics

Characters: ${stats.characters.toLocaleString()}
Characters (no spaces): ${stats.charactersNoSpaces.toLocaleString()}
Words: ${stats.words.toLocaleString()}
Sentences: ${stats.sentences.toLocaleString()}
Paragraphs: ${stats.paragraphs.toLocaleString()}
Lines: ${stats.lines.toLocaleString()}

Reading time: ${stats.readingTime} minutes
Average words per sentence: ${stats.averageWordsPerSentence}`
              }]
            };
          }

          case "full_report": {
            const report = TextAnalyzer.generateReport(text);
            return {
              content: [{
                type: "text",
                text: report
              }]
            };
          }

          default:
            throw new Error(`Unknown analysis type: ${analysisType}`);
        }
      }

      case "convert_encoding": {
        const text = args.text;
        const conversionType = args.conversion_type;
        let result;

        switch (conversionType) {
          case "base64_encode":
            result = EncodingConverter.base64Encode(text);
            break;
          case "base64_decode":
            result = EncodingConverter.base64Decode(text);
            break;
          case "url_encode":
            result = EncodingConverter.urlEncode(text);
            break;
          case "url_decode":
            result = EncodingConverter.urlDecode(text);
            break;
          default:
            throw new Error(`Unknown encoding conversion: ${conversionType}`);
        }

        return {
          content: [{
            type: "text",
            text: `🔄 Encoding Conversion Result

Encoding: ${result.encoding}
Description: ${result.description}

Original:
${result.original}

Converted:
${result.converted}`
          }]
        };
      }

      case "generate_text": {
        const generationType = args.generation_type;
        const options = args.options || {};
        let result;

        switch (generationType) {
          case "lorem_ipsum":
            result = TextGenerator.generateLoremIpsum(
              options.paragraphs || 1,
              options.words_per_paragraph || 50
            );
            break;
          case "password":
            result = TextGenerator.generatePassword(options.length || 12);
            break;
          case "uuid":
            result = TextGenerator.generateUuid();
            break;
          default:
            throw new Error(`Unknown generation type: ${generationType}`);
        }

        return {
          content: [{
            type: "text",
            text: `✨ Text Generation Result

Type: ${result.type}
Description: ${result.description}

Generated:
${result.generated}`
          }]
        };
      }

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error) {
    return {
      content: [{
        type: "text",
        text: `❌ Error: ${error instanceof Error ? error.message : String(error)}`
      }],
      isError: true
    };
  }
});

// 启动服务器
async function main() {
  try {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("🚀 Text Master MCP Server is running");
    console.error("📝 Ready to process text with comprehensive tools!");
  } catch (error) {
    console.error("❌ Server error:", error);
    process.exit(1);
  }
}

main();