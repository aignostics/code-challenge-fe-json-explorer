# JSON Explorer Challenge

## The Challenge (1 Hour)

Create an interactive JSON explorer that allows users to navigate through a JSON object with an expandable/collapsible tree view.

## Core Requirements

1. **Complete the Tree Visualization Component**:

   - Render the provided sample JSON data as an expandable/collapsible tree
   - Complete the partially implemented `JsonTreeNode` component
   - Properly handle all JSON data types (objects, arrays, strings, numbers, booleans, null)

2. **Path & Type Display**:

   - When a user clicks on any node, display the full path to that node (e.g., `$.categories[0].items[1].name`)
   - Show the value's data type alongside the path

3. **Visual Distinction**:
   - Use the provided CSS classes to visually distinguish between different data types
   - Implement proper expand/collapse functionality for nested objects and arrays

## Project Structure

The starter template includes:

- `src/App.tsx` - Main application component
- `src/assets/data/sampleData.ts` - Sample JSON data to visualize
- `src/types/index.ts` - TypeScript type definitions
- `src/components/JsonExplorer.tsx` - Main explorer component (partially implemented)
- `src/components/JsonTreeNode.tsx` - Tree node component (needs implementation)
- CSS files with styling

## Implementation Tips

1. Start by focusing on rendering the basic tree structure
2. Then implement expand/collapse functionality
3. Finally, add the path tracking and node selection features
4. Use the provided CSS classes for styling different data types


## Stretch Goals (If Time Permits)

- Implement a search functionality to find keys or values
- Add the ability to copy paths to clipboard
- Add a JSON validity checker
- Allow collapsing all/expanding all functionality

## Evaluation Criteria

- Code organization and component structure
- TypeScript usage and type safety
- Completeness of the implementation
- Code readability and maintainability
- UI/UX considerations
- Commit messages

Good luck!
