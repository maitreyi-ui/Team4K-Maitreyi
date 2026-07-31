"use client";

import ReactFlow, { Background, Controls, Edge, Node } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes: Node[] = [
  { id: '1', position: { x: 50, y: 100 }, data: { label: 'Emily' }, style: { background: '#DBEAFE', border: '1px solid #2563EB', borderRadius: 12, padding: 10 } },
  { id: '2', position: { x: 250, y: 40 }, data: { label: 'Laptop' }, style: { background: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: 12, padding: 10 } },
  { id: '3', position: { x: 250, y: 180 }, data: { label: 'USB' }, style: { background: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: 12, padding: 10 } },
  { id: '4', position: { x: 470, y: 80 }, data: { label: 'Malware' }, style: { background: '#FEE2E2', border: '1px solid #EF4444', borderRadius: 12, padding: 10 } },
  { id: '5', position: { x: 470, y: 220 }, data: { label: 'Server' }, style: { background: '#FFFFFF', border: '1px solid #CBD5E1', borderRadius: 12, padding: 10 } },
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e2-4', source: '2', target: '4', animated: true },
  { id: 'e3-5', source: '3', target: '5', animated: true },
  { id: 'e4-5', source: '4', target: '5', animated: true },
];

export function GraphView() {
  return (
    <div className="h-[520px] rounded-[24px] border border-slate-200 bg-white p-3 shadow-soft">
      <ReactFlow nodes={initialNodes} edges={initialEdges} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
