const app = Vue.createApp({
  data() {
    return {
      tela: 'home',
      menuAberto: false,
      busca: '',
      email: '',
      erro: false,
      carrinho: 0,
      qtd: 1,
      slide: 0,
      fotoAtual: 0,
      opcao: 0,

      nav: ['Venda na Amazon', 'Chega em 15 min', 'Ofertas do Dia', 'Mais Vendidos', 'Games', 'Livros', 'Música', 'Casa', 'Eletrônicos', 'Brinquedos e Jogos'],

      slides: [
        { titulo: 'Jovem Sherlock', sub: 'Assista Agora', img: 'img/slide1.jpg' },
        { titulo: 'Ofertas do Dia', sub: 'Aproveite', img: 'img/slide2.jpg' },
        { titulo: 'Ofertas da Semana', sub: 'Veja mais', img: 'img/slide3.jpg' }
      ],

      menu: [
        { titulo: 'Destaques', links: ['Mais Vendidos', 'Novidades na Amazon', 'Produtos em alta'] },
        { titulo: 'Conteúdo digital e dispositivos', links: ['Amazon Fire TV', 'Amazon Music', 'Prime Video', 'Aplicativos Amazon', 'Dispositivos Kindle e eBooks', 'Echo e Alexa', 'Audiolivros Audible'] },
        { titulo: 'Comprar por categoria', links: ['Alimentos e Bebidas', 'Automotivo', 'Bebês', 'Beleza e Cuidados Pessoais'] }
      ],

      cards: [
        {
          titulo: 'Ofertas para aproveitar a Páscoa',
          link: 'Ver mais',
          itens: [
            { nome: 'Ovos de chocolate', img: 'img/ovo.png' },
            { nome: 'Chocolates', img: 'img/mms.png' },
            { nome: 'Personagens', img: 'img/personagens.png' },
            { nome: 'Kits Presenteáveis', img: 'img/kit.png' }
          ]
        },
        {
          titulo: 'Ofertas melhores avaliadas',
          link: 'Veja mais',
          itens: [
            { nome: 'Micro-ondas', img: 'img/micro.png' },
            { nome: 'Ventiladores', img: 'img/ventilador.png' },
            { nome: 'Panelas', img: 'img/panelas.png' },
            { nome: 'Fones', img: 'img/fone.png' }
          ]
        },
        {
          titulo: 'Eleve sua rotina de beleza',
          link: 'Veja mais',
          itens: [
            { nome: 'Maquiagem Premium', img: 'img/maquiagem.png' },
            { nome: 'Skincare Premium', img: 'img/skincare.png' },
            { nome: 'Fragrâncias Premium', img: 'img/perfume.png' },
            { nome: 'Cabelo Profissional', img: 'img/cabelo.png' }
          ]
        }
      ],

      pascoa: ['img/lacta1.png', 'img/lacta2.png', 'img/ovos.png', 'img/ovo.png', 'img/mms.png', 'img/kit.png', 'img/pascoa.png'],
      cozinha: ['img/talheres.png', 'img/acucareiro.png', 'img/espatula.png', 'img/suporte.png', 'img/scala.png', 'img/omo.png'],

      subnav: ['Games e Consoles', 'Ofertas', 'Playstation 4', 'Xbox One', 'Nintendo Switch', 'Acessórios', 'SteelBooks'],
      fotos: ['img/sw1.png', 'img/sw2.png', 'img/sw3.png', 'img/sw4.png', 'img/sw5.png', 'img/sw6.png'],
      opcoes: ['Mario Kart World [CÓDIGO DOWNLOAD]', 'Mario Kart World [JOGO INTEGRADO]', 'Pokémon Legends: Z-A [JOGO INTEGRADO]', 'Standard'],

      relacionados: [
        { nome: 'Donkey Kong Bananza - Nintendo Switch 2', marca: 'Nintendo', img: 'img/donkey.png', preco: '329,90' },
        { nome: 'Console Nintendo Switch Lite Turquesa', marca: 'Nintendo', img: 'img/lite.png', preco: '1.899,00' },
        { nome: 'Console Nintendo Switch Sem Sistema Operacional', marca: 'Nintendo', img: 'img/sw2.png', preco: '439,90' }
      ],

      detalhes: [
        { nome: 'Idioma', valor: 'Português' },
        { nome: 'Dimensões da embalagem', valor: '22,2 x 21,9 x 10,9 cm; 1,61 quilogramas' },
        { nome: 'Certificação', valor: '00556-25-04083' },
        { nome: 'Data de lançamento', valor: '5 junho 2025' },
        { nome: 'ASIN', valor: 'B0F67B2D45' },
        { nome: 'País de origem', valor: 'Brasil' },
        { nome: 'Ranking dos mais vendidos', valor: 'Nº 10 em Games e Consoles | Nº 1 em Consoles do Nintendo Switch 2' }
      ],

      barras: [
        { estrelas: 5, porcentagem: 85 },
        { estrelas: 4, porcentagem: 9 },
        { estrelas: 3, porcentagem: 3 },
        { estrelas: 2, porcentagem: 1 },
        { estrelas: 1, porcentagem: 2 }
      ],

      rodape: [
        { titulo: 'Conheça-nos', links: ['Sobre a Amazon', 'Informações corporativas', 'Carreiras', 'Comunicados à imprensa', 'Comunidade', 'Acessibilidade', 'Amazon Science'] },
        { titulo: 'Ganhe dinheiro conosco', links: ['Venda na Amazon', 'Proteja e construa a sua marca', 'Forneça para a Amazon', 'Publique seus livros', 'Seja um associado', 'Anuncie seus produtos'] },
        { titulo: 'Pagamento', links: ['Meios de Pagamento', 'Compre com Pontos', 'Cartão de crédito Amazon'] },
        { titulo: 'Deixe-nos ajudar você', links: ['Sua conta', 'Frete e prazo de entrega', 'Devoluções e reembolsos', 'Gerencie seu conteúdo e dispositivos', 'Recalls e alertas de segurança do produto', 'Ajuda'] }
      ]
    }
  },

  mounted() {
    setInterval(() => this.proximo(), 5000)
  },

  methods: {
    proximo() {
      this.slide = (this.slide + 1) % this.slides.length
    },

    anterior() {
      this.slide = (this.slide - 1 + this.slides.length) % this.slides.length
    },

    abrirPagina(item) {
      if (item == 'Games') {
        this.tela = 'produto'
      } else {
        this.tela = 'home'
      }
    },

    pesquisar() {
      if (this.busca != '') {
        alert('Pesquisando por: ' + this.busca)
      }
    },

    continuar() {
      if (this.email == '') {
        this.erro = true
        return
      }
      this.erro = false
      this.tela = 'home'
    },

    adicionar() {
      this.carrinho += this.qtd
    },

    comprar() {
      alert('Compra realizada!')
    },

    voltarAoTopo() {
      window.scrollTo(0, 0)
    }
  }
})

app.mount('#app')
