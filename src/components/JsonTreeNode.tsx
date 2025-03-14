import { ReactNode, useState } from "react";
import { JsonValue } from "../types";

interface JsonTreeNodeProps {
  data: JsonValue;
  name: string;
  path: string;
  onNodeClick: (path: string, value: JsonValue, type: string) => void;
  selectedPath: string | null;
  searchString: string | null;
}

const JsonTreeNode: React.FC<JsonTreeNodeProps> = ({
  data,
  name,
  path,
  onNodeClick,
  selectedPath,
  searchString,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine the type of the data
  const getType = (value: JsonValue): string => {
    if (value === null) return "null";
    if (Array.isArray(value)) return "array";
    return typeof value;
  };

  const type = getType(data);

  let children: ReactNode[] = [];

  switch (type) {
    case "object":
      {
        const dataObject = data as { [key: string]: JsonValue };
        children = Object.keys(dataObject).map((key) => (
          <JsonTreeNode
            data={dataObject[key] || null}
            name={key}
            path={`${path}/${key}`}
            key={key}
            onNodeClick={onNodeClick}
            selectedPath={selectedPath}
            searchString={searchString}
          />
        ));
      }
      break;
    case "array": {
      const dataArray = data as JsonValue[];
      children = dataArray.map((value, index) => (
        <JsonTreeNode
          data={value}
          name={index.toString()}
          path={`${path}/[${index}]`}
          key={index}
          onNodeClick={onNodeClick}
          selectedPath={selectedPath}
          searchString={searchString}
        />
      ));
    }
  }

  if (type === "object") {
    const dataObject = data as { [key: string]: JsonValue };

    children = Object.keys(dataObject).map((key) => (
      <JsonTreeNode
        data={dataObject[key] || null}
        name={key}
        path={`${path}/${key}`}
        key={key}
        onNodeClick={onNodeClick}
        selectedPath={selectedPath}
        searchString={searchString}
      />
    ));
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

  console.log(selectedPath);

  if (path === selectedPath) {
    console.log("Selected node!");
  }

  // TODO: Handle other value types for searching
  const isHighlighted =
    searchString &&
    (name.search(searchString) !== -1 ||
      (type === "string" && (data as string).search(searchString) !== -1));

  return (
    <div
      className={`json-node ${path === selectedPath ? "selected-node" : ""} ${
        isHighlighted ? "highlight-node" : ""
      }`}
      onClick={handleNodeClick}
    >
      {/* Implement your node rendering logic here */}
      <div className="node-header " onClick={toggleExpand}>
        {(type === "array" || type === "object") && (isExpanded ? "▲" : "▼")}{" "}
        {name}
        {/* Implement expand/collapse icons and node labeling */}
      </div>
      {/* Render children when expanded */}
      {isExpanded && <div className="node-children">{children}</div>}
    </div>
  );
};

export default JsonTreeNode;
