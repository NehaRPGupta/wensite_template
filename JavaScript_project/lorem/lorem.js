const text = [
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 
    1500s, when an unknown printer took a galley of type and scrambled it to 
    make a type specimen book. It has survived not only five centuries, but 
    also the leap into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset sheets 
    containing Lorem Ipsum passages, and more recently with desktop publishing 
    software like Aldus PageMaker including versions of Lorem Ipsum.`,

    `It is a long established fact that a reader will be distracted by the 
    readable content of a page when looking at its layout. The point of using 
    Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
    as opposed to using 'Content here, content here', making it look like 
    readable English. Many desktop publishing packages and web page editors 
    now use Lorem Ipsum as their default model text, and a search for 'lorem 
    ipsum' will uncover many web sites still in their infancy. Various versions 
    have evolved over the years, sometimes by accident, sometimes on purpose 
    (injected humour and the like).`,

    `Contrary to popular belief, Lorem Ipsum is not simply random text. 
    It has roots in a piece of classical Latin literature from 45 BC, making 
    it over 2000 years old. Richard McClintock, a Latin professor at Hampden-
    Sydney College in Virginia, looked up one of the more obscure Latin words, 
    consectetur, from a Lorem Ipsum passage, and going through the cites of 
    the word in classical literature, discovered the undoubtable source.`,

    `Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus 
    Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written 
    in 45 BC. This book is a treatise on the theory of ethics, very popular 
    during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor 
    sit amet..", comes from a line in section 1.10.32.`,

    `There are many variations of passages of Lorem Ipsum available, but the 
    majority have suffered alteration in some form, by injected humour, or 
    randomised words which don't look even slightly believable. If you are 
    going to use a passage of Lorem Ipsum, you need to be sure there isn't 
    anything embarrassing hidden in the middle of text. All the Lorem Ipsum 
    generators on the Internet tend to repeat predefined chunks as necessary, 
    making this the first true generator on the Internet.`,

    `It uses a dictionary of over 200 Latin words, combined with a handful 
    of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
    The generated Lorem Ipsum is therefore always free from repetition, injected 
    humour, or non-characteristic words etc.`,

    `The standard chunk of Lorem Ipsum used since the 1500s is reproduced 
    below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus 
    Bonorum et Malorum" by Cicero are also reproduced in their exact original 
    form, accompanied by English versions from the 1914 translation by H. 
    Rackham.`,

    `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
    veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
    ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
    porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore 
    et dolore magnam aliquam quaerat voluptatem.`,

    `But I must explain to you how all this mistaken idea of denouncing pleasure 
    and praising pain was born and I will give you a complete account of the 
    system, and expound the actual teachings of the great explorer of the 
    truth, the master-builder of human happiness. No one rejects, dislikes, 
    or avoids pleasure itself, because it is pleasure, but because those who 
    do not know how to pursue pleasure rationally encounter consequences that 
    are extremely painful. Nor again is there anyone who loves or pursues or 
    desires to obtain pain of itself, because it is pain, but because occasionally 
    circumstances occur in which toil and pain can procure him some great 
    pleasure.`,

    ` To take a trivial example, which of us ever undertakes laborious 
    physical exercise, except to obtain some advantage from it? But who has 
    any right to find fault with a man who chooses to enjoy a pleasure that 
    has no annoying consequences, or one who avoids a pain that produces no 
    resultant pleasure?`,
];

const form = document.querySelector('.lorem-form');
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * text.length);

    if(isNaN(value) || value <= 0 || value > 9){
        result.innerHTML = `<p class="result">${text[random]}</p>`;
    }
    else {
        let tempText = text.slice(0,value);
        tempText = tempText.map(function (item) {
            return `<p class="result">${item}</p>`;
        }).join("");
        result.innerHTML = tempText;
    }
});