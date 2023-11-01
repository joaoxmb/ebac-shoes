
export default class cart {
  static itens = []

  static add(item) {
    let exist = this.itens.findIndex((finded) => finded.id === item.id);

    if (exist != -1) {
      return this.itens[exist].quanty += 1
    }

    this.itens
      .push({
        ...item,
        quanty: 1
      })  
  }
}