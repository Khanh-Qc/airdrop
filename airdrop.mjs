import { airdropConfig } from "./config-airdrop.mjs";
import data from './log.json' assert { type: 'json' };
console.log(data)


// import data
let TOT_NFT_EARNABLE = 9
let milestones = 2
let currency = 'EQUIPMENTS'
let THGRate_RealTime = 0.02394501
let newCurrency = "EQUIPMENTS"


const Utils = {
    winrateAdjust: (current_winrate) => {
        return 1 + Math.max(current_winrate - 0.5, 0) * 2
    },
    calcTotalValue: (userProfile) => {
        let totalCurrentGrindP = 0;
        let totalVEPoint = 0;
    
        userProfile.forEach(profile => {
            if (profile.Earnable) {
                totalCurrentGrindP += profile.CurrentGrindP;
                totalVEPoint += profile.VEPoint;
            }
        });
    
        return {
            totalCurrentGrindP,
            totalVEPoint
        };

    },
    avgEarnPoint: (sumTotalCurGrindPAndVEPoint, TOT_NFT_EARNABLE, winrateAdjust) => {
        return (sumTotalCurGrindPAndVEPoint / TOT_NFT_EARNABLE) * winrateAdjust
    },
    timeReqPerMilestones: (milestones,TIME_REQ_BASE, TIME_REQ_STEP, HAS_ONLY_FREE_NFT) => {
        return (TIME_REQ_BASE + (milestones - 1) * TIME_REQ_STEP) * HAS_ONLY_FREE_NFT
    },
    aggTimeReq: (milestones, TOT_MILESTONES) => {
 
    },
    thgReqPerMilestones: (avgEarnPoint, timeReqPerMilestones) => {
        return avgEarnPoint * timeReqPerMilestones * 60
    },
    shareRate: (milestones, SHARE_RATE_BASE, SHARE_RATE_STEP) => {
        return SHARE_RATE_BASE + (milestones - 1) * SHARE_RATE_STEP
    },
    baseAirDrop: (shareRate, thgReqPerMilestones) => {
        return thgReqPerMilestones * shareRate
    },
    actAirdrop: (currency ,baseAirDrop, airdropConfig) => {
        return baseAirDrop * (1 - 
            (airdropConfig.actAirdrop.CURRENT_ROI * airdropConfig.actAirdrop.EFFECT[currency].Current_ROI) +
            (airdropConfig.actAirdrop.MARKETING_RATE * airdropConfig.actAirdrop.EFFECT[currency].Marketing_Rate) - 
            (airdropConfig.actAirdrop.INFLATION_RATE * airdropConfig.actAirdrop.EFFECT[currency].Inflation_Rate) +
            (airdropConfig.actAirdrop.EQUIPMENT_RATE * airdropConfig.actAirdrop.EFFECT[currency].Equipment_Rate))
    },
    convertValue: (actAirdrop, newCurrency, THGRate_RealTime) => {
        if(newCurrency === "THG") {
            return actAirdrop
        } else if(newCurrency === "THW"){
            return actAirdrop/ 100
        } else if (newCurrency === "USDT") {
            return actAirdrop * THGRate_RealTime
        }
    }
}

let winrateAdjust = Utils.winrateAdjust(0)
let avgEarnPoint = 0.2041679226376029
let shareRate = Utils.shareRate(milestones, airdropConfig.baseAirdrop.SHARE_RATE_BASE, airdropConfig.baseAirdrop.SHARE_RATE_STEP)
let timeReqPerMilestones = Utils.timeReqPerMilestones(milestones, airdropConfig.milestones.TIME_REQ_BASE, 
    airdropConfig.milestones.TIME_REQ_STEP, 
    1 // chưa có freeNFT nên tạm set = 1
)
let thgReqPerMilestones = Utils.thgReqPerMilestones(avgEarnPoint, timeReqPerMilestones)
let baseAirDrop =Utils.baseAirDrop(shareRate, thgReqPerMilestones)
let actAirdrop = Utils.actAirdrop(currency, baseAirDrop, airdropConfig)
let convertValue = Utils.convertValue(actAirdrop, newCurrency, THGRate_RealTime)
