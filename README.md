# Frontend - Projeto Landing Page

Este é o frontend para uma landing page moderna, construída com Next.js, TypeScript e Tailwind CSS. O projeto inclui funcionalidades como formulário de contato com envio de e-mail, alertas animados e design responsivo.

## Funcionalidades

*   **Design Responsivo**: Adaptável a diferentes tamanhos de tela (desktop, tablet, mobile).
*   **Formulário de Contato**: Permite que os usuários enviem mensagens, que são encaminhadas por e-mail para um destinatário configurado.
    *   Feedback visual (sucesso/erro) ao enviar o formulário.
*   **Alertas Animados**: Componente de alerta reutilizável (`alert.tsx`) com animações (usando Framer Motion) para exibir mensagens de sucesso, erro ou informativas.
*   **Botão Flutuante do WhatsApp**: Um botão (`whatsappbutton.tsx`) fixo no canto inferior direito para fácil contato via WhatsApp.
*   **Menu de Navegação Responsivo**: Barra de navegação (`navbar.tsx`) com um menu lateral (drawer) para dispositivos móveis.
*   **Rodapé Padrão**: Componente de rodapé (`footer.tsx`).
*   **Tipagem Estática**: Desenvolvido com TypeScript para maior robustez e manutenibilidade.
*   **Estilização Moderna**: Utiliza Tailwind CSS para uma estilização rápida e consistente.

## Tecnologias Utilizadas

*   **Next.js 15.x** (com App Router)
*   **React 18.x**
*   **TypeScript**
*   **Tailwind CSS**
*   **Framer Motion**: Para animações.
*   **Nodemailer**: Utilizado no backend (API Route) para o envio de e-mails do formulário de contato.
*   **Lucide Icons**: Para iconografia.

## Configuração e Instalação

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/ArthurProjectCorrea/frontend-project-landing_page.git
    cd frontend-project-landing_page/frontend
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    ```

## Variáveis de Ambiente

Para o funcionamento correto do envio de e-mails pelo formulário de contato, você precisará configurar as variáveis de ambiente. Crie um arquivo chamado `.env.local` na raiz da pasta `frontend` do projeto e adicione as seguintes variáveis:

```
# .env.local

# Configurações do Servidor de E-mail (Exemplo para Gmail)
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=465
EMAIL_SERVER_SECURE=true
EMAIL_SERVER_USER=seu-email@gmail.com
EMAIL_SERVER_PASSWORD=sua-senha-de-app-de-16-digitos # Se usar Gmail com 2FA, gere uma "Senha de App"

# E-mail que aparecerá como remetente
EMAIL_FROM=seu-email@gmail.com

# E-mail que receberá as mensagens do formulário
EMAIL_TO=email-de-destino@example.com
```

**Onde obter as chaves:**

*   **`EMAIL_SERVER_HOST`, `EMAIL_SERVER_PORT`, `EMAIL_SERVER_SECURE`**: Fornecidos pelo seu provedor de e-mail (Gmail, Outlook, etc.).
    *   Para **Gmail**:
        *   `EMAIL_SERVER_HOST`: `smtp.gmail.com`
        *   `EMAIL_SERVER_PORT`: `465` (para SSL) ou `587` (para TLS)
        *   `EMAIL_SERVER_SECURE`: `true` (para porta 465 ou 587 com STARTTLS)
    *   Para **Hotmail/Outlook**:
        *   `EMAIL_SERVER_HOST`: `smtp.office365.com`
        *   `EMAIL_SERVER_PORT`: `587` (para STARTTLS)
        *   `EMAIL_SERVER_SECURE`: `true` (para STARTTLS na porta 587, algumas bibliotecas podem requerer `false` e lidar com STARTTLS internamente)
*   **`EMAIL_SERVER_USER`**: Seu endereço de e-mail.
*   **`EMAIL_SERVER_PASSWORD`**:
    *   **Gmail**: Se você usa autenticação de dois fatores (2FA), você **precisa** gerar uma "Senha de App" específica para este aplicativo nas configurações de segurança da sua conta Google. Caso contrário (não recomendado), você pode precisar ativar "Acesso a app menos seguro".
    *   **Hotmail/Outlook**: Se você usa verificação em duas etapas, gere uma "senha de aplicativo" nas configurações de segurança da sua conta Microsoft.
*   **`EMAIL_FROM`**: O endereço de e-mail que aparecerá como remetente.
*   **`EMAIL_TO`**: O endereço de e-mail que receberá as mensagens enviadas através do formulário.

**Importante**: O arquivo `.env.local` não deve ser enviado para o repositório Git. Ele já está incluído no `.gitignore`.

## Rodando o Projeto

1.  **Servidor de Desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    # ou
    pnpm dev
    ```
    Abra http://localhost:3000 no seu navegador para ver o resultado.

2.  **Build de Produção:**
    ```bash
    npm run build
    ```

3.  **Iniciar Servidor de Produção:**
    ```bash
    npm start
    ```

## Estrutura do Projeto (Principais Pastas)

```
frontend/
├── app/                      # Pasta principal da aplicação (App Router)
│   ├── api/                  # Rotas de API
│   │   └── send-email/       # API para envio de e-mail
│   │       └── route.ts
│   ├── ui/                   # Componentes de UI reutilizáveis
│   │   ├── alert.tsx
│   │   ├── contact.tsx
│   │   ├── footer.tsx
│   │   ├── navbar.tsx
│   │   └── whatsappbutton.tsx
│   ├── layout.tsx            # Layout principal da aplicação
│   └── page.tsx              # Página inicial
├── public/                   # Arquivos estáticos
├── .env.local                # Variáveis de ambiente (não versionado)
└── ...                       # Outros arquivos de configuração
```

## Deploy

Este projeto Next.js pode ser facilmente implantado em plataformas como Vercel (recomendado), Netlify, AWS Amplify, entre outras. A Vercel oferece integração direta com repositórios GitHub para deploys automáticos.