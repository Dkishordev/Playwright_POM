# NVM (Node Version Manager) Installation Guide

## Table of Contents
- [Install NVM on macOS / Linux](#a-macos--linux)
- [Install NVM on Windows](#b-windows)
- [Install Node.js Using NVM](#install-nodejs-using-nvm)
- [Run Tests](#run-tests)

---

## A. macOS / Linux

### 1. Download and Install NVM

Run the following command in your terminal:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

### 2. Activate NVM

Add the following lines to your shell configuration file (`~/.bashrc`, `~/.zshrc`, or `~/.bash_profile`):

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
```

Then reload your shell:

```bash
source ~/.bashrc
```

### 3. Verify Installation

```bash
nvm --version
```

If you see a version number, NVM is successfully installed.

---

## B. Windows

> NVM is not natively supported on Windows. Use **nvm-windows** instead.

### 1. Download nvm-windows

- Visit the [nvm-windows releases page](https://github.com/coreybutler/nvm-windows/releases)
- Download the latest `nvm-setup.zip` file

### 2. Install nvm-windows

- Extract the `.zip` file
- Run `nvm-setup.exe` and follow the installation wizard

### 3. Verify Installation

Open **Command Prompt** and run:

```cmd
nvm version
```

If you see a version number, NVM is successfully installed.

---

## Install Node.js Using NVM

Once NVM is installed, run the following commands to install and use Node.js:

```bash
nvm install 20
nvm use 20
node -v
```

---

## Run Tests

Navigate to your test project directory first, then run:

```bash
npm install
npx playwright install
```
