# Contributing to Text Master MCP Server

Thank you for your interest in contributing to Text Master MCP Server! 🎉

## How to Contribute

### Reporting Issues
- Use the GitHub issue tracker to report bugs
- Include detailed information about your environment
- Provide steps to reproduce the issue
- Include sample text or data that causes the problem

### Suggesting Features
- Open an issue with the "enhancement" label
- Describe the feature and its use case
- Explain why it would be valuable
- Provide examples of how it would be used

### Code Contributions
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests for new functionality
5. Build and test (`npm run build && npm test`)
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

## Development Setup

```bash
# Clone your fork
git clone https://github.com/your-username/text-master-mcp.git
cd text-master-mcp

# Install dependencies
npm install

# Build the project
npm run build

# Test locally
npm run dev
```

## Project Structure

- `src/tools/` - Core text processing tools
- `src/utils/` - Utility functions and helpers
- `src/index.ts` - Main MCP server implementation
- `dist/` - Compiled JavaScript output

## Adding New Tools

When adding new text processing tools:

1. Create a new file in `src/tools/`
2. Export a class with static methods
3. Follow the existing pattern for result objects
4. Add comprehensive error handling
5. Update the main server in `src/index.ts`
6. Add tool definition to the tools array
7. Add handler in the switch statement

### Tool Result Format

All tools should return results in this format:

```typescript
interface ToolResult {
  original: string;      // Original input
  converted: string;     // Processed output
  type: string;         // Operation type
  description: string;  // Human-readable description
}
```

## Code Style

- Use TypeScript for all new code
- Follow existing code patterns and naming conventions
- Add JSDoc comments for public methods
- Use meaningful variable and function names
- Keep functions focused and small
- Handle edge cases and errors gracefully

## Testing

- Test your changes with different MCP clients
- Verify all text formats work correctly
- Test with various input sizes and types
- Ensure error handling works properly
- Test with both English and non-English text

## Documentation

- Update README.md if adding new features
- Add examples for new tools
- Document any new configuration options
- Keep documentation in both English and Chinese

## Performance Considerations

- All processing should be local (no network requests)
- Handle large text inputs efficiently
- Use streaming for very large files when possible
- Optimize for common use cases

## Security

- Never log sensitive user data
- Validate all inputs
- Handle malformed data gracefully
- Use secure random generation for passwords/tokens

## Questions?

Feel free to open an issue for any questions about contributing!

## Recognition

Contributors will be recognized in the project README and release notes.