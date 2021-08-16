import fs from 'fs'
import jsonl from 'jsonl'

try {
  fs.createReadStream("./json/in.json")
    .pipe(jsonl())
    .pipe(fs.createWriteStream("./out.jsonl"))
}
catch (e) {
  console.log(e)
}
