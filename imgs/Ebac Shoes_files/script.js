import shop from "./shop.js"

const mockShopProducts = [
  {
    img: './imgs/court purple.webp',
    name: 'TÊNIS NIKE AIR JORDAN 1 MID "PURPLE TROPICAL TWIST" PRETO/ROXO',
    desc: 'Inspirado no AJ1 original, essa edição cano médio mantém o visual icônico que você ama, enquanto a escolha de cores e o couro conferem uma identidade distinta.',
    size: [35,36,37,38,39,40],
    id: '0'
  },
  {
    img: './imgs/dunk low prm.webp',
    name: 'TÊNIS FEMININO NIKE DUNK LOW PRM "HOUSTON COMETS FOUR-PEAT" BRANCO/AZUL',
    desc: 'Construído em um esquema de cores elegante, o modelo possui a base escura "Obsidiana" com sobreposições em branco.',
    size: [35,36,37,38,39,40],
    id: '1'
  },
  {
    img: './imgs/force 1 07 low.webp',
    name: 'TÊNIS FEMININO NIKE AIR FORCE 1 07 LOW "WHITE & BLACK" BRANCO/PRETO',
    desc: 'Construído com silhueta de cano baixo, o tênis apresenta um visual clean e versátil, com cabedal todo feito de couro.',
    size: [35,36,37,38,39,40],
    id: '2'
  },
  {
    img: './imgs/light photography.webp',
    name: 'TÊNIS NIKE AIR MAX PLUS TN "LIGHT PHOTOGRAPHY" COLORIDO',
    desc: 'Com um design personalizado inspirados nas caudas das baleias, e as icônicas linhas onduladas que possuem inspiração nas palmeiras e nas ondas do mar.',
    size: [35,36,37,38,39,40],
    id: '3'
  },
  {
    img: './imgs/old skool.webp',
    name: 'TÊNIS VANS X HOCKEY SKATE OLD SKOOL PRETO',
    desc: 'Ultra resistência no interior para a prática do skate Completamente redesenhada para o skate moderno, a coleção Skate Classics oferece mais do que os skatistas precisam para permitir evolução máxima.',
    size: [35,36,37,38,39,40],
    id: '4'
  },
  {
    img: './imgs/pig suede.webp',
    name: 'TÊNIS VANS SKATE GROSSO MID PIG SUEDE AZUL',
    desc: 'Considerado um membro da família Vans e lenda do skate, o impacto de Jeff Grosso no skate é inédito.',
    size: [35,36,37,38,39,40],
    id: '5'
  },
  {
    img: './imgs/purple tropical.webp',
    name: 'TÊNIS NIKE SB DUNK LOW PRO ISO " COURT PURPLE " BRANCO/ROXO',
    desc: 'Nos quase 400 quilômetros que separam Washington D.C. de Nova York, SANDY BODECKER, pai da NIKE SB e um velho conhecido dos sneakerheads.',
    size: [35,36,37,38,39,40],
    id: '6'
  },
];

$(() => {
  shop(
    $("#produtcs .shop"),
    mockShopProducts
  )  
})