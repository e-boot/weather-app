const loader = document.querySelector('.loader');

function showLoader(){
    loader.style.display = 'block';
}


function hideLoader(){
    loader.style.display = 'none';
}

export {showLoader, hideLoader}