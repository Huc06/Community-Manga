export const ProjectFundingABI = [
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "name": "campaigns",
	  "outputs": [
		{
		  "internalType": "address",
		  "name": "owner",
		  "type": "address"
		},
		{
		  "internalType": "string",
		  "name": "title",
		  "type": "string"
		},
		{
		  "internalType": "string",
		  "name": "description",
		  "type": "string"
		},
		{
		  "internalType": "uint256",
		  "name": "target",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "startTime",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "endTime",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "totalFunds",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "amountStreamed",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "lastStreamedTimestamp",
		  "type": "uint256"
		},
		{
		  "internalType": "string",
		  "name": "image",
		  "type": "string"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "_owner",
		  "type": "address"
		},
		{
		  "internalType": "string",
		  "name": "_title",
		  "type": "string"
		},
		{
		  "internalType": "string",
		  "name": "_description",
		  "type": "string"
		},
		{
		  "internalType": "uint256",
		  "name": "_target",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "_startTime",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "_endTime",
		  "type": "uint256"
		},
		{
		  "internalType": "string",
		  "name": "_image",
		  "type": "string"
		}
	  ],
	  "name": "createCampaign",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "_id",
		  "type": "uint256"
		}
	  ],
	  "name": "donateToCampaign",
	  "outputs": [],
	  "stateMutability": "payable",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "getCampaigns",
	  "outputs": [
		{
		  "components": [
			{
			  "internalType": "address",
			  "name": "owner",
			  "type": "address"
			},
			{
			  "internalType": "string",
			  "name": "title",
			  "type": "string"
			},
			{
			  "internalType": "string",
			  "name": "description",
			  "type": "string"
			},
			{
			  "internalType": "uint256",
			  "name": "target",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "startTime",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "endTime",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "totalFunds",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "amountStreamed",
			  "type": "uint256"
			},
			{
			  "internalType": "uint256",
			  "name": "lastStreamedTimestamp",
			  "type": "uint256"
			},
			{
			  "internalType": "string",
			  "name": "image",
			  "type": "string"
			},
			{
			  "internalType": "address[]",
			  "name": "donators",
			  "type": "address[]"
			},
			{
			  "internalType": "uint256[]",
			  "name": "donations",
			  "type": "uint256[]"
			}
		  ],
		  "internalType": "struct FundStreaming.Campaign[]",
		  "name": "",
		  "type": "tuple[]"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "_id",
		  "type": "uint256"
		}
	  ],
	  "name": "getDonators",
	  "outputs": [
		{
		  "internalType": "address[]",
		  "name": "",
		  "type": "address[]"
		},
		{
		  "internalType": "uint256[]",
		  "name": "",
		  "type": "uint256[]"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "name": "milestoneMet",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [],
	  "name": "numberOfCampaigns",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "_id",
		  "type": "uint256"
		},
		{
		  "internalType": "bool",
		  "name": "_status",
		  "type": "bool"
		}
	  ],
	  "name": "setMilestoneStatus",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "_id",
		  "type": "uint256"
		}
	  ],
	  "name": "withdrawDonations",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "_id",
		  "type": "uint256"
		}
	  ],
	  "name": "withdrawFunds",
	  "outputs": [],
	  "stateMutability": "nonpayable",
	  "type": "function"
	}
]