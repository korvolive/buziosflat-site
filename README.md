# Búzios Flat Pousada — site

Site de buziosflat.com.

- `index.html`: o site inteiro, em português, inglês e espanhol. O número do WhatsApp (`WHATSAPP`) e a lista de fotos (`PHOTOS`) ficam no início do script; os textos em inglês e espanhol ficam logo abaixo, em `T`.
- `en/` e `es/`: páginas em inglês e espanhol. **Não edite**: são geradas sozinhas a partir do `index.html` no envio (`scripts/gerar-idiomas.cjs`), para o Google encontrar cada idioma no seu endereço.
- `img/`: fotos do site (versão grande e miniatura `-t`). Para trocar uma foto, substitua o arquivo mantendo o mesmo nome.
- `.htaccess`: endereço único (https://www.buziosflat.com), cabeçalhos de segurança, bloqueio de sobras do WordPress, página 404 e cache das fotos.
- `404.html`, `favicon.*`, `apple-touch-icon.png`: página de erro e ícones (o Google mostra o ícone ao lado do site nos resultados).

O envio para a HostGator é feito pelo arquivo `.github/workflows/deploy.yml`, usando os segredos
FTP_SERVER, FTP_USERNAME e FTP_PASSWORD cadastrados no repositório. Toda alteração salva na
branch `main` é enviada automaticamente. Para conferir o site no ar, rode o workflow "Verificar site no ar".
