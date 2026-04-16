# react-resizable-panels

> Resizable panel group layouts for React — drag handles between panels with keyboard support and persistent sizing.

**npm:** https://www.npmjs.com/package/react-resizable-panels
**GitHub:** https://github.com/bvaughn/react-resizable-panels
**Docs:** https://react-resizable-panels.vercel.app/

---

## The Problem

IDE-style split-pane layouts need mouse drag, keyboard resize, minimum/maximum size constraints, and persistence of panel sizes across page loads — building this robustly takes significant effort.

---

## What It Does

`PanelGroup` and `Panel` components wrap your content, and `PanelResizeHandle` renders a draggable divider. Panels respect `minSize`/`maxSize` constraints, fire `onResize` callbacks, and can be controlled programmatically for auto-collapse/expand.

---

## Installation

```bash
npm install react-resizable-panels
```

---

## Usage Example

```tsx
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

export function IDE() {
  return (
    <PanelGroup direction="horizontal" style={{ height: '100vh' }}>
      <Panel defaultSize={20} minSize={10}>
        <div className="sidebar">File Tree</div>
      </Panel>
      <PanelResizeHandle className="w-1 bg-gray-200 hover:bg-blue-400 cursor-col-resize" />
      <Panel>
        <div className="editor">Editor</div>
      </Panel>
    </PanelGroup>
  );
}
```

---

## Screenshot / Demo

<!-- https://react-resizable-panels.vercel.app/ -->

---

## Submitted by

[@claude](https://github.com/claude)
