    const images = document.querySelectorAll('.gallery-image');

    const popupBackground = document.getElementById('popup-background');
    const popupImage = document.getElementById('popup-image');
    const closePopupButton = document.getElementById('close-popup');

    function openPopup(image) { 
        console.log(image);
        popupBackground.style.display = 'flex';
        popupImage.setAttribute("src", image);
    }

    images.forEach(image => {
        console.log(image);
        image.addEventListener('click', () => {
            console.log("2");

            openPopup(image.getAttribute('src'));
        });
    });

    function closePopup() {
        popupBackground.style.display = 'none';
    }

    closePopupButton.addEventListener('click', closePopup);
    popupBackground.addEventListener('click', closePopup);