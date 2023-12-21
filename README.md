# url-shortener
    Deno API to shorten urls

Este é um projeto simples de URL Shortener implementado em Deno. Ele permite encurtar URLs longas para URLs curtas e persiste os dados em um arquivo `db.json`.

## Funcionalidades

- Encurta URLs longas gerando URLs curtas correspondentes.
- Persiste os dados das URLs em um arquivo `db.json`.
- Oferece suporte aos métodos GET e POST para encurtar e expandir URLs.

## Como Executar

1. Certifique-se de ter o Deno instalado no seu sistema. [Instalação do Deno](https://deno.land/#installation)

2. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/url-shortener-deno.git
```

3. Navegue até o diretório do projeto:

```bash
cd url-shortener-deno
```

4. Execute o servidor:

```bash
deno run --allow-net --allow-read --allow-write server.ts
# Isso iniciará o servidor Deno na porta padrão 8080.
```

5. Abra o navegador e acesse [http://localhost:8080/](http://localhost:8080/) para acessar a interface do URL Shortener.

## Uso do Sistema

Você pode usar os métodos GET e POST para encurtar e expandir URLs.

### Encurtar uma URL (Método GET)

Você pode encurtar uma URL usando o método GET da seguinte maneira:

- Método: GET
- Endpoint: [http://localhost:8080/https://www.google.com](http://localhost:8080/https://www.google.com)

###  Formato de Retorno:

```json
{
    "method": "GET",
    "shorten": "http://short.url/-1632447"
}
```

Expandir uma URL (Método POST)

Você pode expandir uma URL encurtada usando o método POST da seguinte maneira:

  - Método: POST
  - Endpoint: http://localhost:8080/http://short.url/-1632447
### Formato de Retorno:

```json
{
    "longURL": "https://www.google.com",
    "method": "POST"
}
```
# Como Contribuir

Se deseja contribuir com melhorias ou correções para este projeto, você pode seguir estas etapas:

- Faça um fork do repositório.
- Crie uma branch para suas modificações:

```bash
git checkout -b feature/nova-funcionalidade
```

Faça suas alterações e adicione testes, se necessário.

Commit suas mudanças:
```bash
git commit -am 'Adiciona nova funcionalidade'
```
Envie as alterações para o seu repositório:
```bash
git push origin feature/nova-funcionalidade
```
Abra um Pull Request no repositório original.
