const fs = require('fs');

// Verifica se é um commit --amend verificando o arquivo .git/COMMIT_EDITMSG
const isAmendCommit = () => {
  try {
    const gitHeadPath = '.git/COMMIT_EDITMSG';
    return fs.existsSync(gitHeadPath) && fs.readFileSync(gitHeadPath, 'utf8').length > 0;
  } catch (error) {
    return false;
  }
};

// Mapeamento dos tipos de commit para emojis Gitmoji
const emojiMap = {
  feat: '✨', // Adicionando uma nova funcionalidade
  chore: '🛠️', // Tarefas de manutenção
  fix: '🐛', // Corrigindo um bug
  build: '📦', // Build do sistema
  ci: '👷', // Integração contínua
  docs: '📚', // Atualizando documentação
  style: '💄', // Atualizando estilos, formatação de código
  refactor: '♻️', // Refatoração de código
  perf: '⚡', // Melhorando a performance
  test: '✅', // Adicionando ou corrigindo testes
};

// Pegue o nome do arquivo onde a mensagem de commit está armazenada
const commitMessageFile = process.argv[2];
if (!commitMessageFile) {
  console.error(
    'Erro: O caminho do arquivo de mensagem de commit não foi fornecido.'
  );
  process.exit(1); // Interrompe o script se o caminho não for fornecido
}

// Leia a mensagem de commit
let commitMessage = fs.readFileSync(commitMessageFile, 'utf8').trim();

// Se for um commit --amend, não aplica as regras
if (isAmendCommit()) {
  process.exit(0);
}

// Verifique o tipo do commit (ex: "fix", "feat") e associe o emoji
const typeMatch = commitMessage.match(
  /^(fix|feat|chore|docs|style|refactor|test|perf|ci|build)(\(.+\))?:/
);

if (typeMatch) {
  const type = typeMatch[1];
  const emoji = `[${emojiMap[type]}]`;

  // Se houver um emoji correspondente, adicione-o antes da mensagem de commit
  if (emoji) {
    commitMessage = `${emoji} ${commitMessage}`;
    fs.writeFileSync(commitMessageFile, commitMessage);
  }
}
