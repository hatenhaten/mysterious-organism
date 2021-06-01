// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

// Pila Aequer factory function
const pAequorFactory = (num, dna) => {
  return {
    specimenNum: num,
    dna: dna,
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      return this.dna;
    }
  }
}





// Console logs
// console.log(returnRandBase());
// console.log(mockUpStrand());
// console.log(pAequorFactory(1, mockUpStrand()));
let pA1 = pAequorFactory(1, mockUpStrand());
console.log(pA1.dna);
console.log(pA1.mutate());







