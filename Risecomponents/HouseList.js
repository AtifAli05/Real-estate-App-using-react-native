const PRODUCTS = [
    {
        id: 100,
        name: 'Luxury Home 0',
        price: 350,
        Area: '50 Sq.Yd',
        image: require('../images/houe.jpg'),
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 101,
        name: 'Rawalpindi',
        price: 600,
        Area: '50 Sq.Yd',
        image: require('../images/houe.jpg'),
        description: 'A model car, or toy car, is a miniature representation of an automobile. Other miniature motor vehicles, such as trucks, buses, or even ATVs, etc. are often included in this general category.'
    },
    {
        id: 102,
        name: 'SweetHome Cupcake',
        price: 'buy a home',
        Area: '50 Sq.Yd',
        
        image: require('../images/houe.jpg'),
        description: 'A cupcake (also British English: fairy cake; Hiberno-English: bun; Australian English: fairy cake or patty cake[1]) is a small cake designed to serve one person.'
    },
    {
        id: 103,
        name: 'Luxury Home 0',
        price: 350,
        image: require('../images/houe.jpg'),
        Area: '50 Sq.Yd',
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
    {
        id: 104,
        name: 'Luxury Home 0',
        price: 350,
        image: require('../images/houe.jpg'),
        Area: '50 Sq.Yd',
        description: 'A headset combines a headphone with microphone. Headsets are made with either a single-earpiece (mono) or a double-earpiece (mono to both ears or stereo).'
    },
];
export function getProducts() {
    console.log(PRODUCTS);
    return PRODUCTS;
}
// export function getProduct(id) {
//     return PRODUCTS.find((product) => (product.id == id));
// }
