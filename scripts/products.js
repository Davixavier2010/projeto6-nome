// Catálogo de Produtos da Doralice Confeitaria & Café
// Dados estruturados com curadoria para o portfólio

export const CATEGORIES = [
  { id: 'todos', name: 'Todas as Criações', icon: 'sparkles' },
  { id: 'brigadeiros', name: 'Brigadeiros & Trufas', icon: 'circle-dot' },
  { id: 'bolos', name: 'Bolos & Fatias', icon: 'cake' },
  { id: 'classicos', name: 'Clássicos do Brasil', icon: 'heart' },
  { id: 'cafeteria', name: 'Cafés Especiais', icon: 'coffee' },
  { id: 'presentes', name: 'Caixas de Presente', icon: 'gift' }
];

export const PRODUCTS = [
  {
    id: 'brigadeiro-pistache',
    name: 'Brigadeiro de Pistache Siciliano & Flor de Sal',
    category: 'brigadeiros',
    price: 7.50,
    badge: 'Mais Vendido',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Pistache italiano 100% puro, chocolate branco nobre e toque de flor de sal marinha de Guamaré.',
    fullDescription: 'Uma releitura sofisticada do doce mais amado do Brasil. Utilizamos pasta pura de pistache de Bronte (Sicília), base aveludada de chocolate branco nobre e finalização em grãos tostados de pistache com delicados cristais de flor de sal.',
    allergens: ['Contém leite', 'Contém pistache', 'Não contém glúten'],
    weight: '25g por unidade',
    pairing: 'Harmoniza com nosso Café Filtrado da Mantiqueira ou Espresso Tostado.'
  },
  {
    id: 'brigadeiro-noir-70',
    name: 'Brigadeiro Noir Cacau 70% da Bahia',
    category: 'brigadeiros',
    price: 6.90,
    badge: 'Origem Bahia',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Cacau fino de Ilhéus, massa sedosa com amargor equilibrado e finalizado com nibs crocantes.',
    fullDescription: 'Elaborado com cacau de fazenda sustentável de Ilhéus (BA). Textura aveludada com teor equilibrado de doçura, finalizado em nibs de cacau tostados que conferem um crocante inesquecível ao paladar.',
    allergens: ['Contém leite', 'Pode conter traços de nozes', 'Não contém glúten'],
    weight: '25g por unidade',
    pairing: 'Perfeito acompanhado de um Cappuccino cremoso ou Licor de Café.'
  },
  {
    id: 'bolo-cenoura-vulcao',
    name: 'Fatia de Bolo de Cenoura Vulcão',
    category: 'bolos',
    price: 22.00,
    badge: 'Receita Afetiva',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Massa fofinha de cenouras frescas banhada em calda vulcão de brigadeiro 54% ainda morna.',
    fullDescription: 'O maior ícone da memória afetiva brasileira. Massa úmida e aerada feita com cenouras selecionadas, coberta com uma generosa camada de calda cremosa de chocolate belga 54% que escorre a cada garfada.',
    allergens: ['Contém glúten', 'Contém ovos', 'Contém leite'],
    weight: '190g a fatia generosa',
    pairing: 'Experimente com nosso Café Coado na Mesa ou um copo de leite frio.'
  },
  {
    id: 'quindim-dourado',
    name: 'Quindim Dourado da Fazenda',
    category: 'classicos',
    price: 14.00,
    badge: 'Tradição Artesanal',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Gemas caipiras peneiradas à mão, coco fresco ralado e base brilhante espelhada.',
    fullDescription: 'Seguindo à risca a receita secular das cozinhas coloniais brasileiras. As gemas são peneiradas manualmente para garantir aroma suave, com base de coco fresco ralado e aquela cor dourada inconfundível.',
    allergens: ['Contém ovos', 'Contém leite', 'Não contém glúten'],
    weight: '90g por unidade',
    pairing: 'Excelente com Espresso clássico para equilibrar a doçura natural.'
  },
  {
    id: 'bolo-de-rolo',
    name: 'Bolo de Rolo Pernambucano Tradicional',
    category: 'classicos',
    price: 24.00,
    badge: 'Patrimônio Imaterial',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Camadas milimétricas de massa amanteigada enroladas com pura goiabada cascão cremosa.',
    fullDescription: 'Uma verdadeira obra de arte da confeitaria brasileira. Camadas extremamente finas e delicadas de pão de ló amanteigado, entrelaçadas com goiabada cascão artesanal de Ponte Nova (MG). Servido polvilhado de açúcar fino.',
    allergens: ['Contém glúten', 'Contém leite', 'Contém ovos'],
    weight: '180g (porção fatiada)',
    pairing: 'Harmoniza divinamente com Queijo do Reino curado ou Café Especial.'
  },
  {
    id: 'pao-de-mel-artesanal',
    name: 'Pão de Mel com Doce de Leite de Viçosa',
    category: 'classicos',
    price: 16.50,
    badge: 'Favorito dos Clientes',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Massa úmida de especiarias brasileiras, recheio farto de doce de leite e casquinha de chocolate 54%.',
    fullDescription: 'Receita com mel puro de flor de laranjeira, canela, cravo e noz-moscada. Recheado generosamente com o premiado doce de leite de Viçosa e mergulhado em uma casquinha de chocolate meio amargo crocante.',
    allergens: ['Contém glúten', 'Contém leite', 'Contém ovos'],
    weight: '110g por unidade',
    pairing: 'Perfeito para o lanche da tarde com Chá de Especiarias ou Latte Macchiato.'
  },
  {
    id: 'torta-cacau-cupuacu',
    name: 'Torta Mousse Cacau 70% & Cupuaçu',
    category: 'bolos',
    price: 27.00,
    badge: 'Edição Especial',
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Base crocante de castanha-de-caju, mousse densa de cacau e camada aveludada de cupuaçu amazônico.',
    fullDescription: 'A união entre o terroir amazônico e a pâtisserie francesa. Sablet crocante de castanhas nacionais, recheio duplo com ganache intensa de cacau 70% e mousse refrescante de cupuaçu.',
    allergens: ['Contém castanhas', 'Contém leite', 'Não contém glúten'],
    weight: '170g a fatia',
    pairing: 'Harmoniza com Café Coado de torra média-clara.'
  },
  {
    id: 'caixa-degustacao-12',
    name: 'Caixa Luxo Degustação (12 Brigadeiros)',
    category: 'presentes',
    price: 84.00,
    badge: 'Presente Perfeito',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Embalagem rígida na cor vinho bordô com fita de cetim e 12 brigadeiros artesanais sortidos.',
    fullDescription: 'Nossa caixa mais desejada para presentes especiais. Inclui 12 brigadeiros artesanais selecionados (Pistache, Noir 70%, Brûlée, Doce de Leite com Flor de Sal, Tradicional e Café Especial). Acompanha cartão caligráfico personalizado.',
    allergens: ['Contém leite', 'Contém castanhas / pistache'],
    weight: '320g com embalagem',
    pairing: 'Acompanha cartão com mensagem personalizada escrita à mão.'
  },
  {
    id: 'caixa-afeto-16',
    name: 'Caixa Coleção Afeto & Tradição (16 Unidades)',
    category: 'presentes',
    price: 115.00,
    badge: 'Exclusividade Atelier',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Mix premium com mini quindins, brigadeiros nobres e trufas de chocolate com cupuaçu.',
    fullDescription: 'A experiência sensorial definitiva da Doralice. Uma caixa presenteável com acabamento aveludado e estampagem em dourado fosco contendo 16 unidades dos maiores destaques de nosso cardápio.',
    allergens: ['Contém leite', 'Contém ovos', 'Contém castanhas'],
    weight: '440g com embalagem',
    pairing: 'Inclui fita de seda e lacre de cera personalizado do atelier.'
  },
  {
    id: 'cappuccino-doralice',
    name: 'Cappuccino com Borda de Brigadeiro Nobre',
    category: 'cafeteria',
    price: 19.50,
    badge: 'Assinatura da Casa',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Espresso duplo, leite cremoso microespumado e borda de brigadeiro de colher com canela em pó.',
    fullDescription: 'Servido em nossa xícara de cerâmica artesanal. A borda da taça é coberta com brigadeiro de panela fresco e finalizada com canela aromática, combinando o calor do café com o doce reconfortante.',
    allergens: ['Contém leite'],
    weight: '220ml',
    pairing: 'Aprecie colherando o brigadeiro enquanto saboreia o café.'
  },
  {
    id: 'cafe-filtrado-mantiqueira',
    name: 'Café Especial Filtrado na Mesa (V60)',
    category: 'cafeteria',
    price: 14.00,
    badge: 'Café 86+ Pontos',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Grãos 100% arábica do Sul de Minas com notas naturais de rapadura, pêssego e acidez cítrica suave.',
    fullDescription: 'Extraído individualmente à sua frente no método V60. Grãos cultivados a mais de 1.200 metros de altitude, torrados artesanalmente em pequenos lotes todas as semanas.',
    allergens: ['Não contém glúten', 'Vegano'],
    weight: '250ml (serve até 2 xícaras)',
    pairing: 'Ideal para acompanhar nossas fatias de bolo ou quindim.'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Camila Mendonça & Rafael',
    role: 'Casamento no Espaço Alves Guimarães',
    rating: 5,
    text: 'A mesa de doces da Doralice foi o ponto alto da nossa festa. Os convidados até hoje comentam sobre o brigadeiro de pistache e os mini quindins. O atendimento e o cuidado com as forminhas personalizadas foram impecáveis!',
    date: 'Outubro de 2026'
  },
  {
    id: 2,
    name: 'Dra. Beatriz Vasconcellos',
    role: 'Cliente Frequente do Atelier (Jardins)',
    rating: 5,
    text: 'O bolo de cenoura com a calda vulcão morna lembra as tardes na fazenda da minha avó, mas com uma sofisticação de pâtisserie parisiense. O ambiente é acolhedor e o café filtrado é de altíssimo nível.',
    date: 'Setembro de 2026'
  },
  {
    id: 3,
    name: 'Lucas Brandão',
    role: 'Diretor de Marketing - Evento Corporativo',
    rating: 5,
    text: 'Encomendamos 120 caixas de presente personalizadas para o fim de ano dos nossos clientes VIP. O resultado foi unânime: apresentação de alto luxo e sabor inesquecível. Com certeza voltaremos a contratar.',
    date: 'Dezembro de 2025'
  }
];

