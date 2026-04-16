# react-dropzone

> Simple HTML5 drag-and-drop zone for file uploads in React — handles file selection, validation, and previews with a flexible hook API.

**npm:** https://www.npmjs.com/package/react-dropzone
**GitHub:** https://github.com/react-dropzone/react-dropzone
**Docs:** https://react-dropzone.js.org/

---

## The Problem

Building a file upload UI with drag-and-drop requires wiring up native drag events, handling edge cases like folder drops, and managing file type/size validation — all of which is repetitive and cross-browser inconsistent.

---

## What It Does

`useDropzone` returns props for a container element that activates on file drag/drop or click. It normalizes browser differences, validates accepted file types and size limits, and provides the list of accepted and rejected files with detailed reasons.

---

## Installation

```bash
npm install react-dropzone
```

---

## Usage Example

```tsx
import { useDropzone } from 'react-dropzone';

export function Uploader() {
  const { getRootProps, getInputProps, acceptedFiles, isDragActive } = useDropzone({
    accept: { 'image/*': [] },
    maxSize: 5 * 1024 * 1024,
  });

  return (
    <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: 20 }}>
      <input {...getInputProps()} />
      {isDragActive ? <p>Drop files here...</p> : <p>Drag & drop or click to select</p>}
      <ul>{acceptedFiles.map((f) => <li key={f.name}>{f.name}</li>)}</ul>
    </div>
  );
}
```

---

## Screenshot / Demo

<!-- https://react-dropzone.js.org/ -->

---

## Submitted by

[@claude](https://github.com/claude)
