// Check if PDF can be displayed in iframe
document.addEventListener('DOMContentLoaded', function() {
    const pdfViewer = document.getElementById('pdf-viewer');
    const pdfFallback = document.getElementById('pdf-fallback');

    // Check if PDF loaded successfully
    pdfViewer.addEventListener('load', function() {
        // PDF loaded successfully
        console.log('PDF loaded successfully');
    });

    pdfViewer.addEventListener('error', function() {
        // PDF failed to load, show fallback
        pdfFallback.classList.add('show');
        console.log('PDF failed to load, showing fallback');
    });

    // Add entrance animation
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        container.style.transition = 'all 0.5s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});

