export const airdropConfig = {
    milestones: {
        TOT_MILESTONES: 6 ,
        TIME_REQ_BASE: 5 ,
        TIME_REQ_STEP: 15,
        HAS_ONLY_FREE_NFT: 5,
        CURRENT_WINRATE: 1
    },
    baseAirdrop: {
        SHARE_RATE_BASE: 0.1,
        SHARE_RATE_STEP: 0.001
    },
    rewardType: {
        THG: 0.3,
        THW: 0.25,
        EQUIPMENTS: 0.4,
        USDT: 0.05
    },
    actAirdrop: {
        CURRENT_ROI: 0.1,
        MARKETING_RATE: 0.1,
        INFLATION_RATE: 0.1,
        EQUIPMENT_RATE: 0.1,
        EFFECT: {
            THG: {
            Current_ROI: 1,
            Marketing_Rate: 1,
            Inflation_Rate: 1,
            Equipment_Rate: 0
            },
            THW: {
                Current_ROI: 0,
                Marketing_Rate: 1,
                Inflation_Rate: 0,
                Equipment_Rate: 0
        },
            EQUIPMENTS: {
                Current_ROI: 1,
                Marketing_Rate: 1,
                Inflation_Rate: 0,
                Equipment_Rate: 1
        },
            USDT: {
                Current_ROI: 1,
                Marketing_Rate: 1,
                Inflation_Rate: 0,
                Equipment_Rate: 0
        }
                }
        },
        convert: {
                THW_PER_THG: 100,
                THG_RATE_REALTIME:  0.06
        },
        claimRewardAndReset: {
                ARIDROP_RENEW_DURATION: 24,
                HIDDEN_SLOTS: 2
        }
}

export const userProfile = [
    { NFT: "A", NFTRarity: "Common", CurrentGrindP: 0.012, VEPoint: 0.02, Earnable: true },
    { NFT: "B", NFTRarity: "Epic", CurrentGrindP: 0.084, VEPoint: 0.063, Earnable: true },
    { NFT: "C", NFTRarity: "Legendary", CurrentGrindP: 0.13, VEPoint: 0.067, Earnable: true },
    { NFT: "D", NFTRarity: "Rare", CurrentGrindP: 0.026, VEPoint: 0.033, Earnable: true },
    { NFT: "E", NFTRarity: "Rare", CurrentGrindP: 0.028, VEPoint: 0.033, Earnable: false },
    { NFT: "F", NFTRarity: "Free", CurrentGrindP: 0.0008, VEPoint: 0.0018, Earnable: false }
  ];
