import axios from "axios";

export const LerConteudoDaImagem = async (formData) => {
    var resultado;

    await axios({
        method: 'POST',
        url: "https://ocr-equipamentos-pedrol.cognitiveservices.azure.com/vision/v3.2/ocr?language=unk&detectOrientation=true&model-version=latest",
        data: formData,
        headers: {
            "Ocp-Apim-Subscription-Key" : "0be40a19bfba45e88dafa6dceed1f31f",
            "Content-Type" : 'application/json'
        }
    })
    .then((response) => {
        resultado = FiltrarObj(response.data);
    })
    .catch((erro) => {
        console.log(erro);
    })

    return resultado;
}

export const FiltrarObj = async (obj) => {
    var resultado;

    await obj.regions.forEach(region => {
        region.lines.forEach(line => {
            line.words.forEach(word => {
                if (word.text[0] === "1" && word.text[1] === "2") {
                  resultado = word.text;  
                }
            });
        });
    });

    return resultado;
} 