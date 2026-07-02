// Dados reais do consultório — fonte única da verdade para todo o site.
// Edite este arquivo para atualizar informações em todas as páginas de uma vez.

export const clinic = {
  doctorName: "Dra. Luciana Granado",
  clinicName: "Dra. Luciana Granado & Equipe",
  tagline: "Odontologia Integrada",
  city: "Vila Velha",
  state: "ES",
  address: {
    line1: "Avenida Henrique Moscoso, 1069, Sala 5",
    line2: "Edifício Park Center, Centro, Vila Velha - ES",
    zip: "29100-021",
    country: "Brasil",
    full: "Avenida Henrique Moscoso, 1069, Sala 5, Edifício Park Center, Centro, Vila Velha - ES, 29100-021, Brasil",
    mapsShareUrl: "https://maps.app.goo.gl/",
    mapsEmbedQuery: "Avenida Henrique Moscoso, 1069 - Centro, Vila Velha - ES, 29100-021",
  },
  contact: {
    email: "contato@dralucianagranado.com.br",
    whatsapp: "+5527997631575",
    whatsappDisplay: "+55 27 99763-1575",
    phoneHref: "tel:+5527997631575",
    whatsappHref:
      "https://wa.me/5527997631575?text=Olá, encontrei o site e gostaria de agendar uma avaliação.",
  },
  social: {
    instagram: {
      handle: "@dralucianagranado",
      url: "https://instagram.com/dralucianagranado",
      followers: "Comunidade engajada",
    },
    facebook: {
      handle: "Dra Luciana Granado | Vila Velha ES",
      url: "https://facebook.com/",
    },
  },
  hours: {
    weekdays: "Segunda a sexta · 08:00 – 18:00",
    urgency: "Atendimento de urgência disponível",
  },
  about:
    "Dra. Luciana Granado é uma cirurgiã-dentista altamente qualificada, registrada no CRO-ES 5703, com especialização em Odontologia Integrada. Possui três especializações principais: Endodontia (Tratamento de canal), Ortodontia (Aparelhos dentários) e Implantodontia (Implantes dentários). Além de sua atuação clínica, é Musicoterapeuta oficial e possui experiência anterior como professora de Anatomia e Neurofisiologia. Seu objetivo é proporcionar um atendimento humanizado e seguro, utilizando tecnologia de ponta para garantir os melhores resultados para seus pacientes.",
};

export type Procedure = {
  slug: string;
  name: string;
  short: string;
  description: string;
  image?: string;
};

export const procedures: Procedure[] = [
  {
    slug: "endodontia",
    name: "Endodontia",
    short: "Tratamento de canal com precisão e conforto.",
    description: "Tratamento endodôntico para salvar seu dente com conforto, segurança e tecnologia de ponta.",
    image: "/images/endodontia_before.png",
  },
  {
    slug: "ortodontia",
    name: "Ortodontia",
    short: "Sorriso alinhado e harmonioso.",
    description: "Aparelhos dentários modernos para alinhar seus dentes e criar o sorriso dos seus sonhos.",
    image: "/images/ortodontia_before.png",
  },
  {
    slug: "implantodontia",
    name: "Implantodontia",
    short: "Implantes dentários de alta qualidade.",
    description: "Reabilitação com implantes dentários para restaurar estética, funcionalidade e confiança.",
    image: "/images/implantodontia_before.png",
  },
  {
    slug: "odontologia-integrada",
    name: "Odontologia Integrada",
    short: "Cuidado completo e humanizado.",
    description: "Abordagem integrada que combina diferentes especialidades para resultados excepcionais.",
    image: "/images/dra_luciana_office_high.png",
  },
];

export const cases = [
  { 
    title: "Endodontia", 
    detail: "Tratamento de canal · Dente restaurado com sucesso",
    before: "/images/endodontia_before.png",
    after: "/images/endodontia_after.png"
  },
  { 
    title: "Ortodontia", 
    detail: "Alinhamento dental · Sorriso harmonioso",
    before: "/images/ortodontia_before.png",
    after: "/images/ortodontia_after.png"
  },
  { 
    title: "Implantodontia", 
    detail: "Implante dental · Reabilitação completa",
    before: "/images/implantodontia_before.png",
    after: "/images/implantodontia_after.png"
  },
];

export const specializations = [
  {
    title: "Endodontia",
    description:
      "Tratamento e retratamento de canal com tecnologia rotatória, preservando a estrutura dental original e garantindo conforto ao paciente.",
  },
  {
    title: "Ortodontia",
    description:
      "Aparelhos dentários modernos e técnicas avançadas para alinhar seus dentes e criar um sorriso harmonioso e funcional.",
  },
  {
    title: "Implantodontia",
    description:
      "Implantes dentários de alta qualidade com planejamento preciso, restaurando estética, funcionalidade e confiança.",
  },
  {
    title: "Odontologia Integrada",
    description:
      "Abordagem holística que combina diferentes especialidades para oferecer soluções completas e personalizadas.",
  },
  {
    title: "Musicoterapia",
    description:
      "Integração de técnicas de musicoterapia para criar um ambiente acolhedor e reduzir a ansiedade durante os tratamentos.",
  },
  {
    title: "Atendimento Humanizado",
    description:
      "Cuidado humanizado e seguro, com foco no bem-estar e conforto do paciente em todas as etapas do tratamento.",
  },
];

export const timeline = [
  {
    year: "Formação",
    title: "Graduação em Odontologia",
    description:
      "Base científica sólida e primeiros passos em cirurgia, dentística e atendimento clínico.",
  },
  {
    year: "Especialização",
    title: "Especializações em Endodontia, Ortodontia e Implantodontia",
    description:
      "Aprofundamento técnico em três áreas principais, com foco em conforto do paciente e resultados excepcionais.",
  },
  {
    year: "Docência",
    title: "Professora de Anatomia e Neurofisiologia",
    description:
      "Experiência em ensino, compartilhando conhecimento e contribuindo para a formação de novos profissionais.",
  },
  {
    year: "Musicoterapia",
    title: "Certificação como Musicoterapeuta Oficial",
    description:
      "Integração de musicoterapia ao atendimento odontológico para melhorar a experiência do paciente.",
  },
  {
    year: "Hoje",
    title: "Odontologia Integrada em Vila Velha",
    description:
      "Consultório próprio no coração de Vila Velha, unindo tecnologia, técnica, humanidade e musicoterapia em cada sorriso transformado.",
  },
];

export const testimonials = [
  {
    name: "Paciente de endodontia",
    rating: 5,
    text: "Tratamento de canal tranquilo, sem dor, com explicação clara de cada etapa. Profissionalismo do começo ao fim.",
  },
  {
    name: "Paciente de ortodontia",
    rating: 5,
    text: "Resultado excepcional, acompanhamento atencioso e ambiente muito acolhedor. Recomendo com entusiasmo.",
  },
  {
    name: "Paciente de implante",
    rating: 5,
    text: "Implante perfeito, resultado natural e recuperação tranquila. A Dra. Luciana é excelente em tudo que faz.",
  },
  {
    name: "Paciente ansioso",
    rating: 5,
    text: "Tinha muito medo de dentista, mas a música e o cuidado da Dra. Luciana transformaram minha experiência. Voltarei com confiança.",
  },
];

export const contentArticles = [
  {
    title: "Como cuidar do seu sorriso no dia a dia",
    excerpt:
      "Pequenos hábitos que fazem grande diferença na saúde bucal a longo prazo.",
    category: "Prevenção",
  },
  {
    title: "Endodontia: tudo que você precisa saber sobre tratamento de canal",
    excerpt:
      "Do planejamento à recuperação: entenda cada etapa do procedimento com segurança.",
    category: "Endodontia",
  },
  {
    title: "Ortodontia moderna: alinhando seu sorriso com conforto",
    excerpt:
      "Conheça as opções de aparelhos e técnicas que transformam sorrisos.",
    category: "Ortodontia",
  },
  {
    title: "Implantes dentários: recuperando confiança e funcionalidade",
    excerpt:
      "Tudo sobre implantes: planejamento, procedimento e cuidados pós-operatório.",
    category: "Implantodontia",
  },
];
