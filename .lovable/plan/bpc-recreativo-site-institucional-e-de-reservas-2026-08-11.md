# BPC Recreativo — Site institucional e de reservas

Substituição do conteúdo atual (loja e-commerce) por um site de transporte executivo e viagens, bilíngue (PT/EN), com fluxo de reservas.

## Identidade visual

- Azul petróleo `#004F6D` (cor principal), Dourado suave `#CFAE60` (destaques/CTA), Branco gelo `#F7F9FA` (fundo), Cinza grafite `#333333` (texto).
- Playfair Display para títulos, Montserrat para textos e botões.
- Estilo de referência Grou/TCH: fotos amplas, seções full-width, muito respiro, cartões sóbrios, microanimações discretas.

## Páginas

1. **Home** — hero com imagem de estrada/van executiva e CTA "Solicitar reserva"; três cards em destaque: Transfer Executivo, Viagens para Salvador, Viagens para o Litoral; faixa de diferenciais (motoristas credenciados, frota monitorada, atendimento 24h); prévia da galeria; depoimentos; CTA final.
2. **Serviços** — página com detalhe de cada um dos três serviços (descrição, para quem é, o que está incluso) e CTA de reserva pré-selecionando o serviço.
3. **Galeria** — grade de fotos (frota, destinos, equipe) com lightbox.
4. **Sobre** — história, missão, números, compromisso com segurança.
5. **Reservas** — formulário completo (ver abaixo).
6. **Contato** — formulário curto, WhatsApp, e-mail, endereço, horário e mapa.

Header fixo com navegação, seletor PT/EN e botão de WhatsApp flutuante em todas as páginas.

## Fluxo de reserva

Como os preços são sob consulta, o fluxo tem duas etapas:

1. **Solicitação** — o cliente preenche: nome, e-mail, telefone/WhatsApp, serviço, origem, destino, data e hora, número de passageiros, bagagens, ida/volta e observações. A solicitação é salva no banco e o cliente vê uma tela de confirmação com o resumo.
2. **Confirmação e pagamento** — a equipe recebe a solicitação por e-mail e responde com o valor; a partir daí o cliente recebe um link de pagamento Stripe. Ao pagar, a reserva passa para "confirmada" e o cliente recebe e-mail de confirmação.

Notificações:
- **E-mail** — confirmação automática de recebimento para o cliente e aviso para a equipe; e-mail de reserva confirmada após pagamento.
- **WhatsApp** — botão que abre a conversa já preenchida com o resumo da reserva (link `wa.me`), sem custo nem verificação de conta business. Se depois você quiser envio automático de mensagens, dá para evoluir para uma integração dedicada.

## Bilíngue (PT/EN)

Todo o texto do site vem de um arquivo de traduções com as duas versões; o seletor no header troca o idioma na hora e a preferência fica salva no navegador. Português como padrão.

## Imagens

Fotos de banco de imagens (Unsplash) para hero, serviços e galeria, escolhidas para combinar com a paleta. Fáceis de substituir depois pelas fotos reais.

## Detalhes técnicos

- Tokens de cor e fontes definidos em `src/index.css` + `tailwind.config`; remoção dos componentes de loja (produtos, carrinho, checkout) e das rotas antigas.
- Lovable Cloud habilitado: tabela `booking_requests` (com RLS — inserção pública pelo formulário, leitura só para a equipe autenticada) e tabela de configuração de status/pagamento.
- Validação com Zod no cliente e na edge function que grava a reserva.
- Pagamentos: Stripe integrado (Lovable Payments), com sessão de checkout gerada por edge function a partir do valor definido pela equipe e webhook atualizando o status da reserva.
- E-mails via Lovable Emails — requer configurar um domínio próprio para envio (ex.: `notify.seudominio.com.br`); até lá o restante funciona normalmente.
- SEO: título e meta description próprios, H1 único por página, alt em imagens, JSON-LD de negócio local.

## Contato

- WhatsApp de reservas: **+55 71 91269417** (usado no botão flutuante, na página de Contato e nos links de resumo da reserva).

## Pendências suas

- E-mail de reservas (para receber as solicitações e enviar confirmações).
- Logo em arquivo (SVG/PNG) — enquanto isso uso o nome em Playfair Display como marca provisória.
- Domínio para envio de e-mails.

## Ordem de execução

1. Design system + layout base (header, footer, i18n, WhatsApp flutuante).
2. Home, Serviços, Galeria, Sobre, Contato.
3. Lovable Cloud + página de Reservas com gravação e confirmação.
4. E-mails automáticos.
5. Stripe para o pagamento após orçamento.
