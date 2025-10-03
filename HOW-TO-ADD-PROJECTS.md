# How to Add New Projects to Hamade Group

This guide explains how to add new projects to the Hamade Group section. The system is now **fully dynamic** - you only need to edit ONE file to add new projects!

## Quick Start: Adding a New Project

### Step 1: Organize Your Files

1. Create a new folder in the `plans/` directory with your project name
   ```
   plans/
   ├── your-new-project/
   │   ├── plan-1.pdf
   │   ├── plan-2.pdf
   │   └── photo.jpg
   ```

### Step 2: Update the Configuration

Open `projects-config.js` and add a new entry to the `projectsConfig` array:

```javascript
{
    id: 'your-new-project',              // Unique ID (lowercase with dashes)
    name: 'Your New Project',            // Display name (as shown in UI)
    folder: 'your-new-project',          // Folder name in plans/ directory
    subtitle: 'Project Description',     // Subtitle text
    files: [
        { 
            name: 'Floor Plan', 
            path: './plans/your-new-project/plan-1.pdf', 
            type: 'pdf' 
        },
        { 
            name: 'Site Photo', 
            path: './plans/your-new-project/photo.jpg', 
            type: 'image' 
        }
    ]
}
```

### Step 3: That's It!

The project will automatically appear in the Hamade Group page. No need to create separate HTML/CSS/JS files!

## File Types Supported

- **PDFs**: Use `type: 'pdf'` for PDF documents
- **Images**: Use `type: 'image'` for JPG, PNG, etc.

## Example Configuration

```javascript
const projectsConfig = [
    {
        id: 'project-777',
        name: 'Project 777',
        folder: 'block-a',
        subtitle: 'Complete Project Plans',
        files: [
            { name: 'NABAT 777-A Plan 1', path: './plans/NABAT.777-A - 1.pdf', type: 'pdf' },
            { name: 'Project Photo', path: './plans/1.jpg', type: 'image' }
        ]
    },
    {
        id: 'my-new-project',
        name: 'My New Project',
        folder: 'my-new-project',
        subtitle: 'Amazing New Development',
        files: [
            { name: 'Master Plan', path: './plans/my-new-project/master-plan.pdf', type: 'pdf' }
        ]
    }
];
```

## Tips

1. **Unique IDs**: Make sure each project has a unique `id`
2. **File Paths**: Always use `./plans/folder-name/filename.ext` format
3. **File Names**: Use descriptive names - they're shown to users
4. **Order**: Projects appear in the order they're listed in the config
5. **Empty Projects**: You can add a project with an empty `files: []` array - it will show "No files available yet"

## What Changed?

### Before
- Had to create separate HTML/CSS/JS files for each project
- Had to manually update `hamade-group.html` 
- Hard to maintain and prone to errors

### Now
- **One config file** (`projects-config.js`) for all projects
- Automatic project generation
- One universal viewer page (`project-viewer.html`)
- Easy to add/remove/update projects

## Need Help?

If you encounter any issues:
1. Check that file paths are correct
2. Ensure the `id` is unique
3. Verify the files exist in the `plans/` folder
4. Check browser console for any errors

