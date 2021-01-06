const express = require('express')
const {getNetworkDownloadSpeed, getNetworkUploadSpeed} = require('./connection')

const app = express()

const getVelocity = async (req, res) => {   
    const downloadSpeed = await getNetworkDownloadSpeed(); 
    const uploadSpeed = await getNetworkUploadSpeed();

    return res.status(200).json({
        uploadSpeed: uploadSpeed,
        downloadSpeed: downloadSpeed
    })
}

app.get('/', getVelocity)

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log('Server on port:', port)
})