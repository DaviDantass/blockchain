const difficulty = Number(process.argv[2]) || 4
const blockhain = new Blockchain()

const numBlocks = Number(process.argv[3]) || 10

for(let i = 0; i < numBlocks; i++) {
    const block = new blockhain.createBlock(`Block #${i}`)
    cosnt mineInfo = block.mineBlock(block)
    chain = blockhain.sendBlock(mineInfo.mineBlock)
}

console.log("--- Blockchain ---")
console.log(chain)