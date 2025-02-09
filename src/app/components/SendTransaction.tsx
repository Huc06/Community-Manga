'use client';

import { useState } from 'react';
import { useSendTransaction, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';

interface SendTransactionProps {
  contractAddress: `0x${string}`; // Ensure the address is of the correct format
}

const SendTransaction: React.FC<SendTransactionProps> = ({ contractAddress }) => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const { data: hash, error, isPending, sendTransaction } = useSendTransaction();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

  const handleSend = async () => {
    if (!recipient || !amount) {
      alert('Please enter recipient and amount');
      return;
    }

    try {
      await sendTransaction({
        to: recipient,
        value: parseEther(amount),
      });
    } catch (err) {
      console.error(err);
      alert('Transaction failed! ' + err.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Recipient Address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Amount (ETH)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="mb-2 p-2 border border-gray-300 rounded"
      />
      <button onClick={handleSend} className="bg-blue-500 text-white p-2 rounded" disabled={isPending}>
        {isPending ? 'Confirming...' : 'Send Money'}
      </button>
      <div className="mt-4 border p-4 rounded-lg shadow-md">
        {hash && (
          <div className="text-green-600 font-semibold">
            Transaction Hash: <span className="text-blue-500 break-words">{hash}</span>
          </div>
        )}
        {isConfirming && <div className="text-yellow-600">Waiting for confirmation...</div>}
        {isConfirmed && <div className="text-green-600 font-semibold">Transaction confirmed.</div>}
        {error && <div className="text-red-600">Error: {error.message}</div>}
      </div>
    </div>
  );
};

export default SendTransaction; 