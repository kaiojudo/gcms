exports.getImageUpload = function (req, res) {
    res.send({
        "success": 1,
        "file": {
            "url": `http://localhost:3030/public/images/${res.req.file.filename}`,
        }
    });
}