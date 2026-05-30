# Bistrô Petiscaria — Landing Page

Interface premium para restaurante. Desenvolvida com HTML, CSS e JS puro, seguindo design mobile-first.

---

## Estrutura de Arquivos

```
bistro-petiscaria/
├── index.html              ← Página principal
├── css/
│   ├── variables.css       ← Design tokens (cores, tipografia, espaçamento)
│   ├── base.css            ← Reset, utilitários, classes globais
│   ├── hero.css            ← Hero section
│   ├── components.css      ← Navbar, cards, botões, seções
│   └── responsive.css      ← Breakpoints (640px, 1024px, 1440px)
└── js/
    ├── data.js             ← Dados mockados (pronto para integração)
    └── main.js             ← Lógica de UI (navbar, menu, scroll, build)
```

---

## Identidade Visual

| Token            | Valor     |
|------------------|-----------|
| Fundo principal  | `#0D0D0D` |
| Superfícies      | `#181818` |
| Destaques        | `#D4A017` |
| Texto principal  | `#F5F5F5` |
| Texto secundário | `#B0B0B0` |
| WhatsApp         | `#25D366` |

**Tipografia:** Bebas Neue (títulos) + Inter (corpo)

---

## Seções

1. **Navbar** — sticky com scroll state, drawer mobile, botão WhatsApp
2. **Hero** — full-height, overlay multicamadas, CTAs, animação de entrada
3. **Eventos** — scroll horizontal, cards com badge de data
4. **Cardápio** — tabs por categoria, grid responsivo, botão pedido WhatsApp
5. **Galeria** — grid assimétrico com hover
6. **Informações** — endereço, horários, contato
7. **Mapa** — Google Maps embed integrado ao design
8. **Footer** — minimalista com redes sociais

---

## Integração com Google Sheets

O arquivo `js/data.js` exporta um objeto `DATA` com toda a estrutura de conteúdo.

Para integrar com Google Sheets via API:

```javascript
// Substituir no início de main.js:
async function loadData() {
  const SHEET_ID = 'SEU_ID_AQUI';
  const API_KEY  = 'SUA_CHAVE_AQUI';
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A1:Z100?key=${API_KEY}`;
  
  const res  = await fetch(url);
  const json = await res.json();
  
  // Mapear linhas para o formato de DATA
  // ...
}
```

### Estrutura sugerida de abas no Sheets:
- `Eventos` — id, titulo, data_dia, data_mes, data_ano, horario, tag, imagem
- `Cardapio` — id, categoria, nome, descricao, preco, imagem
- `Galeria` — id, imagem, alt
- `Config` — telefone, whatsapp, endereco, horarios

---

## Responsividade

| Breakpoint | Layout |
|------------|--------|
| 0–639px    | Mobile (1 coluna, scroll horizontal para eventos) |
| 640–1023px | Tablet (2-3 colunas) |
| 1024px+    | Desktop (nav links visíveis, 4+ colunas) |
| 1440px+    | Wide (5 colunas menu, galeria expandida) |

---

## Performance

- Imagens com `loading="lazy"` (exceto hero com `fetchpriority="high"`)
- CSS sem dependências externas (exceto Google Fonts)
- JS sem frameworks — vanilla puro
- Intersection Observer para scroll reveal (sem scroll events)
- Passive scroll listeners na navbar

---

## Acessibilidade

- Landmarks semânticos (`header`, `nav`, `main`, `section`, `footer`)
- `aria-label` em todas as seções e botões icônicos
- `aria-expanded` no hamburger
- `role="list"` nos containers de cards
- Imagens com `alt` descritivo
- Redução de motion respeitada (`prefers-reduced-motion`)
