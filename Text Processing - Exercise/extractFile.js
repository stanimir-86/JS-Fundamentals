function extractFile(text) {

    let file = text.substring(text.lastIndexOf("\\") + 1);
    let fileName = file.substring(0, file.lastIndexOf("."));
    let fileExtention = file.substring(file.lastIndexOf(".") + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtention}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx')