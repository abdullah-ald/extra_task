function switchMood() {
    const body = document.body;
    const icon = document.getElementById('dartToLight');
    
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}