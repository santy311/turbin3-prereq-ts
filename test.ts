import bs58 from 'bs58'
import promptSync from 'prompt-sync'

const prompt = promptSync()

function base58ToWallet(): Uint8Array | undefined {
    console.log("Enter base58 encoded private key:");
    const base58Input = prompt(""); 
    
    try {
        const wallet = bs58.decode(base58Input);
        console.log("Decoded wallet bytes:", Array.from(wallet));
        return wallet;
    } catch (error) {
        console.error("Error decoding base58 string:", error);
    }
}

function walletToBase58(wallet: Uint8Array): string | undefined {    
    const base58 = bs58.encode(wallet);
    console.log("Base58 encoded string:", base58);
    return base58;
}

// Add main CLI function
function main() {
    console.log("\nBase58 Conversion Tool");
    console.log("1. Convert Base58 to Wallet bytes");
    console.log("2. Convert Wallet bytes to Base58");
    console.log("Any other key to exit");
        
    const choice = prompt("\nEnter your choice (1-3): ");
    
    switch(choice) {
        case "1":
            base58ToWallet();
            break;
        case "2":
            console.log("Enter wallet bytes (comma-separated numbers):");
            const bytesInput = prompt("");
            const bytes = new Uint8Array(bytesInput.split(",").map(num => parseInt(num.trim())));
            walletToBase58(bytes);
            break;
        default:
            console.log("Goodbye!");
            process.exit(0);
    }
    
    // Ask if user wants to continue
    const continue_ = prompt("\nWould you like to continue? (y/n): ");
    if (continue_.toLowerCase() === 'y') {
        main();
    }
}

// Run the CLI if this file is executed directly
if (require.main === module) {
    main();
}

export { base58ToWallet, walletToBase58 }
