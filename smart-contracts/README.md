# Feel The Match Token by goTokens

The FTMT token follows the ERC 20 Smart Contract Pattern.

For now, the contract is deployed on Rinkeby testnet, and can be accessible via https://rinkeby.etherscan.io/address/0x55806727f6f4b28789bc48eaed6d53f00f713dc7

At the moment of deployment, we should be able to set the initial token supply. Tokens minted during the deploy will be shown at the depolyers account balance. Tokens owners can transfer or burn their own tokens. This contract also allows accounts to approve the spending or burning of its FTMT funds by another account. The approved amount can be updated or even revoked at any time by tokens owner.

This contract uses a special function (fallback()) to revert transactions that send amounts of the blockchain's native criptoasset (MATIC, ETH, etc) to the contracts account. This can be done only for MATIC (or ETH). This means that we can't revert the transfer into our Smart Contract account when the transfer regards tokens or NFTs being controlled on third partie's Smart Contracts.

This contract implement access controls to lock permissioned functions using the different roles: the account that deploys the contract will be granted the *minter* and *pauser* roles, as well as the default *admin* role.

- *Minter* role allows token minting (creation);
- *Pauser* role allows to stop all token transfers.
- *Admin* role can grant or revoke roles to other accounts

The contract also allows accounts to make the following consultations:

- Check allowances by accounts to other accounts and the amount allowed to spend/burn;
- Check the precision number for token arithmetics (fixed: 6);
- Check if certain account has a certain role;
- Check if contract transfers are paused or not;
- Consult the token symbol (fixed: FTMT);
- Check the total supply of tokens in circulation (this supply is update as new tokens are minted or if someone burns the tokens).

