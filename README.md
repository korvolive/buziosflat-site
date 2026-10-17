# Búzios Flat Pousada — site

Site de buziosflat.com.

- `index.html`: o site inteiro, em português, inglês e espanhol. O número do WhatsApp (`WHATSAPP`) e a lista de fotos (`PHOTOS`) ficam no início do script; os textos em inglês e espanhol ficam logo abaixo, em `T`.
- `img/`: fotos do site (versão grande e miniatura `-t`). Para trocar uma foto, substitua o arquivo mantendo o mesmo nome.

O envio para a HostGator é feito pelo arquivo `.github/workflows/deploy.yml`, usando os segredos
FTP_SERVER, FTP_USERNAME e FTP_PASSWORD cadastrados no repositório. Por enquanto ele só roda pelo
botão "Run workflow" na aba Actions.
