var planningButton = document.getElementById("planning-button");
var visualizationButton = document.getElementById("visualization-button");
var projectManagementButton = document.getElementById("project-management-button");

var planningTitle = document.getElementById("planning-title");
var visualizationTitle = document.getElementById("visualization-title");
var projectManagementTitle = document.getElementById("project-management-title");

var planning = document.getElementById("planning");
var visualization = document.getElementById("visualization");
var projectManagement = document.getElementById("project-management");

var planningTop = document.getElementById("planning-top");
var visualizationTop = document.getElementById("visualization-top");
var projectManagementTop = document.getElementById("project-management-top");

var planningTopTitle = document.getElementById("planning-top-title");
var visualizationTopTitle = document.getElementById("visualization-top-title");
var projectManagementTopTitle = document.getElementById("project-management-top-title");

planningButton.addEventListener('click', function (){
    planningTitle.style.display = 'block';
    visualizationTitle.style.display = 'none';
    projectManagementTitle.style.display = 'none';  
    
    planning.style.display = 'block';
    visualization.style.display = 'none';
    projectManagement.style.display = 'none';    
    
    planningTitle.style.visibility = 'visible';
    visualizationTitle.style.visibility = 'hidden';
    projectManagementTitle.style.visibility = 'hidden';  
    
    planning.style.visibility = 'visible';
    visualization.style.visibility = 'hidden';
    projectManagement.style.visibility = 'hidden';

    planningTitle.style.opacity = '1';
    visualizationTitle.style.opacity = '0';
    projectManagementTitle.style.opacity = '0';

    planning.style.opacity = '1';
    visualization.style.opacity = '0';
    projectManagement.style.opacity = '0';
    
    planningTop.style.display = 'block';
    visualizationTop.style.display = 'none';
    projectManagementTop.style.display = 'none';   
    
    planningTopTitle.style.display = 'inline-block';
    visualizationTopTitle.style.display = 'none';
    projectManagementTopTitle.style.display = 'none';
    
})
visualizationButton.addEventListener('click', function (){
    planningTitle.style.display = 'none';
    visualizationTitle.style.display = 'block';
    projectManagementTitle.style.display = 'none';  
    
    planning.style.display = 'none';
    visualization.style.display = 'block';
    projectManagement.style.display = 'none';    
    
    planningTitle.style.visibility = 'hidden';
    visualizationTitle.style.visibility = 'visible';
    projectManagementTitle.style.visibility = 'hidden';  
    
    planning.style.visibility = 'hidden';
    visualization.style.visibility = 'visible';
    projectManagement.style.visibility = 'hidden';

    planningTitle.style.opacity = '0';
    visualizationTitle.style.opacity = '1';
    projectManagementTitle.style.opacity = '0';

    planning.style.opacity = '0';
    visualization.style.opacity = '1';
    projectManagement.style.opacity = '0';

    planningTop.style.display = 'none';
    visualizationTop.style.display = 'block';
    projectManagementTop.style.display = 'none';  
    
    planningTopTitle.style.display = 'none';
    visualizationTopTitle.style.display = 'inline-block';
    projectManagementTopTitle.style.display = 'none';
})

projectManagementButton.addEventListener('click', function (){
    planningTitle.style.display = 'none';
    visualizationTitle.style.display = 'none';
    projectManagementTitle.style.display = 'block';  
    
    planning.style.display = 'none';
    visualization.style.display = 'none';
    projectManagement.style.display = 'block';

    planningTitle.style.visibility = 'hidden';
    visualizationTitle.style.visibility = 'hidden';
    projectManagementTitle.style.visibility = 'visible';

    planning.style.visibility = 'hidden';
    visualization.style.visibility = 'hidden';
    projectManagement.style.visibility = 'visible';

    planningTitle.style.opacity = '0';
    visualizationTitle.style.opacity = '0';
    projectManagementTitle.style.opacity = '1';

    planning.style.opacity = '0';
    visualization.style.opacity = '0';
    projectManagement.style.opacity = '1';

    planningTop.style.display = 'none';
    visualizationTop.style.display = 'none';
    projectManagementTop.style.display = 'block';  
    
    planningTopTitle.style.display = 'none';
    visualizationTopTitle.style.display = 'none';
    projectManagementTopTitle.style.display = 'inline-block';
})