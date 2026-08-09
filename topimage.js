const images = [
    "cropped-cropped-IMG_0548.jpg",
    "cropped-cropped-IMG_0823-1.jpg",
    "cropped-cropped-IMG_0989.jpeg",
    "cropped-cropped-IMG_0995.jpeg",
    "cropped-cropped-IMG_1499-scaled-3.jpeg",
    "cropped-cropped-IMG_1829-scaled-1.jpeg",
    "cropped-cropped-IMG_20130828_051802_rot.jpg",
    "cropped-cropped-IMG_2109-scaled-1.jpeg",
    "cropped-cropped-IMG_2168-scaled-1.jpeg",
    "cropped-DCIM0151.jpg",
    "cropped-DSC00021.jpg",
    "cropped-DSCN1003.jpg",
    "cropped-IMG_0253.jpg",
    "cropped-IMG_0345-1.jpg",
    "cropped-IMG_0472.jpg",
    "cropped-IMG_0569.jpg",
    "cropped-IMG_0572-10.jpg",
    "cropped-IMG_0586.jpg",
    "cropped-IMG_0634.jpg",
    "cropped-IMG_0651.jpg",
    "cropped-IMG_0681-1.jpg",
    "cropped-IMG_0712.jpg",
    "cropped-IMG_0736.jpg",
    "cropped-IMG_0871.jpg",
    "cropped-IMG_0884.jpg",
    "cropped-IMG_0889.jpg",
    "cropped-IMG_0900.jpg",
    "cropped-IMG_0934.jpeg",
    "cropped-IMG_0965.jpeg",
    "cropped-IMG_0988.jpeg",
    "cropped-IMG_0994-scaled-1.jpeg",
    "cropped-IMG_1055-scaled-1.jpeg",
    "cropped-IMG_1097-scaled-1.jpeg",
    "cropped-IMG_1098-scaled-1.jpeg",
    "cropped-IMG_1128-scaled-1.jpeg",
    "cropped-IMG_1155-scaled-1.jpeg",
    "cropped-IMG_1304-scaled-2.jpeg",
    "cropped-IMG_1336-scaled-1.jpeg",
    "cropped-IMG_1447.jpeg",
    "cropped-IMG_1474-scaled-2.jpeg",
    "cropped-IMG_1558-scaled-2.jpeg",
    "cropped-IMG_1576-scaled-2.jpeg",
    "cropped-IMG_1708-scaled-1.jpeg",
    "cropped-IMG_1719-scaled-1.jpeg",
    "cropped-IMG_1829-scaled-1.jpeg",
    "cropped-IMG_2511-scaled-1.jpeg",
    "cropped-IMG_2532-scaled-1.jpeg",
    "cropped-IMG_2533-scaled-1.jpeg",
    "cropped-IMG_2590-scaled-1.jpeg",
    "cropped-IMG_2637-scaled-1.jpeg",
    "cropped-IMG_2700-scaled-2.jpeg",
    "cropped-IMG_2731-scaled-2.jpeg",
    "cropped-IMG_2744-scaled-1.jpeg",
    "cropped-IMG_2879-scaled-1.jpeg",
    "cropped-IMG_2903-scaled-1.jpeg",
    "cropped-IMG_3076-scaled-2.jpeg",
    "cropped-IMG_3117-scaled-1.jpeg",
    "cropped-IMG_3140-scaled-1.jpeg",
    "cropped-IMG_3194-scaled-1.jpeg",
    "cropped-IMG_3206-scaled-2.jpeg",
];

function select_random_image() {
    const image = images[Math.floor(Math.random() * images.length)];
    const img = document.getElementById('wp-custom-header').querySelector('img')
    img.srcset = "";
    img.src = "TOPIMAGES/" + image;
}

function select_random_image2() {
    const image = images[Math.floor(Math.random() * images.length)];
    const img = document.getElementById('wp-custom-header').querySelector('img')
    img.srcset = "";
    img.src = "../TOPIMAGES/" + image;
}
