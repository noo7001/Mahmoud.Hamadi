// Projects Configuration
// To add a new project, simply add a new entry to this array with the folder name and files

const projectsConfig = [
    {
        id: 'project-777',
        name: 'Project 777',
        folder: 'block-a', // folder name in the plans/ directory
        subtitle: 'Complete Project Plans',
        files: [
            { name: 'NABAT.777-A - 1', path: './plans/project-777/NABAT.777-A - 1.pdf', type: 'pdf' },
            { name: 'NABAT.777-A-2', path: './plans/project-777/NABAT.777-A-2.pdf', type: 'pdf' },
            { name: 'NABAT.777-A-3', path: './plans/project-777/NABAT.777-A-3.pdf', type: 'pdf' },
            { name: 'NABAT.777-A-9', path: './plans/project-777/NABAT.777-A-9.pdf', type: 'pdf' },
            { name: 'NABAT.77A-EDITING-BLOCKA-GROUND FLOOR', path: './plans/project-777/NABAT.77A-EDITING-BLOCKA-GROUND FLOOR.pdf', type: 'pdf' },
            { name: '3d plan (1)', path: './plans/project-777/3d plan (1).jpg', type: 'image' },
            { name: '3d plan (2)', path: './plans/project-777/3d plan (2).jpg', type: 'image' },
            { name: '3d plan (3)', path: './plans/project-777/3d plan (3).jpg', type: 'image' }
        ]
    },
    {
        id: 'totango-chakif',
        name: 'Totango Chakif',
        folder: 'totango-chakif', // folder name in the plans/ directory
        subtitle: 'Project Plans & Documents',
        files: [
            { name: 'Totango Alchakif Plan 1', path: './plans/totango-chakif/TO TANGO-ALCHAKIF-PLAN-1.pdf', type: 'pdf' }
        ]
    },
   {
        id: 'PHOENICIAN-BLUE-GRP',
        name: 'PHOENICIAN BLUE GRP',
        folder: 'PHOENICIAN-BLUE-GRP', // folder name in the plans/ directory
        subtitle: 'PHOENICIAN-BLUE-GRP',
        files: [
            { name: 'PHOENICIAN BLUE GRP Plan 1', path: './plans/PHOENICIAN-BLUE-GRP/PHOENICIAN-BLUE-GRP-PLAN-1.pdf', type: 'pdf' },
            { name: '3d plan (1)', path: './plans/PHOENICIAN-BLUE-GRP/3d plan (1).jpeg', type: 'image' },
            { name: '3d plan (2)', path: './plans/PHOENICIAN-BLUE-GRP/3d plan (2).jpeg', type: 'image' },
            { name: '3d plan (3)', path: './plans/PHOENICIAN-BLUE-GRP/3d plan (3).jpeg', type: 'image' },
            { name: '3d plan (4)', path: './plans/PHOENICIAN-BLUE-GRP/3d plan (4).jpeg', type: 'image' },
            { name: '3d plan (5)', path: './plans/PHOENICIAN-BLUE-GRP/3d plan (5).jpeg', type: 'image' },
            { name: '3d plan (6)', path: './plans/PHOENICIAN-BLUE-GRP/3d plan (6).jpeg', type: 'image' },
            { name: '3d plan (7)', path: './plans/PHOENICIAN-BLUE-GRP/3d plan (7).jpeg', type: 'image' }
            // Example: { name: 'Floor Plan', path: './plans/block-b/floor-plan.pdf', type: 'pdf' }
        ]
    }
    // To add a new project, copy the template below and fill in the details:
    /*
    {
        id: 'unique-project-id',           // Unique identifier (use lowercase with dashes)
        name: 'Display Name',              // Name shown in the UI
        folder: 'folder-name',             // Folder name inside plans/ directory
        subtitle: 'Project Description',   // Subtitle text
        files: [
            { name: 'File Name', path: './plans/folder-name/file.pdf', type: 'pdf' },
            { name: 'Image Name', path: './plans/folder-name/image.jpg', type: 'image' }
        ]
    }
    */
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projectsConfig };
}




