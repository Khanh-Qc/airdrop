// Function to calculate the total CurrentGrindP and VEPoint where Earnable is true
function calculateTotalValues(userProfile) {
    let totalCurrentGrindP = 0;
    let totalVEPoint = 0;

    userProfile.forEach(profile => {
        if (profile.Earnable === false) {
            totalCurrentGrindP += profile.CurrentGrindP;
            totalVEPoint += profile.VEPoint;
        }
    });

    return {
        totalCurrentGrindP,
        totalVEPoint
    };
}

// Example userProfile array (you can modify this to add/remove elements)
const userProfile = [
  { NFT: "A", NFTRarity: "Common", CurrentGrindP: 0.012, VEPoint: 0.02, Earnable: true },
  { NFT: "B", NFTRarity: "Epic", CurrentGrindP: 0.084, VEPoint: 0.063, Earnable: true },
  { NFT: "C", NFTRarity: "Legendary", CurrentGrindP: 0.13, VEPoint: 0.067, Earnable: true },
  { NFT: "D", NFTRarity: "Rare", CurrentGrindP: 0.026, VEPoint: 0.033, Earnable: true },
  { NFT: "E", NFTRarity: "Rare", CurrentGrindP: 0.028, VEPoint: 0.033, Earnable: false },
  { NFT: "F", NFTRarity: "Free", CurrentGrindP: 0.0008, VEPoint: 0.0018, Earnable: false }
];

userProfile.forEach(profile => {
    console.log(profile)
});

// Calculate the total values
const totals = calculateTotalValues(userProfile);
console.log("Total CurrentGrindP:", totals.totalCurrentGrindP);
console.log("Total VEPoint:", totals.totalVEPoint);
