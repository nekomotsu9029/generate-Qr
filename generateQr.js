const fs = require('fs');
const qrcode = require('qrcode');

const contentQr = 'hola_mundo';

const generateQr = async ()=>{
    const QR = await qrcode.toDataURL(contentQr);
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example qr generate</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="card card-body bg-dark">
                    <img src="${QR}" alt="">
                </div>
            </div>
        </div>
    </div>
</body>
</html>`
    fs.writeFileSync('./example/index.html', htmlContent)
}

generateQr();