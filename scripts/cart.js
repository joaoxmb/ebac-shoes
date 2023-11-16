let cartBtn = $('#cart-btn');

export default class cart {
  static itens = []

  static add(item) {    
    let exist = this.itens.findIndex((finded) => finded.id === item.id);

    if (exist != -1) {
      this.itens[exist].quanty += 1
      this.load()
      return;
    }

    this.itens
      .push({...item, quanty: 1})  
    this.load()
  }

  static load() {
    let count = this.itens.reduce((p, c) => {
      p += c.quanty
      return p
    }, 0);

    cartBtn
      .find("span")
      .text(count)
  }
}