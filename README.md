### ✅ **README.md**

````markdown
# Apache Docker Project

Este é um projeto Docker para executar um servidor Apache simples, utilizando um arquivo `docker-compose.yml` para configurar e rodar o Apache, além de um arquivo de configuração personalizado `httpd.conf`.

## Estrutura do Projeto

- `docker-compose.yml`: Arquivo de configuração do Docker Compose para rodar o Apache.
- `httpd.conf`: Arquivo de configuração personalizado do Apache.
- `app/`: Pasta contendo os arquivos da aplicação web, incluindo HTML, CSS e JS.
- `.gitignore`: Arquivo para ignorar arquivos temporários e de configuração.
- `README.md`: Este arquivo com as instruções do projeto.

## Como Rodar o Projeto

1. Clone o repositório para sua máquina local:

```bash
   git clone git@github.com:marceloscientist/apache-docker.git
   cd apache-docker
````

2. Certifique-se de que o Docker e o Docker Compose estão instalados no seu sistema.

3. Suba os containers com Docker Compose:

```bash
   docker-compose up --build
```

4. Acesse a aplicação no navegador em [http://localhost:80](http://localhost:80).

## Como Personalizar

* Você pode adicionar seus arquivos HTML, CSS e JS na pasta `app/`.
* O arquivo `httpd.conf` pode ser editado para personalizar as configurações do Apache conforme necessário.

## Licença

Este projeto é de código aberto e pode ser utilizado conforme os termos de licenciamento.

``` 