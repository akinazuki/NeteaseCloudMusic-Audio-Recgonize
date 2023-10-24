import ncmutils from 'ncm-audio-recognize'
import fs from 'fs'

const buffer = fs.readFileSync("./takenohana.mp3")

const encoded = await ncmutils.encode(buffer)
const result = await ncmutils.recognize(encoded)
console.log(`Matched result count: ${result.length}`)
result.forEach((item, index) => {
    console.log(`[${index + 1}] ${item.song.name} - ${item.song.artists.map(artist => artist.name).join('/')} Album: 「${item.song.album.name}」 CID: [${item.song.id}]`)
})