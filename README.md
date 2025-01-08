# Turbin3 Q1 Prerequisite - TypeScript

This repository contains the prerequisite task.

### 1. Create a keypair

Generates a keypair to be used for the task

```
$ ts-node ./keygen.ts
You've generated a new Solana wallet: GRJbfTTV83SnrP5yvz43V7HwxZeKNekU6tDeJU53bqc2
```

### 2. Claim token Airdrop

Request 2 SOL tokens on the Solana devnet for testing.

```
$ ts-node ./airdrop.ts
Success! Check out your TX here: https://explorer.solana.com/tx/3oSau7RXCnYPVvE5GH2PWKdZmhg8yCDfESjsec15SkKhkPq2njea2EggfhzpBfJf1RXXX4yNA7d2y5fvyaBuRfYm?cluster=devnet
```

[explorer link](https://explorer.solana.com/tx/3oSau7RXCnYPVvE5GH2PWKdZmhg8yCDfESjsec15SkKhkPq2njea2EggfhzpBfJf1RXXX4yNA7d2y5fvyaBuRfYm?cluster=devnet)

### 3. Transfer tokens to your Turbin3 Address

Transfer 0.1 Sol (not LAMPORTS_PER_SOL / 100) from created account to Turbin3 Wallet

```
$ ts-node ./transfer.ts
Success! Check out your TX here: https://explorer.solana.com/tx/25D57gYryA8Pg8LxTZaBcQsTzxX39evRQJDyt52UvmkuvAeY9FEjix6oA4TcSn6fUwoxYentAw7Zadt1fyWPioxn?cluster=devnet
```

[explorer link](https://explorer.solana.com/tx/25D57gYryA8Pg8LxTZaBcQsTzxX39evRQJDyt52UvmkuvAeY9FEjix6oA4TcSn6fUwoxYentAw7Zadt1fyWPioxn?cluster=devnet)

### 4. Empty devnet wallet into Turbin3 wallet

Drain the wallet for from created account to Turbin3 Wallet

```
$ ts-node ./transfer.ts
Fee: 5000
Success! Check out your TX here: https://explorer.solana.com/tx/FAWCQFyhtrdEoRgDb3m6qnPwfCVgaYahvx8A4A8fBKq2kxdo7cCzeKEJMYRMF7Gs9HcH8me9hFhZ9TzeBotMYf1?cluster=devnet
```

[explorer link](https://explorer.solana.com/tx/FAWCQFyhtrdEoRgDb3m6qnPwfCVgaYahvx8A4A8fBKq2kxdo7cCzeKEJMYRMF7Gs9HcH8me9hFhZ9TzeBotMYf1?cluster=devnet)

### 5. Interacting with wba_prereq program

Use the IDL and create a transaction to enrol which will create a PDA for you.

PDA created:

```
$ ts-node ./enroll.ts
Loaded keypair: GN94ThZm9mghXtJxEvDaydK4h8CNkE5JanfDM3Lm9Gdh
Enrollment key (toBase58): ELaVMn9yLQ3cPh5VqdJWFNXPfvWChqcqcNy8ymvMXCpu
Success! Check out your TX here: https://explorer.solana.com/tx/5qceU2bQ9oQyScNGY1uGpSKo7xUTXjEuCSqPPXqijJYWpZGbsvc7eEnEZw3F2BfTMdn2QSca5CA457eV1ejFKt8V?cluster=devnet
```

[explorer link](https://explorer.solana.com/tx/5qceU2bQ9oQyScNGY1uGpSKo7xUTXjEuCSqPPXqijJYWpZGbsvc7eEnEZw3F2BfTMdn2QSca5CA457eV1ejFKt8V?cluster=devnet)

PDA account created with balance:
ELaVMn9yLQ3cPh5VqdJWFNXPfvWChqcqcNy8ymvMXCpu
0.00146856 SOL
