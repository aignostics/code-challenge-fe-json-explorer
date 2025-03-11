import { useState } from 'react';
import { JsonValue } from '../types';

interface JsonTreeNodeProps {
  data: JsonValue;
  name: string;
  path: string;
  onNodeClick: (path: string, value: JsonValue, type: string) => void;
}

const JsonTreeNode: React.FC<JsonTreeNodeProps> = ({
  data,
  name,
  path,
  onNodeClick,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine the type of the data
  const getType = (value: JsonValue): string => {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'array';
    return typeof value;
  };

  const type = getType(data);

  // Toggle expand/collapse for objects and arrays
  const toggleExpand = () => {
    if (type === 'object' || type === 'array') {
      setIsExpanded(!isExpanded);
    }
  };

  // Handle node click to show path
  const handleNodeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onNodeClick(path, data, type);
  };

  // TODO: Implement rendering for different data types
  // TODO: Add logic to render child nodes when expanded

  return (
    <div className="json-node">
      {/* Implement your node rendering logic here */}
      <div className="node-header" onClick={toggleExpand}>
        {/* Implement expand/collapse icons and node labeling */}
      </div>

      {/* Render children when expanded */}
      {isExpanded && (
        <div className="node-children">{/* Render child nodes here */}</div>
      )}
    </div>
  );
};

export default JsonTreeNode;
