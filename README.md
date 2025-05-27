# 🤖 Chatbot IA - Desafio Técnico Frontend

Este é um chatbot de inteligência artificial desenvolvido em Next.js + React para o desafio técnico do time de Engenharia de Dados & IA.

O objetivo é permitir que usuários interajam com um modelo de IA via interface moderna e responsiva, com histórico, loading, tratamento de erros, exportação da conversa e deploy em produção.

---

## 🚀 Tecnologias Utilizadas

- [Next.js 13+ (App Router)](https://nextjs.org)
- [React.js](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com)
- [Shadcn UI](https://ui.shadcn.com)
- API: [OpenRouter (proxy gratuito de IA compatível com OpenAI)](https://openrouter.ai)

---

## 🧠 Como Funciona

- O usuário envia uma pergunta via input.
- O frontend envia o histórico para a rota `/api/chat`.
- A rota faz uma chamada à API do OpenRouter (modelo GPT-3.5).
- A resposta é exibida em tempo real na tela.
- A conversa pode ser exportada em `.json`.

---

## 🔐 Como Obter a Chave da OpenRouter

1. Acesse: [https://openrouter.ai](https://openrouter.ai)
2. Crie uma conta e vá em: [https://openrouter.ai/keys](https://openrouter.ai/keys)
3. Gere uma chave (token)
4. No ambiente local, crie o arquivo `.env.local` e adicione:

```env
OPENROUTER_API_KEY=sua-chave-aqui


# Clone o repositório
git clone https://github.com/GabrieldePaula95/chatbot-ia.git
cd chatbot-ia

# Instale as dependências
npm install

# Crie o arquivo .env.local com sua chave OpenRouter
touch .env.local
# e adicione: OPENROUTER_API_KEY=sua-chave

# Rode o projeto
npm run dev

📦 Funcionalidades
✅ Chat com IA integrada (GPT-3.5 via OpenRouter)

✅ Interface moderna com Tailwind + Shadcn UI

✅ Loading de resposta

✅ Tratamento de erros da API

✅ Histórico de mensagens

✅ Exportar conversa em .json

✅ Deploy em produção via Vercel

🌐 Deploy (Vercel)
Acesse a versão em produção aqui:
👉 https://chatbot-ia-five.vercel.app

👨‍💻 Autor
Gabriel de Paula
github.com/GabrieldePaula95

