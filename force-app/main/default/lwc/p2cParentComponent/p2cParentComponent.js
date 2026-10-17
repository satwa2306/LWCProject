import { LightningElement, api } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    carouselDetails = [
        {
            id: '1',
            src: 'https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg',
            header: 'First Card',
            description: 'First card description.',
            alternativetext: 'First card accessible description.'
        },
        {
            id: '2',
            src: 'https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg',
            header: 'second Card',
            description: 'second card description.',
            alternativetext: 'second card accessible description.'
        },
        {
            id: '3',
            src: 'https://v1.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg',
            header: 'third Card',
            description: 'third card description.',
            alternativetext: 'third card accessible description.'
        }
    ];

    val = 10;
    handlerkey(event) {
        this.val = event.target.value;
    }

    handleClick() {
        this.template.querySelector('c-p2c-slider-component').resetslider();
    }
}
