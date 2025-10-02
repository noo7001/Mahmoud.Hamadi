// Files configuration for Project 777 (PDFs and Images)
const project777Files = {
    'block-a': [
        { name: 'NABAT 777-A Plan 1', path: './plans/block-a/NABAT.777-A - 1.pdf', description: 'Block A - Plan 1', type: 'pdf' },
        { name: 'NABAT 777-A Plan 2', path: './plans/block-a/NABAT.777-A-2.pdf', description: 'Block A - Plan 2', type: 'pdf' },
        { name: 'NABAT 777-A Plan 3', path: './plans/block-a/NABAT.777-A-3.pdf', description: 'Block A - Plan 3', type: 'pdf' },
        { name: 'NABAT 777-A Plan 9', path: './plans/block-a/NABAT.777-A-9.pdf', description: 'Block A - Plan 9', type: 'pdf' },
        { name: 'Block A Ground Floor', path: './plans/block-a/NABAT.77A-EDITING-BLOCKA-GROUND FLOOR.pdf', description: 'Ground Floor Layout', type: 'pdf' },
        { name: 'Project Photo 1', path: './plans/block-a/1.jpg', description: 'Project image', type: 'image' },
        { name: 'Project Photo 8', path: './plans/block-a/1_Photo - 8.jpg', description: 'Project image', type: 'image' },
        { name: 'Project Photo 9', path: './plans/block-a/1_Photo - 9.jpg', description: 'Project image', type: 'image' }
    ],
    'block-b': [
        // Add your Block B PDFs and images here
        // Example: { name: 'Floor Plan', path: './plans/block-b/floor-plan.pdf', description: 'Detailed floor plan', type: 'pdf' }
    ]
};

// Create file item HTML (PDF or Image)
function createFileItem(file) {
    const isImage = file.type === 'image';
    
    const icon = isImage ? `
        <svg class="pdf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
        </svg>
    ` : `
        <svg class="pdf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
        </svg>
    `;
    
    return `
        <div class="pdf-item-content">
            ${icon}
            <div class="pdf-info">
                <div class="pdf-name">${file.name}</div>
                <div class="pdf-description">${file.description || (isImage ? 'Click to view image' : 'Click to view or download')}</div>
            </div>
        </div>
        <svg class="pdf-download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            ${isImage ? `
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <polyline points="16 10 12 14 8 10"/>
            ` : `
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            `}
        </svg>
    `;
}

// Create empty state HTML
function createEmptyState() {
    return `
        <div class="empty-state">
            <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
            <p class="empty-text">No plans available yet</p>
            <p class="empty-subtext">PDF files will be added soon</p>
        </div>
    `;
}

// Load images and PDFs separately
function loadAllFiles() {
    const imagesGallery = document.getElementById('images-gallery');
    const pdfsList = document.getElementById('pdfs-list');
    
    // Combine all files from both blocks
    const allFiles = [
        ...project777Files['block-a'],
        ...project777Files['block-b']
    ];

    // Separate images and PDFs
    const images = allFiles.filter(file => file.type === 'image');
    const pdfs = allFiles.filter(file => file.type === 'pdf');

    // Load images
    if (images && images.length > 0) {
        images.forEach((file, index) => {
            const imageItem = document.createElement('a');
            imageItem.className = 'image-item';
            imageItem.href = file.path;
            imageItem.target = '_blank';
            imageItem.rel = 'noopener noreferrer';
            
            imageItem.innerHTML = `
                <img src="${file.path}" alt="${file.name}" loading="lazy">
                <div class="image-overlay">
                    <div class="image-name">${file.name}</div>
                    <div class="image-description">${file.description || 'Click to view full size'}</div>
                </div>
            `;
            
            // Add entrance animation
            imageItem.style.opacity = '0';
            imageItem.style.transform = 'scale(0.9)';
            setTimeout(() => {
                imageItem.style.transition = 'all 0.5s ease';
                imageItem.style.opacity = '1';
                imageItem.style.transform = 'scale(1)';
            }, index * 100 + 200);
            
            imagesGallery.appendChild(imageItem);
        });
    }

    // Load PDFs
    if (pdfs && pdfs.length > 0) {
        pdfs.forEach((file, index) => {
            const pdfItem = document.createElement('a');
            pdfItem.className = 'pdf-item';
            pdfItem.href = file.path;
            pdfItem.target = '_blank';
            pdfItem.rel = 'noopener noreferrer';
            pdfItem.innerHTML = createFileItem(file);
            
            // Add entrance animation
            pdfItem.style.opacity = '0';
            pdfItem.style.transform = 'translateY(20px)';
            setTimeout(() => {
                pdfItem.style.transition = 'all 0.5s ease';
                pdfItem.style.opacity = '1';
                pdfItem.style.transform = 'translateY(0)';
            }, (images.length * 100) + (index * 80) + 300);
            
            pdfsList.appendChild(pdfItem);
        });
    }

    // Show empty state if no files
    if (allFiles.length === 0) {
        pdfsList.innerHTML = createEmptyState();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Load all files (PDFs and images)
    loadAllFiles();

    // Add entrance animation for container
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        container.style.transition = 'all 0.5s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});

