// Navigate to specific project page
function goToProject(projectId) {
    // Navigate to the generic project viewer with the project ID as a parameter
    window.location.href = `project-viewer.html?project=${projectId}`;
}

// Load and display all projects dynamically
function loadProjects() {
    const container = document.getElementById('projects-container');
    
    if (!projectsConfig || projectsConfig.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>No projects available yet</p>
            </div>
        `;
        return;
    }

    // Create a project button for each project in the config
    projectsConfig.forEach((project, index) => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        
        const projectBtn = document.createElement('button');
        projectBtn.className = 'project-btn simple-project';
        projectBtn.onclick = () => goToProject(project.id);
        
        const projectTitle = document.createElement('span');
        projectTitle.className = 'project-title';
        projectTitle.textContent = project.name;
        
        projectBtn.appendChild(projectTitle);
        projectItem.appendChild(projectBtn);
        container.appendChild(projectItem);
        
        // Add entrance animation
        projectItem.style.opacity = '0';
        projectItem.style.transform = 'translateY(20px)';
        setTimeout(() => {
            projectItem.style.transition = 'all 0.5s ease';
            projectItem.style.opacity = '1';
            projectItem.style.transform = 'translateY(0)';
        }, (index + 1) * 100);
    });
}

// Add smooth entrance animation for header
document.addEventListener('DOMContentLoaded', function() {
    // Load projects dynamically
    loadProjects();
    
    // Animate the Hamade card
    const hamadeCard = document.querySelector('.hamade-card');
    if (hamadeCard) {
        hamadeCard.style.opacity = '0';
        hamadeCard.style.transform = 'translateY(20px)';
        setTimeout(() => {
            hamadeCard.style.transition = 'all 0.5s ease';
            hamadeCard.style.opacity = '1';
            hamadeCard.style.transform = 'translateY(0)';
        }, 0);
    }
});

