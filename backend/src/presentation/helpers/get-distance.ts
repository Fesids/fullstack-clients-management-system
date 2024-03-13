/*

  função para calcular a distância entre um ponto inicial e um ponto final tendo como base um plano cartesiano em formato de globo

  ** lat1 e lon1 = coordenadas do ponto de origem
  ** lat2 e lon2 = coordenadas do ponto final
  *** unit =  unidade de media, sendo:
  ::::::::::::: "M" para milhas
  ::::::::::::: "k" para kilometros
  ::::::::::::: "N" para milhas nauticas

*/

export function getDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
  unit: string
) {
  // checando uma possível redundância nos parâmetros inseridos
  if (lat1 == lat2 && lon1 == lon2) {
    return 0;
  } else {
    // obtendo os radiandos
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;

    // obetendo o angulo teta (medidada formada pelo angulo desconhecido do triangulo que obtemos atráves dos radianos )
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;

    // distância bruta sem conversão de medidas
    var dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }

    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") {
      dist = dist * 1.609344;
    }
    if (unit == "N") {
      dist = dist * 0.8684;
    }
    return dist;
  }
}
