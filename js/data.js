
const DATA = {

  // ---- Restaurante ----
  restaurante: {
    nome: "Bistrô Petiscaria",
    slogan: "Petiscos, drinks e boa conversa.",
    descricao: "Um lugar pra sentar, comer bem e não ter pressa.",
    telefone: "+5534999999999",
    whatsapp: "https://wa.me/5534999999999?text=Oi!%20Quero%20mais%20informações.",
    instagram: "https://instagram.com/bistropetiscaria",
    email: "contato@bistropetiscaria.com",
    endereco: {
      rua: "Rua das Acácias, 418",
      bairro: "Centro",
      cidade: "Uberlândia, MG",
      maps: "https://maps.google.com/?q=Uberlândia+MG"
    },
    horarios: [
      { dia: "Seg – Qui", hora: "18h – 00h" },
      { dia: "Sex – Sáb",  hora: "18h – 02h" },
      { dia: "Domingo",    hora: "17h – 22h" }
    ]
  },

  // ---- Eventos ----
  eventos: [
    {
      id: 1,
      titulo: "Noite do Sertanejo",
      data_dia: "14",
      data_mes: "Jun",
      data_ano: "2025",
      horario: "21h",
      tag: "Show ao Vivo",
      imagem: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
      descricao: "Uma noite pra cantar junto. Entrada gratuita."
    },
    {
      id: 2,
      titulo: "Happy Hour Universitário",
      data_dia: "21",
      data_mes: "Jun",
      data_ano: "2025",
      horario: "18h",
      tag: "Promoção",
      imagem: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80",
      descricao: "Cerveja em dobro para quem mostrar a carteirinha."
    },
    {
      id: 3,
      titulo: "Quiz da Petiscaria",
      data_dia: "28",
      data_mes: "Jun",
      data_ano: "2025",
      horario: "20h",
      tag: "Evento",
      imagem: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?w=600&q=80",
      descricao: "Times de 4 pessoas. Premiação em consumação."
    }
  ],

  // ---- Cardápio ----
  categorias: [
    { id: "petiscos",     label: "Petiscos" },
    { id: "hamburguer",  label: "Hambúrgueres" },
    { id: "drinks",      label: "Drinks" },
    { id: "porcoes",     label: "Porções" },
    { id: "sobremesas",  label: "Sobremesas" }
  ],

  cardapio: [
    // Petiscos
    {
      id: 101,
      categoria: "petiscos",
      nome: "Dadinho de Tapioca",
      descricao: "Com geleia de pimenta artesanal.",
      preco: "R$ 29",
      imagem: "https://images.unsplash.com/photo-1604472927-6e0a8ec9b595?w=400&q=80"
    },
    {
      id: 102,
      categoria: "petiscos",
      nome: "Frango da Vizinha",
      descricao: "Isca empanada, molho de ervas.",
      preco: "R$ 36",
      imagem: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&q=80"
    },
    {
      id: 103,
      categoria: "petiscos",
      nome: "Croquete da Casa",
      descricao: "Carne bovina, gratinado com catupiry.",
      preco: "R$ 32",
      imagem: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=400&q=80"
    },
    {
      id: 104,
      categoria: "petiscos",
      nome: "Polvo na Brasa",
      descricao: "Tentáculos macios, azeite e alho.",
      preco: "R$ 58",
      imagem: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80"
    },
    // Hambúrgueres
    {
      id: 201,
      categoria: "hamburguer",
      nome: "O Clássico",
      descricao: "180g, queijo prato, alface, tomate.",
      preco: "R$ 34",
      imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80"
    },
    {
      id: 202,
      categoria: "hamburguer",
      nome: "Bistrô Smash",
      descricao: "Duplo smash, cheddar inglês, picles.",
      preco: "R$ 42",
      imagem: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80"
    },
    {
      id: 203,
      categoria: "hamburguer",
      nome: "Funghi & Brie",
      descricao: "Cogumelos salteados, brie cremoso.",
      preco: "R$ 48",
      imagem: "https://images.unsplash.com/photo-1594212699903-ec8a3eca368f?w=400&q=80"
    },
    {
      id: 204,
      categoria: "hamburguer",
      nome: "BBQ da Serra",
      descricao: "Blend angus, bacon artesanal, BBQ.",
      preco: "R$ 46",
      imagem: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80"
    },
    // Drinks
    {
      id: 301,
      categoria: "drinks",
      nome: "Mojito da Casa",
      descricao: "Rum branco, hortelã, limão taiti.",
      preco: "R$ 22",
      imagem: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&q=80"
    },
    {
      id: 302,
      categoria: "drinks",
      nome: "Negroni Fumê",
      descricao: "Gin, Campari, vermute rosso.",
      preco: "R$ 28",
      imagem: "https://images.unsplash.com/photo-1574418865416-892f1d89a96c?w=400&q=80"
    },
    {
      id: 303,
      categoria: "drinks",
      nome: "Spritz Tropical",
      descricao: "Aperol, prosecco, laranja, gelo.",
      preco: "R$ 24",
      imagem: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&q=80"
    },
    {
      id: 304,
      categoria: "drinks",
      nome: "Chopp Artesanal",
      descricao: "IPA mineira, rótulo rotativo.",
      preco: "R$ 16",
      imagem: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=400&q=80"
    },
    // Porções
    {
      id: 401,
      categoria: "porcoes",
      nome: "Batata Rústica",
      descricao: "Frita com pele, sal grosso, chimichurri.",
      preco: "R$ 26",
      imagem: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80"
    },
    {
      id: 402,
      categoria: "porcoes",
      nome: "Calabresa Acebolada",
      descricao: "Fatiada, grelhada, com pão de alho.",
      preco: "R$ 38",
      imagem: "https://images.unsplash.com/photo-1606728035253-49e8a23146de?w=400&q=80"
    },
    {
      id: 403,
      categoria: "porcoes",
      nome: "Queijo Coalho Grill",
      descricao: "Com mel de abelha e orégano.",
      preco: "R$ 32",
      imagem: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&q=80"
    },
    {
      id: 404,
      categoria: "porcoes",
      nome: "Mix da Petiscaria",
      descricao: "Croquete, isca, dadinho, linguiça.",
      preco: "R$ 64",
      imagem: "https://images.unsplash.com/photo-1559181567-c3190958d3ab?w=400&q=80"
    },
    // Sobremesas
    {
      id: 501,
      categoria: "sobremesas",
      nome: "Brownie Quente",
      descricao: "Com sorvete de creme, calda de caramelo.",
      preco: "R$ 24",
      imagem: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80"
    },
    {
      id: 502,
      categoria: "sobremesas",
      nome: "Petit Gâteau",
      descricao: "Bolo de chocolate meio amargo, miolo mole.",
      preco: "R$ 28",
      imagem: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&q=80"
    },
    {
      id: 503,
      categoria: "sobremesas",
      nome: "Açaí da Serra",
      descricao: "Com granola artesanal e banana.",
      preco: "R$ 22",
      imagem: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=400&q=80"
    },
    {
      id: 504,
      categoria: "sobremesas",
      nome: "Pavê de Limão",
      descricao: "Camadas de biscoito, creme, merengue.",
      preco: "R$ 20",
      imagem: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80"
    }
  ],

  // ---- Galeria ----
  galeria: [
    {
      id: 1,
      imagem: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85",
      alt: "Ambiente do Bistrô Petiscaria"
    },
    {
      id: 2,
      imagem: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=85",
      alt: "Petiscos da casa"
    },
    {
      id: 3,
      imagem: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=85",
      alt: "Drinks artesanais"
    }
  ]

};

// Exporta para uso nos módulos JS
// Em integração com Google Sheets, este objeto seria populado via API
if (typeof module !== 'undefined') {
  module.exports = DATA;
}
