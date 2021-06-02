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
    },
    compareDNA(pA2) {
      let pA1dna = this.dna;
      let pA2dna = pA2.dna;
      let sameBaseCount = 0;
      console.log(pA1dna);
      console.log(pA2dna);
      for (let i = 0; i < pA1dna.length; i++) {
        if (pA1dna[i] == pA2dna[i]) {
          sameBaseCount += 1;
        };
      }
      console.log(sameBaseCount);
      let percentSimilar = (sameBaseCount / pA1dna.length) * 100;
      return `specimen #1 and specimen #2 have ${percentSimilar}% DNA in common`;
      }
    }
  }





// Console logs
// console.log(returnRandBase());
// console.log(mockUpStrand());
// console.log(pAequorFactory(1, mockUpStrand()));
let pA1 = pAequorFactory(1, mockUpStrand());
let pA2 = pAequorFactory(2, mockUpStrand())
// console.log(pA1.dna);
// console.log(pA1.mutate());
console.log(pA1.compareDNA(pA2));






