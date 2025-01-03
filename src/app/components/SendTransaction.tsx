'use client';

import { useState } from 'react';
import { useSendTransaction, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';

interface SendTransactionProps {
  contractAddress: `0x${string}`; // Ensure the address is of the correct format
}

const SendTransaction: React.FC<SendTransactionProps> = ({ contractAddress }) => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const { data: hash, error, isPending, sendTransaction } = useSendTransaction();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

  const handleSend = async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask!');
      return;
    }

    const value = parseEther(amount); // Convert ETH amount

    try {
      await sendTransaction({ to: contractAddress, value });
      alert('Transaction sent! Waiting for confirmation...');
    } catch (error) {
      console.error(error);
      alert('Transaction failed! ' + (error as Error).message);
    }
  };

  return (
    <div className="text-black">
      <input
        type="text"
        placeholder="Amount (ETH)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <input
        type="text"
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 mb-4 w-full"
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