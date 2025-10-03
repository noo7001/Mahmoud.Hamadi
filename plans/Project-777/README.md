# Plans Folder - Updated Structure

This folder contains the PDF files for all projects organized by folders.

## Folder Structure:

```
plans/
├── block-a/          - Block A PDFs for Project 777
├── block-b/          - Block B PDFs for Project 777
└── totango-chakif/   - Totango Chakif project PDFs
```

## How to Add PDFs:

### For Block A (Project 777):
1. Put your PDF files in the `plans/block-a/` folder
2. Edit `block.js` and add them to the `'block-a'` array:
```javascript
'block-a': [
    { name: 'Floor Plan', path: './plans/block-a/floor-plan.pdf', description: 'Detailed floor plan' },
    { name: 'Elevation Plan', path: './plans/block-a/elevation.pdf', description: 'Building elevation' }
]
```

### For Block B (Project 777):
1. Put your PDF files in the `plans/block-b/` folder
2. Edit `block.js` and add them to the `'block-b'` array:
```javascript
'block-b': [
    { name: 'Floor Plan', path: './plans/block-b/floor-plan.pdf', description: 'Detailed floor plan' },
    { name: 'Layout Plan', path: './plans/block-b/layout.pdf', description: 'Unit layouts' }
]
```

### For Totango Chakif:
1. Put your PDF files in the `plans/totango-chakif/` folder
2. Edit `totango.js` and add them to the `totangoChakifFiles` array:
```javascript
const totangoChakifFiles = [
    { name: 'Site Plan', path: './plans/totango-chakif/site-plan.pdf', description: 'Complete site layout' },
    { name: 'Design Plan', path: './plans/totango-chakif/design.pdf', description: 'Interior design' }
];
```

## Notes:

- Each PDF entry needs: `name`, `path`, and optionally `description`
- PDFs will be displayed as clickable cards
- Clients can click to view or download the PDFs
- If no PDFs are added, an "empty state" message will show
