const imageUrls = [
    'https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1470093851219-69951fcbb533?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1hbHxlbnwwfDB8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFuaW1hbHxlbnwwfDB8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1507666405895-422eee7d517f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1hbHxlbnwwfDB8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWFsfGVufDB8MHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1518467166778-b88f373ffec7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFuaW1hbHxlbnwwfDB8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1531884070720-875c7622d4c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFuaW1hbHxlbnwwfDB8MHx8fDA%3D',
    'https://media.istockphoto.com/id/2157491920/photo/endemic-mauritius-ornate-day-gecko-standing-upside-down-on-leaf-of-palm-tree.webp?a=1&b=1&s=612x612&w=0&k=20&c=Via04YL7IxtSr55KSBgtvUkl3RYnDc307d_BztX4ZIs=',
    'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGFuaW1hbHxlbnwwfDB8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1545063914-a1a6ec821c88?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGFuaW1hbHxlbnwwfDB8MHx8fDA%3D',
];

function generateCollage() {
    const collageContainer = document.getElementById('collageContainer');
    collageContainer.innerHTML = '';

    for (let i = 0; i < imageUrls.length; i++) {
        const img = document.createElement('img');
        img.src = imageUrls[i];
        img.alt = 'Random Image';

        const randomWidth = Math.floor(Math.random() * 200) + 200;
        const randomHeight = Math.floor(Math.random() * 200) + 200;
        const randomTop = Math.floor(Math.random() * (700 - randomHeight));
        const randomLeft = Math.floor(Math.random() * (800 - randomWidth));
        const randomRotate = Math.floor(Math.random() * 360);

        img.style.position = 'absolute';
        img.style.width = `${randomWidth}px`;
        img.style.height = `${randomHeight}px`;
        img.style.top = `${randomTop}px`;
        img.style.left = `${randomLeft}px`;
        img.style.transform = `rotate(${randomRotate}deg)`;
        img.style.objectFit = 'cover';
        img.style.borderRadius = '8px';
        img.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';

        collageContainer.appendChild(img);
    }
}

document.getElementById('generateButton').addEventListener('click', generateCollage);

generateCollage();
