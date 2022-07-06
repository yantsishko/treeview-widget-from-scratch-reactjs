import { TreeView, TreeItem } from "./TreeView";
import "./styles.css";

const data = [
  {
    id: 1,
    name: "Name 1",
    subtrees: [
      {
        id: 11,
        name: "Name 11",
        subtrees: []
      },
      {
        id: 12,
        name: "Name 12",
        subtrees: [
          {
            id: 121,
            name: "Name 12111",
            subtrees: []
          },
          {
            id: 122,
            name: "Name 122",
            subtrees: []
          },
          {
            id: 123,
            name: "Name 123",
            subtrees: []
          }
        ]
      },
      {
        id: 13,
        name: "Name 13",
        subtrees: []
      },
      {
        id: 14,
        name: "Name 14",
        subtrees: []
      }
    ]
  },
  {
    id: 2,
    name: "Name 2",
    subtrees: [
      {
        id: 22,
        name: "Name 22",
        subtrees: []
      }
    ]
  },
  {
    id: 3,
    name: "Name 3",
    subtrees: []
  }
];

export default function App() {
  const renderSubtrees = (trees) => {
    return trees.map((tree) => {
      if (!tree.subtrees.length) {
        return <TreeItem key={tree.id} id={tree.id} title={tree.name} />;
      }

      return (
        <TreeItem key={tree.id} id={tree.id} title={tree.name}>
          {renderSubtrees(tree.subtrees)}
        </TreeItem>
      );
    });
  };
  return (
    <div className="App">
      <TreeView>{renderSubtrees(data)}</TreeView>
    </div>
  );
}
