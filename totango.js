// PDF files configuration for Totango Chakif
const totangoChakifFiles = [
    { name: 'Totango Chakif Plan', path: './plans/totango-chakif/TO TANGO-ALCHAKIF-PLAN-1.pdf', description: 'Complete project plan and layout' }
];

// Load and display PDF files
function loadPDFList() {
    const pdfList = document.getElementById('pdf-list');

    if (!totangoChakifFiles || totangoChakifFiles.length === 0) {
        // Show empty state
        pdfList.innerHTML = `
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
        return;
    }

    // Generate PDF items
    totangoChakifFiles.forEach((file, index) => {
        const pdfItem = document.createElement('a');
        pdfItem.className = 'pdf-item';
        pdfItem.href = file.path;
        pdfItem.target = '_blank';
        pdfItem.rel = 'noopener noreferrer';
        
        pdfItem.innerHTML = `
            <div class="pdf-item-content">
                <svg class="pdf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="pdf-info">
                    <div class="pdf-name">${file.name}</div>
                    <div class="pdf-description">${file.description || 'Click to view or download'}</div>
                </div>
            </div>
            <svg class="pdf-download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        `;
        
        // Add entrance animation
        pdfItem.style.opacity = '0';
        pdfItem.style.transform = 'translateY(20px)';
        setTimeout(() => {
            pdfItem.style.transition = 'all 0.5s ease';
            pdfItem.style.opacity = '1';
            pdfItem.style.transform = 'translateY(0)';
        }, index * 100 + 200);
        
        pdfList.appendChild(pdfItem);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    loadPDFList();

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

