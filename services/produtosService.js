export async function getProdutosPorCaracteristica(caracteristica) {
  try {
    const res = await fetch(`http://localhost:3000/api/produtos/caracteristica/${caracteristica}`);
    const data = await res.json();
    console.log('Dados recebidos do backend:', data); // <- aqui
    return data;
  } catch (err) {
    console.error('Erro ao buscar produtos:', err);
    return [];
  }
}