import StarRating from "../components/StarRating";
import Range from "../components/Range";

// opções de classificação da lista
export const sortOptions = [
  { name: "Ordem alfabética", href: "#", current: false },
  {
    name: "Data: Atual para Antigo",
    href: "#",
    current: false,
    text: "Preço:",
  },
  { name: "Data: Antigo para Atual", href: "#", current: false },
];

// filtro de funções de filtragem por preço do serviço e avaliação dos clientes ( Não Implementado)
export const filterOptions = [
  {
    id: "priceRange",
    name: "Intervalo de Preço",
    Component: Range,
  },
  {
    id: "rating",
    name: "Popularidade",
    Component: StarRating,
  },
];
