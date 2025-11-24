import { Product, Environment } from '../types';

export const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Sofá Imperatore Velluto',
    shortDescription: 'Sofá de 4 lugares em veludo italiano azul profundo.',
    fullDescription: 'O Sofá Imperatore redefine o conceito de conforto e elegância. Estofado em veludo italiano de alta gramatura, possui estrutura em madeira maciça de reflorestamento e pés em latão dourado. Ideal para salas de estar que buscam protagonismo e sofisticação.',
    category: 'Sofás',
    environment: 'Sala de Estar',
    price: 12500,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop', // Sofá de veludo (verde/azul dependendo da luz, muito luxuoso)
    secondaryImages: [
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2070',
      'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2070'
    ],
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Mesa de Jantar Carrara',
    shortDescription: 'Tampo em mármore Carrara legítimo e base geométrica.',
    fullDescription: 'Uma peça escultural para sua sala de jantar. A Mesa Carrara combina a nobreza da pedra natural com o design contemporâneo de sua base em aço carbono com pintura eletrostática dourada. Acomoda confortavelmente 8 pessoas.',
    category: 'Mesas de Jantar',
    environment: 'Sala de Jantar',
    price: 18900,
    image: 'https://images.unsplash.com/photo-1577140917170-285929db55cc?q=80&w=2000&auto=format&fit=crop', // Mesa de jantar elegante
    secondaryImages: [
      'https://images.unsplash.com/photo-1533090368676-1fd25485db88?q=80&w=2000'
    ],
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Poltrona Lounge Eames Gold',
    shortDescription: 'Releitura clássica com acabamentos em couro legítimo caramelo.',
    fullDescription: 'Ícone do design mundial, esta releitura da Poltrona Eames traz acabamento premium em couro natural e lâmina de madeira nogueira. Ergonomia perfeita para leitura ou descanso no seu escritório ou living.',
    category: 'Poltronas',
    environment: 'Escritório',
    price: 6800,
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=2000&auto=format&fit=crop', // Poltrona estilo Eames
    secondaryImages: [],
    isFeatured: false,
  },
  {
    id: '4',
    name: 'Cama King Size Royal',
    shortDescription: 'Cabeceira estofada em linho cru com detalhes em capitonê.',
    fullDescription: 'Transforme seu quarto em uma suíte presidencial. A Cama Royal possui cabeceira alta, acolchoada com espumas soft e revestida em linho puro. Estrutura robusta e silenciosa para noites de sono reparadoras.',
    category: 'Camas',
    environment: 'Quarto',
    price: 9400,
    image: 'https://images.unsplash.com/photo-1505693416388-b0346efee535?q=80&w=2000&auto=format&fit=crop', // Cama de luxo
    secondaryImages: [
        'https://images.unsplash.com/photo-1505693314120-7a7a926ca0e4?q=80&w=2000'
    ],
    isFeatured: true,
  },
  {
    id: '5',
    name: 'Lustre Cristal Waterfall',
    shortDescription: 'Pendente com cristais egípcios e estrutura dourada.',
    fullDescription: 'Iluminação que é uma joia. O Lustre Waterfall cria um efeito de cascata de luz, perfeito para pé-direito duplo ou sobre mesas de jantar imponentes.',
    category: 'Iluminação',
    environment: 'Sala de Jantar',
    price: 5200,
    image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=2000&auto=format&fit=crop', // Lustre clássico
    secondaryImages: [],
    isFeatured: false,
  },
  {
    id: '6',
    name: 'Aparador Minimal Oak',
    shortDescription: 'Design minimalista em carvalho americano.',
    fullDescription: 'Linhas retas e pureza formal. O Aparador Minimal Oak serve como base perfeita para obras de arte e decoração no hall de entrada ou corredor. Gavetas com fecho toque.',
    category: 'Aparadores',
    environment: 'Hall de Entrada',
    price: 4100,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=2000&auto=format&fit=crop', // Aparador/Credenza
    secondaryImages: [],
    isFeatured: false,
  }
];

export const initialEnvironments: Environment[] = [
  { 
    id: '1', 
    name: 'Sala de Estar', 
    slug: 'Sala de Estar', 
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop' 
  },
  { 
    id: '2', 
    name: 'Sala de Jantar', 
    slug: 'Sala de Jantar', 
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=2000&auto=format&fit=crop' 
  },
  { 
    id: '3', 
    name: 'Quarto', 
    slug: 'Quarto', 
    image: 'https://images.unsplash.com/photo-1616594039964-40891a909543?q=80&w=2000&auto=format&fit=crop' 
  },
  { 
    id: '4', 
    name: 'Escritório', 
    slug: 'Escritório', 
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2000&auto=format&fit=crop' 
  },
  { 
    id: '5', 
    name: 'Área Gourmet', 
    slug: 'Área Gourmet', 
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2000&auto=format&fit=crop' 
  },
  { 
    id: '6', 
    name: 'Hall de Entrada', 
    slug: 'Hall de Entrada', 
    image: 'https://images.unsplash.com/photo-1484154218962-a1c429d4c929?q=80&w=2000&auto=format&fit=crop' 
  },
];