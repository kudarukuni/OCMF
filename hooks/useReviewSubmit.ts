import { Movie } from '../lib/web3/movie';
import * as web3 from '@solana/web3.js';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

const MOVIE_REVIEW_PROGRAM_ID = '';

const useReviewSubmit = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const handleTransactionSubmit = async (movie: Movie) => {
    if (!publicKey) {
      alert('please connect your wallet first');
      return;
    }

    const buffer = movie.serialize();
    const transaction = new web3.Transaction();

    const [pda] = await web3.PublicKey.findProgramAddress(
      [publicKey.toBuffer(), new TextEncoder().encode(movie.movieId)],
      new web3.PublicKey(MOVIE_REVIEW_PROGRAM_ID)
    );

    const instruction = new web3.TransactionInstruction({
      keys: [
        {
          // Your account will pay the fees, so it's writing to the network
          pubkey: publicKey,
          isSigner: true,
          isWritable: false,
        },
        {
          // The PDA will store the movie review
          pubkey: pda,
          isSigner: false,
          isWritable: true,
        },
        {
          // The system program will be used for creating the PDA
          pubkey: web3.SystemProgram.programId,
          isSigner: false,
          isWritable: false,
        },
      ],
      // Here's the most important part!
      data: buffer,
      programId: new web3.PublicKey(MOVIE_REVIEW_PROGRAM_ID),
    });

    transaction.add(instruction);

    try {
      let txid = await sendTransaction(transaction, connection);
      console.log(
        `Transaction submitted: https://explorer.solana.com/tx/${txid}?cluster=devnet`
      );
    } catch (e) {
      alert(JSON.stringify(e));
    }
  };

  return handleTransactionSubmit;
};

export default useReviewSubmit;
