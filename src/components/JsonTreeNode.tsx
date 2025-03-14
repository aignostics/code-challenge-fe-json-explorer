import { ReactNode, useState } from "react";
import { JsonValue } from "../types";

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
    if (value === null) return "null";
    if (Array.isArray(value)) return "array";
    return typeof value;
  };

  const type = getType(data);

  let content: ReactNode = <></>;

  switch (type) {
    case "null":
      content = <div>Null</div>;
      break;
    case "array":
      content = <div>Array</div>;
      break;

    case "object":
      {
        const dataObject = data as { [key: string]: JsonValue };

        content = (
          <>
            {Object.keys(dataObject).map((key) => (
              <JsonTreeNode
                data={dataObject[key] || null}
                name={key}
                path={`${path}/${key}`}
                key={key}
                onNodeClick={onNodeClick}
              />
            ))}
          </>
        );
      }
      break;
    default:
      content = <>{data}</>;
  }

  // Toggle expand/collapse for objects and arrays
  const toggleExpand = () => {
    if (type === "object" || type === "array") {
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
    <div className="json-node" onClick={handleNodeClick}>
      {/* {name} {content} */}
      {/* Implement your node rendering logic here */}
      <div className="node-header" onClick={toggleExpand}>
        {name}
        {/* Implement expand/collapse icons and node labeling */}
      </div>
      {/* Render children when expanded */}
      {isExpanded && <div className="node-children">{content}</div>}
    </div>
  );
};

export default JsonTreeNode;
