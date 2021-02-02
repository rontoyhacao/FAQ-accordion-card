const accordionItemHeader = document.querySelectorAll('.accordion-item-header');

accordionItemHeader.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', event => {
        const currentActiveAccordionItemHeader = document.querySelector('.accordion-item-header.active');
        if (currentActiveAccordionItemHeader && currentActiveAccordionItemHeader !== accordionItemHeader) {
            currentActiveAccordionItemHeader.classList.toggle('active');
            currentActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        }

        accordionItemHeader.classList.toggle('active');
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains('active')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
        } else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});