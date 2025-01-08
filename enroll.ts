import { Connection, PublicKey, Keypair } from "@solana/web3.js";
import { Program, Wallet, AnchorProvider } from "@coral-xyz/anchor";
import { IDL, Turbin3Prereq } from "./programs/Turbin3_prereq";
import wallet from "./Turbin3-wallet.json";

// Importing Turbin3 keypair
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));
console.log("Loaded keypair: ", keypair.publicKey.toBase58());

const connection = new Connection("https://api.devnet.solana.com");

// Github account
const github = Buffer.from("santy311", "utf8");

// Create our anchor provider
const provider = new AnchorProvider(connection, new Wallet(keypair), {
  commitment: "confirmed",
});

// Program
const program: Program<Turbin3Prereq> = new Program(IDL, provider);

const enrollmentSeeds = [Buffer.from("prereq"), keypair.publicKey.toBuffer()];
const [enrollment_key, _bump] = PublicKey.findProgramAddressSync(enrollmentSeeds, program.programId);

console.log("Enrollment key (toBase58): ", enrollment_key.toBase58());

// Execute our enrollment transaction
(async () => {
    try {
        const txhash = await program.methods
            .complete(github)
            .accounts({
                signer: keypair.publicKey,
            })
        .signers([
            keypair
        ]).rpc();

        console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
  } catch (e) {
    console.error(`Oops, something went wrong: ${e}`);
  }
})();