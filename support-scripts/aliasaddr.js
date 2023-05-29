// This file is only called from the aliasaddr bash ascript
// so no checks are done on the arguments received

// Constants
const ADDRESS_BIT_LENGTH = 160;
const ADDRESS_NIBBLE_LENGTH = ADDRESS_BIT_LENGTH / 4;
const ADDRESS_ALIAS_OFFSET = "0x1111000000000000000000000000000000001111";

// Arguments
const address = process.argv[2];

// Calculations
const aliasAddr = BigInt.asUintN(
        ADDRESS_BIT_LENGTH,
        BigInt(address) + BigInt(ADDRESS_ALIAS_OFFSET)
    )
    .toString(16)
    .padStart(ADDRESS_NIBBLE_LENGTH, '0');

const unaliasedAddr = BigInt.asUintN(
    ADDRESS_BIT_LENGTH,
    BigInt(address) - BigInt(ADDRESS_ALIAS_OFFSET)
)
.toString(16)
.padStart(ADDRESS_NIBBLE_LENGTH, '0');

console.log("------------------------------------------------------------------");
console.log("Original address:\t" + address);
console.log("Alias address:\t\t0x" + aliasAddr);
console.log("Unalias address:\t0x" + unaliasedAddr);
console.log("------------------------------------------------------------------");