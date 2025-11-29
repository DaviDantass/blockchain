import { Blockchain } from './blockchain'

const difficulty = Number(process.argv[2]) || 4
const blockchain = new Blockchain(difficulty)

const numBlocks = Number(process.argv[3]) || 10

let chain: any = null

for(let i = 0; i < numBlocks; i++) {
    const block = blockchain.createBlock(`Block ${i}`)
    const mineInfo = blockchain.mineBlock(block)
    chain = blockchain.pushBlock(mineInfo.minedBlock)
}

console.log("--- Blockchain ---")
console.log(chain)