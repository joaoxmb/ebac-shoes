import cart from "./cart.js"

export default function shop(element, products) {
  element = $(element);

  products.forEach(product => {
    const {img, name, desc, size} = product;

    const item = $(`<li>
        <img src="${img}" alt="${name}" />
        <div>
          <h3>${name}</h3>
          <p>${desc}</p>
          <ul>
            ${size
              .reduce((p, c) => {
                p += `<li><span>${c}</span></li>`
                return p;
              }, '')
            }
          </ul>
          <button type="button">
            Adicionar ao carrinho
          </button>
        </div>
      </li>`)

    item
      .appendTo(element)
      .find('button')
      .on('click', () => {
        cart.add(product)
        console.log(cart.itens);
      })
  });

}
// products = products
// .map((item) => {
//   const {img,name,desc,size} = item;

//   const sizeItens = size.reduce((p, c) => {
//     p += `<li><span>${c}</span></li>`
//     return p;
//   }, '')

//   const handleAddToCart = () => {

//   }

//   return $(`<li>
//       <img src="${img}" alt="Bola" />
//       <div>
//         <h3>${name}</h3>
//         <p>${desc}</p>
//         <ul>
//           ${sizeItens}
//         </ul>
//         <button type="button">
//           Adicionar ao carrinho
//         </button>
//       </div>
//     </li>`)
// })

// $(element).html();
// products.forEach((product) => {
// $(element).append(product);
// })
