// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      let randBase = returnRandBase();
      const randMutate = Math.floor(Math.random() * this.dna.length);

//Loop through and compare randomly selected base with the base in the DNA until they're not equal
      while (this.dna[randMutate] === randBase) {
        randBase = returnRandBase();
      }

      this.dna[randMutate] = randBase;
      return this.dna;
     },

    compareDNA(dnaArr) {
      let counter = 0
      for (i = 0; i < this.dna.length; i++){
      if (this.dna[i] === dnaArr.dna[i]) {
        counter++
        }       
      }
// Calculate % similarities
      const similarities = (counter/this.dna.length) * 100
      const similarities2DP = similarities.toFixed(2);
      console.log(`specimen #1 and specimen #2 have ${similarities2DP}% DNA in common`)
    },

// A method to determine if the P.aequor qill survive, if either the 'C' base or 'G' base make up > 60% of the bases
    willLikelySurvive() {
      let counter = 0;
      this.dna.forEach(base => {
        if (base == 'C' || base == 'G') {
          return counter++
        }
      })
      if (counter/this.dna.length > 0.6){
        return true
      } else {
        return false
      }
    }
  }
}

// Continues to create 30 pAequor objects and stores them in the array if it passes the .willLikelySurvive method
let pAequorArray = [];
let indexCounter = 1;

while (pAequorArray.length < 30) {
  let pAequor = pAequorFactory(indexCounter, mockUpStrand());
  if (pAequor.willLikelySurvive()) {
    pAequorArray.push(pAequor);
  }
  indexCounter++;
}










