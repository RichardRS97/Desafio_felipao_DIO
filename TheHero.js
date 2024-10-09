// Criando a Classe Herói
// Classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método para atacar
    /**
     * Método para exibir a mensagem de ataque do herói.
     * O método verifica o tipo do herói e exibe a mensagem de ataque correspondente.
     */
    atacar() {
      let ataque;
      
      switch (this.tipo.toLowerCase()) {
        case 'Harry Potter':
          ataque = 'Expecto Patronum';
          break;
        case 'Goku':
          ataque = 'Kamehameha';
          break;
        case 'Dalai Lama':
          ataque = 'Defesa Pacientes';
          break;
        case 'Po':
          ataque = 'Golde do dedo wuxi';
          break;
        default:
          ataque = 'ataque desconhecido';
      }
      // Exibe a mensagem de ataque do herói
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso
  const heroi1 = new Heroi('Goku', 30, 'guerreiro');
  const heroi2 = new Heroi('Harry Potter', 16, 'mago');
  const heroi3 = new Heroi('Dalai Lama', 70, 'monge');
  const heroi4 = new Heroi('Po', 20, 'ninja');
  
  heroi1.atacar(); // Saída: O Goku atacou usando Kamehameha
  heroi2.atacar(); // Saída: O Harry Potter atacou usando Expecto Patronum
  heroi3.atacar(); // Saída: O Dalai Lama atacou usando Defesa Pacientes
  heroi4.atacar(); // Saída: O Po atacou usando Golde do dedo wuxi



  //// Porque não retorna o nome do herói e somente seu tipo????