const times = [
    {
        id: 1,
        nome: "Athletico Paranaense",
        descricao: "Clube paranaense com uma história de sucesso recente e uma torcida apaixonada, conhecido por sua rivalidade com o Coritiba.",
        estadio: "Arena da Baixada",
        cidade: "Curitiba",
        tecnico: "Odair Hellmann",
        titulos: 1,
        imagem: "https://atleticopr-www-static.s3.sa-east-1.amazonaws.com/wp-content/uploads/2022/08/01071929/Escudo-1600.jpg",
        fotos: [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/04/4a/13/iluminacao-noturna-da.jpg?w=900&h=500&s=1",
            "https://santaportal.com.br/wp/wp-content/uploads/2026/02/Torcida.jpg",
            "https://s2-ge.glbimg.com/Zz5_afcZX9rhWuNTiH87iD__010=/66x110:1200x1064/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/b/Z/6oPeW9SKKPDGxuBCpjMA/camisaathletico2026-02.png"
        ]
    },
    {
        id: 2,
        nome: "Atlético Mineiro",
        descricao: "Clube mineiro com grande tradição e uma torcida apaixonada em Belo Horizonte.",
        estadio: "Arena MRV",
        cidade: "Belo Horizonte",
        tecnico: "Eduardo Domínguez",
        titulos: 3,
        imagem: "https://static.gazetaesportiva.com/uploads/imagem/2020/08/28/atletico-mineiro-capa-1024x576.jpg",
        fotos: [
            "https://atletico.com.br/wp-content/uploads/2024/02/53330876390_7adb610753_k.jpg",
            "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/03/torcida_atletico_mg-e1711662603190.jpg?w=1024",
            "https://maquinadoesporte.com.br/wp-content/uploads/2026/01/Atletico_MG_Nike_Uniforme.jpg"
        ]
    },
    {
        id: 3,
        nome: "Bahia",
        descricao: "Clube baiano com uma história rica e uma torcida apaixonada, conhecido por sua tradição e rivalidades.",
        estadio: "Fonte Nova",
        cidade: "Salvador",
        tecnico: "Rogério Ceni",
        titulos: 2,
        imagem: "https://vetores.org/wp-content/uploads/bahia.png",
        fotos: [
            "https://images.adsttc.com/media/images/533f/335d/c07a/80d9/e300/008a/newsletter/Arena_Fonte_Nova_aerea_copyright_David_Campbell_Ag%C3%A0ncia_Faquini_Produ%C3%A1%E2%88%86o_Fotogr%E2%80%A0fica.jpg?1396650822",
            "https://ludopedio.org.br/wp-content/uploads/53023437616_25dee3b2e2_k-1024x683.jpg",
            "https://repositorio-bahia.s3.amazonaws.com/wp-content/uploads/2026/03/17150843/BAHIA-HOME-2026-15-scaled.jpg"
        ]
    },
    {
        id: 4,
        nome: "Botafogo",
        descricao: "Clube carioca com uma história rica e uma torcida apaixonada, conhecido por sua tradição e rivalidades.",
        estadio: "Nilton Santos",
        cidade: "Rio de Janeiro",
        tecnico: "Franclim Carvalho",
        titulos: 3,
        imagem: "https://botafogofrsocialolimpico.com.br/wp-content/uploads/2024/06/5.png",
        fotos: [
            "https://odia.ig.com.br/_midias/jpg/2021/06/07/estadio_nilton_santos-22101254.jpg",
            "https://i.fogaonet.com/ykKLtwxq8VIqm5_IXmY16FoWJ4pXUjUSwQFJFBK4syU/rs:fill:795:448:0/g:ce/f:webp/q:75/plain/static/uploads/2026/01/o-crdito-da-foto-obrigatrio-vtor-silvabotafogo-55059543763-o.jpg",
            "https://s2-oglobo.glbimg.com/zQYo8iUJOK7-PFmi5O0P798LiC8=/0x0:1250x618/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2025/R/b/tUYYCTTcqzyxhNvCz4jA/3bef998da84c43bfa2b3656cb0ba61b3.png"
        ]   
    },
    {
        id: 5,
        nome: "Bragantino",
        descricao: "Clube paulista com uma história recente de sucesso e uma torcida apaixonada, conhecido por sua rivalidade com o Guarani.",
        estadio: "Nabi Abi Chedid",
        cidade: "Bragança Paulista",
        tecnico: "Vagner Mancini",
        titulos: 0,
        imagem: "https://lncimg.lance.com.br/cdn-cgi/image/width=1280,height=720,quality=75,fit=cover,format=webp/uploads/2020/01/01/5e0cb6b608f8d.jpeg",
        fotos: [
            "https://maquinadoesporte.com.br/wp-content/uploads/2025/05/Bragantino_estadio.jpg",
            "https://jpimg.com.br/uploads/2019/05/D57Nd6rW4AA7mcT-1024x682.jpg",
            "https://s2-ge.glbimg.com/KmreoLN-vGeV9me3iX-IRv4NOP4=/0x0:2000x3000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/F/z/zW92i0SSGFod3qnvGyjg/braga1.png"
        ]   
    },
    {
        id: 6,
        nome: "Chapecoense",
        descricao: "Clube catarinense com uma história recente de superação e uma torcida apaixonada, conhecido por sua rivalidade com o Avaí.",
        estadio: "Arena Condá",
        cidade: "Chapecó",
        tecnico: "Fábio Matias",
        titulos: 0,
        imagem: "https://static.ndmais.com.br/2023/09/wnpmxnblxuqvmpxydfu5mo-970-80jpg.png",
        fotos: [
            "https://chapecoense.com/wp-content/uploads/2022/07/arena-conda.jpg",
            "https://chapecoense.com/wp-content/uploads/2025/11/IMG_7966.jpg",
            "https://chapecoense.com/wp-content/uploads/2025/12/nova-camisa-of1.png"
        ]
    },
    {
        id: 7,
        nome: "Corinthians",
        descricao: "Clube paulista com uma das maiores torcidas do país e uma história repleta de conquistas.",
        estadio: "Neo Química Arena",
        cidade: "São Paulo",
        tecnico: "Fernando Diniz",
        titulos: 7,
        imagem: "https://static.gazetaesportiva.com/uploads/imagem/2020/04/22/WhatsApp-Image-2020-04-21-at-14.38.50.jpeg",
        fotos: [
            "https://lncimg.lance.com.br/uploads/2024/01/Corinthians-Neo-Quimica-Arena-Itaquera-aspect-ratio-512-320.jpg",
            "https://sportbuzz.com.br/wp-content/uploads/2024/11/imagem_2024-11-24_185230960.png",
            "https://cdn.meutimao.com.br/_upload/forumtopico/2025/12/23/26dbec8c98ae358a7fb198e67499cb81.jpg"
        ]
    },
    {
        id: 8,
        nome: "Coritiba",
        descricao: "Clube paranaense com uma história rica e uma torcida apaixonada, conhecido por sua tradição e rivalidades.",
        estadio: "Couto Pereira",
        cidade: "Curitiba",
        tecnico: "Fernando Seabra",
        titulos: 1,
        imagem: "https://logodetimes.com/wp-content/uploads/coritiba.png",
        fotos: [
            "https://s2-ge.glbimg.com/3gb_pHpGFgEtELn6e7MSE1pOz64=/0x0:2048x1152/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/D/n/y70gSISPmvr4Gg7j6pCg/f3-rz2bxcaaixky.jpg",
            "https://redecoxa.com.br/wp-content/uploads/2022/04/torcida-coritiba-rede-coxa.jpg",
            "https://s2-ge.glbimg.com/a1MwEfc0tjIUK1HR2ySMzojs70E=/0x0:2008x1339/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/T/N/soS2KdRDyAfuI2ctiCsA/foto-01.jpg"
        ]
    },
    {
        id: 9,
        nome: "Cruzeiro",
        descricao: "Clube mineiro com uma história de sucesso e uma torcida apaixonada, conhecido por sua rivalidade com o Atlético Mineiro.",
        estadio: "Mineirão",
        cidade: "Belo Horizonte",
        tecnico: "Arthur Jorge",
        titulos: 4,
        imagem: "https://s2-oglobo.glbimg.com/5o5uTcsVwWbGK_TAUSf3QD9AL4E=/0x0:1280x720/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/p/p/WMmFPVTVKipAdNu6OanQ/cruzeiro.png",
        fotos: [
            "https://portalbelohorizonte.com.br/sites/default/files/img/galeria-de-fotos/2020-12/mineirao-breno-pataro-_acervo-pbh-356.jpg",
            "https://s2-ge.glbimg.com/pdGuDiQSMZV1MpiWIdGqYNkmiXU=/0x0:3000x1784/924x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2018/02/04/cruxame_9910.jpg",
            "https://marcaspelomundo.com.br/wp-content/uploads/2026/01/Cruzeiro.jpg"
        ]   
    },
    {
        id: 10,
        nome: "Flamengo",
        descricao: "Um dos maiores clubes do futebol brasileiro, com tradição em títulos nacionais e internacionais.",
        estadio: "Maracanã",
        cidade: "Rio de Janeiro",
        tecnico: "Leonardo Jardim",
        titulos: 8,
        imagem: "https://www.museuflamengo.com.br/escudos_flamengo_final.png",
        fotos: [
            "https://blog.archtrends.com/wp-content/uploads/2025/07/estadiodomaracanaabre-1200x900.jpeg",
            "https://colunadofla.com/wp-content/uploads/2023/06/torcida-flamengo-x-fluminense-maracana-copa-do-brasil.jpg",
            "https://lncimg.lance.com.br/uploads/2026/01/camisa_flamengo6-scaled-aspect-ratio-512-320.jpeg"
        ]
    },
    {
        id: 11,
        nome: "Fluminense",
        descricao: "Time carioca com tradição e uma base jovem que vem se destacando no cenário brasileiro.",
        estadio: "Maracanã",
        cidade: "Rio de Janeiro",
        tecnico: "Luis Zubeldía",
        titulos: 4,
        imagem: "https://pbs.twimg.com/media/GiY7vqwXwAABM11.png",
        fotos: [
            "https://blog.archtrends.com/wp-content/uploads/2025/07/estadiodomaracanaabre-1200x900.jpeg",
            "https://lncimg.lance.com.br/uploads/2023/04/19/644046fb616e0.jpeg",
            "https://s3.amazonaws.com/assets-fluminense/uploads%2F1767272177997-WhatsApp+Image+2026-01-01+at+09.54.18.jpeg"
        ]
    },
    {
        id: 12,
        nome: "Grêmio",
        descricao: "Equipe gaúcha com grande presença no futebol nacional e forte história em competições sul-americanas.",
        estadio: "Arena do Grêmio",
        cidade: "Porto Alegre",
        tecnico: "Luís Castro",
        titulos: 2,
        imagem: "https://jpimg.com.br/uploads/2023/04/conheca-a-historia-do-gremio-no-brasileirao-1024x683.jpg",
        fotos: [
            "https://lncimg.lance.com.br/cdn-cgi/image/width=1280,height=720,quality=75,fit=cover,format=webp/uploads/2025/05/arena_gremio-aspect-ratio-512-320.jpeg",
            "https://upload.wikimedia.org/wikipedia/commons/a/aa/Lg-noticias-dia-de-gra-mio--de-abertura-da-arquibancada-e-de-fazer-a-arena-inteira-cantar-com-a-norte-32701.jpg",
            "https://live.staticflickr.com/65535/55152877503_0270c90ca8_c.jpg"
        ]
    },
    {
        id: 13,
        nome: "Internacional",
        descricao: "Clube gaúcho com uma história de sucesso e uma torcida apaixonada, conhecido por sua rivalidade com o Grêmio.",
        estadio: "Beira-Rio",
        cidade: "Porto Alegre",
        tecnico: "Paulo Pezzolano",
        titulos: 3,
        imagem: "https://vetores.org/wp-content/uploads/internacional.png",
        fotos: [
            "https://static.internacional.com.br/cms/assets/IMG_20251229_WA_0006_b3944471b6.jpg",
            "https://s2-ge.glbimg.com/L3FIe1VMkmgiPk2xNYg9PLd_uFw=/4160x0/filters:format(jpeg)/https://i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/H/z/oTzwPfSLq5Op0biunp0Q/torcida-inter.jpeg",
            "https://static.internacional.com.br/cms/assets/Pro_Capture_One_0839_1_4a16ba148f.jpg"
        ]   
    },
    {
        id: 14,
        nome: "Mirassol",
        descricao: "Clube paulista com uma história recente de sucesso e uma torcida apaixonada, conhecido por sua rivalidade com o São Caetano.",
        estadio: "José Maria de Campos Maia",
        cidade: "Mirassol",
        tecnico: "Rafael Guanaes",
        titulos: 0,
        imagem: "https://logowik.com/content/uploads/images/mirassol-fc1742857468.logowik.com.webp",
        fotos: [
            "https://projetoaluminio.com.br/wp-content/uploads/2025/09/e51b9d_5a60d72469334567b4839ddbd4214012mv2.jpg",
            "https://s2-ge.glbimg.com/k7F6MkqWdJ5mc4nxALtGp3lshTs=/0x0:1080x864/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/K/6/dRRGoBQ0CWjnUvHG1WBw/amanha-e-dia-de-ter-essa-energia-no-maiao-jp-pinheiro-agencia-mirassol-serleao-nossar.jpg",
            "https://s2-ge.glbimg.com/WlfrGNfuQQnXZKo533dN9--9x1A=/1856x0/filters:format(jpeg)/https://i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/W/u/lZDrcATxeGttFVDwBU1Q/hf-20260207-151516-70ba31a1-9239-49b4-9949-e91391123828.png"
        ]   
    },
    {
        id: 15,
        nome: "Palmeiras",
        descricao: "Equipe paulistana com muitas conquistas recentes e um dos clubes mais organizados do país.",
        estadio: "Allianz Parque",
        cidade: "São Paulo",
        tecnico: "Abel Ferreira",
        titulos: 12,
        imagem: "https://apostagolos.com/wp-content/uploads/2022/06/Palmeiras.jpg",
        fotos: [
            "https://arenapalmeiras.com/content-wp/uploads/2016/11/arena-palmeiras.jpg",
            "https://dol.com.br/img/Artigo-Destaque/910000/Torcida-do-Palmeiras_00918267_0_.jpg?xid=3100883",
            "https://www.estadao.com.br/resizer/v2/5A2FK5TDOFCYHH75WI5IF5N6C4.jpg?quality=80&auth=1408e696968126e0579c79af6f7781d3aceddef95da576313886b316859055a4&width=1200&height=675&smart=true"
        ]
    },
    {
        id: 16,
        nome: "Remo",
        descricao: "Clube capixaba com uma história marcante e uma torcida leal, conhecido por sua tradição e rivalidades.",
        estadio: "Estádio Municipal de Araraquara",
        cidade: "Araraquara",
        tecnico: "Léo Condé",
        titulos: 0,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw1zcDv5tzEJ9RuniM8P_DQdWYIp2DSTd9DQ&s",
        fotos: [
            "https://futdados.com/wp-content/uploads/2020/09/mang.jpg",
            "https://s2-ge.glbimg.com/h-BLMpp2tlmlo9IB3pV2zq3SJMQ=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/s/D/UPYNB0Qki7wrmES5Axww/fenomeno-azul.jpg",
            "https://www.remo100porcento.com/arquivos/2025/08/camisa3volt2025.jpg"
        ]
    },
    {
        id: 17,
        nome: "Santos",
        descricao: "Clube paulista com uma história rica e uma torcida apaixonada, conhecido por sua tradição e rivalidades.",
        estadio: "Vila Belmiro",
        cidade: "Santos",
        tecnico: "Cuca",
        titulos: 8,
        imagem: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/12/Design-sem-nome-6.jpg?w=1200&h=1200&crop=1",
        fotos: [
            "https://media.santosfc.com.br/wp-content/uploads/2022/08/Foto-tu.drone-4-1.jpeg",
            "https://santaportal.com.br/wp/wp-content/uploads/2022/12/Torcida-organizada-do-Santos-convoca-torcedores-para-demonstrar-apoio-na.jpg",
            "https://static.gazetaesportiva.com/uploads/2026/03/santos-novacamisa_120326.webp"
        ] 
    },
    {
        id: 18,
        nome: "São Paulo",
        descricao: "Clube tradicional do futebol brasileiro, com grande torcida e estádio icônico.",
        estadio: "Morumbi",
        cidade: "São Paulo",
        tecnico: "Dorival Júnior",
        titulos: 6,
        imagem: "https://lncimg.lance.com.br/cdn-cgi/image/width=1280,height=720,quality=75,fit=cover,format=webp/uploads/2024/09/sao-paulo-escudo_7510_1280x960-aspect-ratio-512-320.jpg",
        fotos: [
            "https://upload.wikimedia.org/wikipedia/commons/7/77/Est%C3%A1dio_do_Morumbi.jpg",
            "https://s2-ge.glbimg.com/pypYwZQTW-lmH8Y8m4NUhk8KafE=/0x0:4928x3280/924x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2019/04/06/rib8712.jpg",
            "https://jogada10.com.br/wp-content/uploads/2026/02/SaveClip.App_629661413_185667016.jpg"
        ]
    },
    {
        id: 19,
        nome: "Vasco da Gama",
        descricao: "Clube carioca com uma história rica e uma torcida apaixonada, conhecido por sua tradição e rivalidades.",
        estadio: "São Januário",
        cidade: "Rio de Janeiro",
        tecnico: "Renato Gaúcho",
        titulos: 4,
        imagem: "https://apostagolos.com/wp-content/uploads/2022/06/Vasco-Da-Gama-1024x614.jpg",
        fotos: [
            "https://upload.wikimedia.org/wikipedia/commons/8/89/Est%C3%A1dio_de_S%C3%A3o_Janu%C3%A1rio.jpg",
            "https://thefootball.com.br/wp-content/uploads/2025/04/Vasco-Torcida-Vasco.jpg",
            "https://imgnike-a.akamaihd.net/1300x1300/098332IDA3.jpg"
        ]
    },
    {
        id: 20,
        nome: "Vitória",
        descricao: "Clube baiano com uma história rica e uma torcida apaixonada, conhecido por sua tradição e rivalidades.",
        estadio: "Barradão",
        cidade: "Salvador",
        tecnico: "Jair Ventura",
        titulos: 0,
        imagem: "https://cdn.freebiesupply.com/logos/thumbs/2x/esporte-clube-vitoria-de-salvador-ba-logo.png",
        fotos: [
            "https://meuvitoria.com.br/wp-content/uploads/2022/07/image-10-20.jpg",
            "https://s2-ge.glbimg.com/CcoPfSjqofQM8x14GNNLxKfFNAc=/0x0:1600x900/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/9/G/w5X3BDS5yITm2cJ2AYOQ/whatsapp-image-2024-10-26-at-16.47.48.jpeg",
            "https://api.metro1.com.br/noticias/181167,vitoria-lanca-uniforme-principal-para-temporada-2026-3.jpg"
        ]
    }

];

const timesDestaque = times.filter(time => 
    ["Flamengo", "Palmeiras", "Cruzeiro", "Fluminense", "Corinthians"].includes(time.nome)
);

function renderCarousel() {
    const carouselContainer = document.getElementById("carousel-content");
    const indicatorsContainer = document.getElementById("carousel-indicators");
    if (!carouselContainer || !indicatorsContainer) return;

    carouselContainer.innerHTML = timesDestaque.map((time, index) => `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${time.imagem}" class="d-block w-100" alt="${time.nome}">
            <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                <h5>${time.nome}</h5>
                <p>${time.descricao}</p>
                <a href="detalhes.html?id=${time.id}" class="btn btn-light">Conheça o time</a>
            </div>
        </div>
    `).join('');

    indicatorsContainer.innerHTML = timesDestaque.map((_, index) => `
        <button type="button" data-bs-target="#carouselTimes" data-bs-slide-to="${index}" class="${index === 0 ? 'active' : ''}" aria-current="${index === 0 ? 'true' : 'false'}" aria-label="Slide ${index + 1}"></button>
    `).join('');
}

function renderCards() {
    const cardsContainer = document.getElementById("cards-container");
    if (!cardsContainer) return;

    cardsContainer.innerHTML = times.map(time => `
        <div class="card h-100 shadow">
            <img src="${time.imagem}" class="card-img-top" alt="${time.nome}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${time.nome}</h5>
                <p class="card-text">${time.descricao}</p>
                <a href="detalhes.html?id=${time.id}" class="btn btn-dark mt-auto">Saiba Mais</a>
            </div>
        </div>
    `).join('');
}

function renderDetalhes() {
    const detalhesContainer = document.getElementById("detalhes-time");
    const fotosContainer = document.getElementById("fotos-container");
    if (!detalhesContainer || !fotosContainer) return;

    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));
    const time = times.find(t => t.id === id);

    if (!time) {
        detalhesContainer.innerHTML = `<div class="alert alert-warning">Time não encontrado.</div>`;
        fotosContainer.innerHTML = `<p class="text-muted">Nenhuma foto disponível.</p>`;
        return;
    }

    detalhesContainer.innerHTML = `
        <div class="row align-items-center">
            <div class="col-md-6 mb-4">
                <img src="${time.imagem}" alt="${time.nome}">
            </div>
            <div class="col-md-6">
                <div class="info-box">
                    <h1>${time.nome}</h1>
                    <p>${time.descricao}</p>
                    <ul class="list-group">
                        <li class="list-group-item"><strong>Estádio:</strong> ${time.estadio}</li>
                        <li class="list-group-item"><strong>Cidade:</strong> ${time.cidade}</li>
                        <li class="list-group-item"><strong>Técnico:</strong> ${time.tecnico}</li>
                        <li class="list-group-item"><strong>Títulos Brasileiros:</strong> ${time.titulos}</li>
                        <li class="list-group-item"><strong>ID:</strong> ${time.id}</li>
                    </ul>
                </div>
            </div>
        </div>
    `;

    fotosContainer.innerHTML = time.fotos.map(foto => `
        <div class="col-md-4 mb-4">
            <div class="card foto-card shadow-sm">
                <img src="${foto}" class="card-img-top" alt="Foto de ${time.nome}">
            </div>
        </div>
    `).join('');
}

window.addEventListener("DOMContentLoaded", () => {
    renderCarousel();
    renderCards();
    renderDetalhes();
});
