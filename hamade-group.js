// Toggle project expansion
function toggleProject(projectId) {
    const blocksContainer = document.getElementById(projectId + '-blocks');
    const chevron = document.getElementById(projectId + '-chevron');
    
    // Toggle expanded class
    blocksContainer.classList.toggle('expanded');
    chevron.classList.toggle('rotated');
}

// Navigate to specific block page
function goToBlock(blockName) {
    if (blockName === 'block-a') {
        window.location.href = 'block-a.html';
    } else if (blockName === 'block-b') {
        window.location.href = 'block-b.html';
    }
}

// Add smooth entrance animation
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.hamade-card, .project-item');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.5s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

